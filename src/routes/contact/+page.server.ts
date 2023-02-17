import type { PageServerLoad, Actions } from "./$types";
import Joi from "joi";
import { fail } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const load = (() => {
	const meta = {
		title: "Contact",
		description: "Send me a message!"
	};

	return {
		...meta
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, getClientAddress, fetch }) => {
		const formData = await request.formData();

		const formDataEntries = Object.fromEntries(formData.entries());

		const Body = Joi.object({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			message: Joi.string()
				.required()
				.custom((value, helpers) => {
					if (value.split(" ").length > 500) {
						return helpers.message({
							custom: "Message is too long, please keep it under 500 words."
						});
					}

					return value;
				})
		});

		if (Body.validate(formDataEntries).error) {
			return fail(400, {
				error: true,
				message: Body.validate(formDataEntries).error?.message
			});
		} else {
			await fetch(env.DISCORD_WEBHOOK_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					content: `**__New contact form submission__**\n\n**Name:** ${formData.get(
						"name"
					)}\n**Email:** ${formData.get(
						"email"
					)}\n**IP:** ${getClientAddress()}\n**Message:** ${formData.get(
						"message"
					)}`
				})
			});

			return {
				success: true,
				message:
					"Thanks for your message, I will reply as soon as possible."
			};
		}
	}
};
