# website starter kit 🚀

![image of several tools](/public/wip.png) [illustration by Laura Heine](https://lauraheine.com)

## What is this?

This repository contains the **basic code** to start a **modern website** with a **headless CMS** integration.

It has all the important dependencies and tools to get your website up and running.

As a [front-end freelancer](https://marcokuehbauch.com/work/) I've started all my new projects by setting up
the same tools and packages over and over again.

This repository aims to be a **kickstart** for every new project because the tooling is already done.

## How to set it up

Clone the repository:

```bash
git clone git@github.com:marcoheine-com/website-starter-kit.git <YOUR_PROJECT_NAME>
```

Replace the `apiEndpoint` field with your Prismic repository URL in the [sm.json](sm.json) file. Everything
else is already setup for using all the great prismic features, like the preview mode, link and route
resolvers, etc.

```diff
...
- "apiEndpoint": "YOUR_API_ENDPOINT"
+ "apiEndpoint": "https://<YOUR_PROJECT>.prismic.io/api/v2",
...
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Now your website runs on [localhost:3000](http://localhost:3000). You can start building the front-end or
[model the content](#prismic-custom-types-and-slices).

## The main parts

### NextJS with TypeScript

NextJS in combination with TypeScript is used to pre-render all pages on the server. You can learn more about
it [here](https://nextjs.org/docs/basic-features/pages#static-generation-recommended).

### TailwindCSS

TailwindCSS is used for styling. I've used styled-components for a long time and then decided to give Tailwind
a shot. And the improvement concerning speed was worth the switch.

Also the [documentation](https://tailwindcss.com/docs/installation) is just incredible. You can hit `cmd` +
`k` anywhere to search for CSS attributes.

### Prismic

As a headless CMS, I've made good experiences with Prismic. It brings a lot of flexibility to model your
content with it's system of **custom types** and **resusable slices**.

### Prismic Custom Types and Slices

Prismic uses [custom types](https://prismic.io/docs/core-concepts/custom-types) and
[slices](https://prismic.io/docs/core-concepts/slices) to model the content of a page.

This website starter kit already has some **pre-built** custom types and slices that are most commonly used on
websites.

#### Slices

Card, Form, Image, InfoBox, Partner, Quote, Stage, Text, TextImage, Video

#### Custom Types

Index Page, Content Page, Services Page, Service Detail Page, News Page, News Detail Page, Cases Page, Header,
Footer, Form, Case Modal, Service Filter Item

To edit them, or add new ones, use the [Slice Machine](https://prismic.io/docs/core-concepts/slice-machine)

```bash
npm run slicemachine
```

Now the slicemachine runs on: [localhost:9999](http://localhost:9999).

### Linting with eslint and prettier

No one wants to manually format code. Also basic linting can prevent bugs in the first place. So I've added
eslint together with prettier to make sure that everything is formatted the same and to avoid traditional
variable renaming errors.
