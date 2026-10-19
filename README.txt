INSTA-DM — Vercel project starter
==================================

Contents
- index.html: standalone INSTA-DM frontend (adapted from the provided Blogger code)
- api/resolve.js: Vercel serverless endpoint that validates Instagram URLs
- package.json: project metadata
- vercel.json: Vercel configuration

Deploy
1. Extract this ZIP.
2. Upload the files to a GitHub repository.
3. Sign in to https://vercel.com and import that repository.
4. Deploy. The site will be available at the Vercel URL shown after deployment.

Important functionality note
This is a frontend + backend scaffold, not a fully working Instagram downloader.
The /api/resolve endpoint validates the URL and returns a clear "provider not configured"
response. To enable actual media downloads, integrate a supported provider/API that is
authorized to provide the requested content. Do not collect Instagram passwords or bypass
private-account access controls. Vercel itself does not provide Instagram media files.

Before publishing
- Replace YOUR_EMAIL@example.com in index.html with an email address you control.
- Update privacy/terms text to reflect the services and data practices you actually use.
- Review Vercel plan limits and your chosen provider's terms, privacy rules, and costs.
