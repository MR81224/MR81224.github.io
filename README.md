# Muaz Khalifa Al Radi — Personal Academic Website

A static, no-build-step personal website (HTML/CSS/JS) designed for GitHub Pages.

## Pages

- `index.html` — Home
- `research.html` — Research interests, future research program, funded project
- `publications.html` — Scholar/Scopus metrics, selected publications, full publication list
- `teaching.html` — Courses taught, AI Winter Camp 2025, courses prepared to teach, YouTube teaser
- `service.html` — Mentorship, honors & awards, scholarships, peer review, academic service
- `cv.html` — Qualifications, experience, skills, CV PDF download
- `media.html` — Embedded videos (IES-SYPA award talk, CVPR 2026 talk) and SREE Tutorials channel
- `404.html` — Not-found page (used automatically by GitHub Pages)

## ⚠️ Before you publish — replace the placeholder photo

No photo file was available when this site was built, so two placeholders were used:

1. **On the website** — the hero section on `index.html` shows a navy panel with the initials "MA" instead of a real photo (`.photo-frame` / `.initials` in `assets/css/style.css`). To use a real photo, replace the markup:
   ```html
   <div class="photo-inner">
     <span class="initials">MA</span>
   </div>
   ```
   with an `<img>` tag pointing to a photo placed in `assets/img/`, e.g.:
   ```html
   <div class="photo-inner">
     <img src="assets/img/profile.jpg" alt="Muaz Khalifa Al Radi" style="width:100%;height:100%;object-fit:cover;">
   </div>
   ```

2. **In the CV PDF** — `assets/files/Muaz_Al_Radi_CV.pdf` was compiled from the LaTeX source with a plain gray placeholder image standing in for `JU2655 C.jpg` (which wasn't provided). To regenerate it with a real photo:
   - Place your real photo, named exactly `JU2655 C.jpg`, in the same folder as `cv.tex`.
   - Run `pdflatex cv.tex` twice (the second pass resolves page references).
   - Copy the resulting `cv.pdf` over `assets/files/Muaz_Al_Radi_CV.pdf`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `muazalradi.github.io` for a user site, or any name for a project site).
2. Push the contents of this folder to the repository's default branch (`main`):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**, set **Source** to "Deploy from a branch", choose branch `main` and folder `/ (root)`, then save.
4. Your site will be published at `https://<your-username>.github.io/<repo-name>/` (or `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`).
5. Optional: add a custom domain under **Settings → Pages → Custom domain**, and create a `CNAME` file at the repository root with the domain name.

## Notes

- No build step or framework is required — every page is plain HTML/CSS/JS and can be opened directly in a browser or deployed as-is.
- Shared header/nav/footer markup is duplicated across pages (rather than templated) so the site works without any server-side includes or a static-site generator.
- The publication filters on `publications.html` and the mobile navigation are powered by `assets/js/main.js` (vanilla JS, no dependencies).
