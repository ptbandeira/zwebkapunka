# Editing content in Builder.io

This project uses [Builder.io](https://www.builder.io/) for managing page content.

## Prerequisites
- Access to the project's Builder.io space
- `NEXT_PUBLIC_BUILDER_API_KEY` configured for the app

## Editing a page
1. Sign in to Builder.io and open the *Content* section.
2. Select the model for the page you want to edit (`method`, `origin`, `professionals` or `shop`).
3. Use the visual editor to drag blocks, edit text and adjust layout.
4. Click **Publish** to make the changes live. The Next.js app will fetch the latest published content on next load.

## Creating reusable blocks
- Save frequently used sections as **Symbols** in Builder.
- Symbols can be inserted on any page and updated centrally.

## Seeding new pages
Run `tsx scripts/builder/seed.ts` with `BUILDER_PRIVATE_API_KEY` set to create default entries for all models.

## Helpful resources
- [Builder.io visual editor documentation](https://www.builder.io/c/docs/visual-editor)
- [Custom React components](https://www.builder.io/c/docs/custom-react-components)
