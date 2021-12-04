# Browser Copypasta

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/akisblack/browser-copypasta/Build%20and%20Deploy?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/akisblack/browser-copypasta?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/akisblack/browser-copypasta?style=for-the-badge)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fbrowsercp.tk)

> Live version: https://browsercp.tk

### A copypasta generator built with [SvelteKit](https://kit.svelte.dev). It uses MDsveX for handling copypasta data and TailwindCSS for its CSS.

---

## Developing

### Prerequisites

- Install [node.js](https://nodejs.org).
- Install [pnpm](https://pnpm.io).
- Learn [Svelte](https://svelte.dev).

### Install dependencies

```bash
pnpm i
```

### Scripts

#### `pnpm dev`

Runs a development server on http://localhost:3000.

#### `pnpm build`

Builds the project into the `build` folder.

#### `pnpm preview`

Runs the built project on http://localhost:3000.

### Project structure

```
/src/routes/_data/ --> The folder where the pastas are located.
```

```
All other directories should be in the SvelteKit docs.
```

### Pasta metadata

- "slug" is the link your pasta will be on ex: https://example.com/copypastas/example.

- "title" should be self explanatory.

- "name" is the pasta's title in capitals.

- "published" is a boolean. If true the pasta will display otherwise it will stay unpublished and not accessible anywhere outside the source code.

- "browser" is a boolean. If false the pasta card will display a tooltip that says "extra" to signify that it isn't a browser.

- "icon" contains an icon id respective to your browser obtained from https://icon-sets.iconify.design/.

### Adding a copypasta

Adding a copypasta is really simple as of v3. On this revision we handle the pastas in markdown files and thus make it really easy for the average user to add one.

#### Making the file

1. Make a .md file in the `src/routes/_data/` directory (preferably with your browser's name as a name for the file).
2. Open the file in your text editor and add the following (see [Pasta metadata](#pasta-metadata))

   ```md
   ---
   slug: example
   title: Example Browser
   name: EXAMPLE BROWSER
   published: true
   browser: true
   icon: icon-park-outline:h
   
   for me its the <b name="insert">{name}</b>
   ---
   ```

   > `<b name="insert">{name}</b>` You put this piece of html where you want the browser's name in capitals to be editable with the input GUI.

#### Submitting

1. Make a GitHub account.
2. Fork a project and push your changes to your fork.
3. Make a pull request to the upstream `master` branch.
4. Wait patiently for the project manager to review.

---

## License

This project is licensed under the MIT license.
