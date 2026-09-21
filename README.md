# kexindong.com

Personal academic website for Kexin Dong, built on the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and deployed to
GitHub Pages at **https://kexindong.com**.

## Editing content

| What you want to change        | File                                               |
| ------------------------------ | -------------------------------------------------- |
| Bio, portrait, home page       | `_pages/about.md`, `assets/img/prof_pic.jpg`       |
| Publications                   | `_bibliography/papers.bib`                         |
| CV                             | `_data/cv.yml`                                     |
| News items                     | `_news/` (one file per item)                       |
| Projects                       | `_projects/`                                       |
| Photography                    | `_pages/photography.md`, `assets/img/photography/` |
| Social links, email, CV PDF    | `_data/socials.yml`                                |
| Site title, URL, feature flags | `_config.yml`                                      |

A paper shows on the home page when its BibTeX entry has `selected={true}`.

## Local preview

System Ruby on macOS is too old for this theme, so use Docker:

    docker compose up

Then open <http://localhost:8080/>. (`baseurl` is blank because the site is
served from the root of a custom domain — do not set it to `/al-folio`.)

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and force-pushes `_site` to the `gh-pages` branch. GitHub Pages serves that branch.

The root `CNAME` file holds the custom domain and is listed under `keep_files`
in `_config.yml`, so the force-push does not delete it. **Do not remove it.**

## Adding photos

Resize before committing — do not commit full-resolution camera files:

    sips -Z 1600 -s format jpeg -s formatOptions 72 IN.jpeg --out assets/img/photography/OUT.jpg

Then add an entry to the `photos:` list in `_pages/photography.md`.

## Predecessor

The previous hand-written site is archived at `kexindon/kexindong.github.io`
(branch `legacy-v1`, tag `v1-legacy-site`) with an offline bundle in
`~/Documents/GitHub/_archive/`.
