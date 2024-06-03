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

## License

This project is licensed under the MIT License.
```

### Frontend (Next.js)

**`frontend/README.md`**

```markdown
# Xala Technologies Website

This project is the frontend for Xala Technologies, built with Next.js, TailwindCSS, SASS, TypeScript, and Framer Motion.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Fetching Data](#fetching-data)
- [Language Selector](#language-selector)
- [Animations](#animations)
- [License](#license)

## Installation

First, clone the repository:

```bash
git clone https://github.com/your-username/xala-technologies-frontend.git
cd xala-technologies-frontend
```

Install the dependencies:

```bash
npm install
```

## Configuration

Create a `.env.local` file in the root directory and add your environment variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
SANITY_API_TOKEN=your_sanity_token
```

## Running the Project

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── components
│   ├── ContactForm.tsx
│   ├── Header.tsx
│   ├── LanguageSelector.tsx
│   ├── ServiceCard.tsx
│   ├── ClientFooter.tsx
├── context
│   └── LocaleContext.tsx
├── lib
│   └── sanity.ts
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   ├── contact.tsx
├── public
│   └── favicon.ico
├── styles
│   └── globals.scss
├── .env.local
├── next.config.mjs
├── package.json
└── README.md
```

## Fetching Data

Example of fetching localized data in a Next.js page:

**`pages/index.tsx`**

```typescript
import { client } from '@/lib/sanity';
import { GetStaticProps } from 'next';
import { useLocale } from '@/context/LocaleContext';
import { useEffect } from 'react';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home({ services, blogs, news, caseStudies }) {
  const { locale } = useLocale();

  useEffect(() => {
    // Re-fetch data based on locale if needed
  }, [locale]);

  return (
    <div>
      <LanguageSelector />
      <h1>Home</h1>
      <div>
        <h2>Services</h2>
        {services.map(service => (
          <div key={service._id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Blogs</h2>
        {blogs.map(blog => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>News</h2>
        {news.map(newsItem => (
          <div key={newsItem._id}>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Case Studies</h2>
        {caseStudies.map(caseStudy => (
          <div key={caseStudy._id}>
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const services = await client.fetch(`*[_type == "service" && locale._ref == $locale]`, { locale });
  const blogs = await client.fetch(`*[_type == "blog" && locale._ref == $locale]`, { locale });
  const news = await client.fetch(`*[_type == "news" && locale._ref == $locale]`, { locale });
  const caseStudies = await client.fetch(`*[_type == "caseStudy" && locale._ref == $locale]`, { locale });

  return {
    props: {
      services,
      blogs,
      news,
      caseStudies,
    },
  };
};
```

## Language Selector

Create a language selector component:

**`components/LanguageSelector.tsx`**

```typescript
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const router = useRouter();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setSelectedLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem('language', language);
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange('en')}
        className={selectedLanguage === 'en' ? 'active' : ''}
      >
        <span role="img" aria-label="English">🇬🇧</span>
      </button>
      <button
        onClick={() => handleLanguageChange('no')}
        className={selectedLanguage === 'no' ? 'active' : ''}
      >
        <span role="img" aria-label="Norwegian">🇳🇴</span>
      </button>
    </div>


  );
};

export default LanguageSelector;
```

## Animations

Use Framer Motion in your components for animations:

**Example: `components/ServiceCard.tsx`**

```typescript
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
```

With these README files, you can set up and manage both the backend and frontend projects separately, ensuring a clean and organized codebase.
