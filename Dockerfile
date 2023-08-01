FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm i

COPY . .

RUN pnpm build

FROM caddy:2-alpine
COPY --from=build /app/dist/Caddyfile /etc/caddy
COPY --from=build /app/dist /usr/share/caddy
EXPOSE 1339