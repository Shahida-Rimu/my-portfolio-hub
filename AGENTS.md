<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep project content in the shared portfolio data array using `slug`, `name`, `tagline`, `tags`, `image`, `problem`, `solution`, and `process`; both galleries and the existing slug detail route consume this schema to stay consistent.
- Share the project expansion control between home and portfolio galleries, with independent React state per page, so both entry points offer the same three-project default.
- Render both galleries through the shared ProjectCard component, using Reveal for entry motion and semantic CSS tokens for surfaces and glow, so presentation and accessibility stay consistent without changing project data or routing.
