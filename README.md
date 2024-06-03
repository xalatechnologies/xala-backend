```markdown
# Xala Technologies CMS

This project is the backend for Xala Technologies, built with Sanity CMS to manage content dynamically.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Schemas](#schemas)
- [Deploying Sanity Studio](#deploying-sanity-studio)
- [License](#license)

## Installation

First, clone the repository:

```bash
git clone https://github.com/your-username/xala-technologies-cms.git
cd xala-technologies-cms
```

Install the dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory and add your environment variables:

```bash
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2021-03-25
SANITY_TOKEN=your_sanity_token
```

## Running the Project

To run the Sanity Studio:

```bash
sanity start
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the Sanity Studio.

## Project Structure

```
├── schemas
│   ├── blog.ts
│   ├── caseStudies.ts
│   ├── contactForm.ts
│   ├── contactFormSubmission.ts
│   ├── footer.ts
│   ├── header.ts
│   ├── index.ts
│   ├── locale.ts
│   ├── menu.ts
│   ├── news.ts
│   ├── page.ts
│   ├── service.ts
│   ├── translation.ts
├── .env
├── sanity.json
└── README.md
```

## Schemas

Define your content schemas in the `schemas` directory. Example for a `service` schema:

**`schemas/service.ts`**

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'reference',
      to: [{ type: 'locale' }],
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'locale.title',
      media: 'thumbnail',
    },
  },
});
```

## Deploying Sanity Studio

To deploy your Sanity Studio:

```bash
sanity deploy
```

Follow the prompts to deploy your studio.
