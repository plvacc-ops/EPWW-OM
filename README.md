# How to Introduce New Documents in a Versioned Docusaurus Project

This guide explains the theoretical process for adding new content to your Docusaurus-based Operations Manual, which uses a versioning system aligned with AIRAC cycles.

## 1. Understanding the Core Principle

Your project operates with two primary document spaces:

- **The `docs/` folder**: This is the **active development workspace**. It holds the documentation for the **next, unreleased version**. All new content and edits for upcoming AIRAC cycles must be made here.
- **Versioned folders (`versioned_docs/version-XXX/`)**: These contain **frozen, read-only copies** of past releases. Do not edit these for routine updates. They are for reference and should only be modified in exceptional cases, such as for critical hotfixes.

## 2. The Workflow for Adding a New Document

To introduce a new document for a future release, follow this sequence:

1. **Create the Source File**: Navigate to the appropriate subdirectory within the `docs/` folder and create a new Markdown (`.md`) or MDX (`.mdx`) file. Its location should reflect the document's logical place within the manual's structure.

2. **Add Frontmatter**: At the top of the new file, you must include a frontmatter block. This contains metadata for the page. The only strictly required field for a document to be included in the sidebar is a **unique `id`**. Other useful fields are `title` and `sidebar_label`.

3. **Update the Sidebar**: The sidebar structure is defined in the `sidebars.js` file. To make your new page appear in the navigation, you must add its unique `id` to the appropriate category or item list within this file.

## 3. The Release Process: Creating a New Version

When you are ready to publish the accumulated changes as a new, official AIRAC version:

1. **Finalize Content**: Ensure all updates and new documents in the `docs/` folder are complete and reviewed.

2. **Run the Version Command**: Execute the Docusaurus CLI command to create a new version. This action performs two key functions:
   - It creates a complete snapshot of the entire `docs/` folder, copying it to a new directory named `versioned_docs/version-<VERSION_ID>/`.
   - It copies the current `sidebars.js` file to the `versioned_sidebars/` folder as `<VERSION_ID>-sidebars.json`, preserving the navigation structure.

3. **Update the Configuration File**: In the main `docusaurus.config.js` file, you must update the `lastVersion` field to the ID of the newly created version. This designates it as the default, stable version displayed to users when they visit the main documentation path.

## 4. Managing the Status of Versions

The `docusaurus.config.js` file also allows you to define the behavior of each version:

- **Stable Version (`lastVersion`)**: The primary version that is shown by default. Its `banner` is typically set to `none`.
- **Development Version (`current`)**: This represents the work-in-progress for the *next* cycle. Its `banner` is usually set to `unreleased` to indicate it is not yet final.

## 5. Important Distinctions

- **`id` vs. File Path**: The document's `id` in the frontmatter is the primary identifier for navigation. While the file path determines its URL, the `id` controls its position in the `sidebars.js` file.

- **Editing Rule**: The golden rule is to **always edit in `docs/`**. This ensures your changes are correctly propagated to the next version when it is created. Editing a file directly in a `versioned_docs/` folder will make that change only in that specific, old release.

- **Sidebar Inheritance**: When you create a new version, its sidebar configuration is copied from the `sidebars.js` file at that exact moment. Future changes to `sidebars.js` will not affect old versions.

## 6. Summary of Responsibilities

| Action | Location |
| :--- | :--- |
| Create/Edit content for the **next version** | `docs/` folder |
| Define navigation for the **next version** | `sidebars.js` file |
| "Freeze" a new version for release | Docusaurus CLI command (`docs:version`) |
| Configure release as default | `docusaurus.config.js` file (`lastVersion`) |