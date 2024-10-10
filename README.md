This repository attempts to have `catch-all` for falling back to e.g third party provider, next to having a route that contains a parallel-route / slot that contains a dynamic route. Setting this up will cause `next dev --turbo` to behave properly, but `next build` will report with errors, and the regular dev server `next dev` will not work properly.

## Steps to reproduce
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` and visit `http://localhost:3000/`
4. Click around the navigation buttons that push you into catch all, the blog post and the parallel route that contains a dynamic route for that blog post.

## Expected behavior

Should work and build properly with regular dev server and build command, not only with the `next dev --turbo` command.