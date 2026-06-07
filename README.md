# Portfolio Webpage

This is a first draft of a personal portfolio website. It is currently a static HTML/CSS site, so you can open `index.html` directly in a browser.

## Structure

- `index.html`: Portfolio sections and core content
- `project.html`: Shared project detail page
- `project-detail.js`: Project detail data and free-form page content
- `styles.css`: Layout, colors, and responsive styles
- `assets/projects/`: Place permanent project images and videos here

## Next Steps

- Replace the placeholder name, email, GitHub, and LinkedIn links with real information
- Add GitHub links and detail pages for each project
- Add a profile photo or project screenshots
- Convert the site to Next.js or Vite if the project grows

## Project Detail Content

The public detail page only displays text and media that is committed with the site. Visitors cannot upload files.

To add permanent detail content:

- Add files under `assets/projects/`
- Reference them from a project's `content` array in `project-detail.js`
- Commit and push the assets with the site

Example:

```js
content: [
  { type: "text", text: "What I built and why it matters." },
  {
    type: "image",
    src: "./assets/projects/example.png",
    alt: "Project screenshot",
  },
  { type: "text", text: "What the result shows." },
],
```

## Custom Domain

This site is configured for `kimmy.tech` with the `CNAME` file.

For GitHub Pages, set the domain DNS records to:

- `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` record for `www`: `kanghyeon5468.github.io`
