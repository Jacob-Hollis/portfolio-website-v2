# Portfolio: Django → Angular, deployed on Netlify

## 1. Create the project

Needs Node.js 20.19+ or 22+ (`node -v`).

**Mac / Linux / Git Bash / WSL**

```bash
bash setup.sh
cd portfolio-site
npm start        # http://localhost:4200
```

**Manual steps (Windows PowerShell, or if the script fails)**

```bash
npx @angular/cli@latest new portfolio-site --routing --style=css --ssr=false --skip-git --defaults
```

Then copy everything inside `overlay/` into the new `portfolio-site/` folder, overwriting files when asked
(`src/index.html`, `src/styles.css`, `src/app/app.routes.ts`, and the new folders and files).
Finally replace the entire contents of `src/app/app.html` (or `src/app/app.component.html` on older CLIs) with:

```html
<router-outlet />
```

and delete `src/app/app.spec.ts` (or `app.component.spec.ts`).

## 2. Check it before deploying

- Click through all five pages, and refresh on `/projects` to confirm deep links work.
- Shrink the window to phone width and test the menu button.
- Run `npm run build` once. It should finish without errors.

## 3. Put it on GitHub

Either push this project to a new repo, or replace the contents of your existing `portfolio-website` repo
(keep the Django version on a branch or tag first: `git tag django-final` then `git push --tags`).
`netlify.toml` must be in the repo root.

## 4. Deploy on Netlify

1. Sign up at netlify.com with your GitHub account.
2. **Add new site → Import an existing project → GitHub**, then pick the repo.
3. Build settings are read from `netlify.toml` (build `npm run build`, publish `dist/portfolio-site/browser`). Deploy.
4. Open the `*.netlify.app` URL Netlify gives you and click through the site.

## 5. Point jacob-hollis.com at it

1. In Netlify: **Domain management → Add a domain** → `jacob-hollis.com`.
2. Netlify shows the DNS records to create. Add them at your domain registrar (not at AWS unless the domain's DNS is in Route 53).
   Typically an apex record for `jacob-hollis.com` and a CNAME for `www`.
3. Back in Netlify, once DNS verifies, the HTTPS certificate is issued and renewed automatically.
   Make sure "Force HTTPS" is on, and pick which of apex or `www` is the primary.
4. DNS changes can take minutes to hours. Until they land, the old (expired) site is what people see.

## 6. Shut down the old server

After the new site works on your domain, you can stop or terminate the EC2 instance (and release any Elastic IP)
to avoid charges. Keep a database backup first if you want the old data.

## Things I changed from the Django version

- About page: "built with Django" now says Angular.
- Projects: the "Portfolio Website" card now describes the Angular/Netlify version.
- Footer: the year updates automatically instead of the hard-coded 2023.
- Navigation: the menu toggle and active-page highlight are now Angular code, so jQuery/Popper aren't needed.
- Projects now live in `src/app/data/projects.ts` instead of a CSV loaded into Postgres.
- Page titles change per page (Home, About | Jacob Hollis, ...).
