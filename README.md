# 🍥Fuwari

A static blog template built with [Astro](https://astro.build).

[**🖥️ Live Demo (Vercel)**](https://fuwari.vercel.app)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**📦 Old Hexo Version**](https://github.com/saicaca/hexo-theme-vivia)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 中文**](https://github.com/saicaca/fuwari/blob/main/README.zh-CN.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 日本語**](https://github.com/saicaca/fuwari/blob/main/README.ja-JP.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 한국어**](https://github.com/saicaca/fuwari/blob/main/README.ko.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 Español**](https://github.com/saicaca/fuwari/blob/main/README.es.md)

> README version: `2024-09-10`

![Preview Image](./blog-home-page.png)

## ✨ Features

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [ ] Comments
- [x] Search
- [ ] TOC
- [x] ([This fork]()) Per-post font customization:

  - [x] [庞中华行楷 for Chinese](https://www.fonts101.com/fonts/view/Script/62094/US_Declaration) ([example post](https://leadership.qubitpi.org/posts/%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95%E8%AE%A1%E7%AF%87%E7%AC%AC%E4%B8%80/))
  - [x] [DX Red Mailbox Bold for Korean](https://www.fonts101.com/fonts/view/Script/62094/US_Declaration) ([example post](https://leadership.qubitpi.org/posts/%EB%82%98%EC%9D%98-%EC%95%84%EC%A0%80%EC%94%A8/))
  - [x] [US Declaration](https://www.fonts101.com/fonts/view/Script/62094/US_Declaration) ([example post](https://leadership.qubitpi.org/posts/declaration-of-independence/))
  - [x] [Latin font](https://www.1001fonts.com/sweynheim-pannartz-font.html)[^1] ([example post](https://leadership.qubitpi.org/posts/pro-lege-manilia/))
  - [x] [GFS Porson for Ancient Greek](https://www.oocities.org/greekfonts/) ([example post](https://leadership.qubitpi.org/posts/reading-notes-de-administrando-imperio/))

[^1]: https://ilovetypography.com/2016/04/18/the-first-roman-fonts/

> [!NOTE]
>
> I was actually going to pick up the [ZephGreek](https://www.loebclassics.com/page/logo) but realized that the
> [Loeb never publishes the font](https://tex.stackexchange.com/a/163342/277953)

  - [x] Ubuntu (Default global font)

## 🚀 How to Use

1. [Generate a new repository](https://github.com/saicaca/fuwari/generate) from this template or fork this repository.
2. To edit your blog locally, clone your repository, run `pnpm install` AND `pnpm add sharp` to install dependencies.
   - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
3. Edit the config file `src/config.ts` to customize your blog.
4. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.
5. Deploy your blog to Vercel, Netlify, GitHub Pages, etc. following [the guides](https://docs.astro.build/en/guides/deploy/). You need to edit the site configuration in `astro.config.mjs` before deployment.

## ⚙️ Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # Set only if the post's language differs from the site's language in `config.ts`
---
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                             | Action                                           |
|:------------------------------------|:-------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Installs dependencies                            |
| `pnpm dev`                          | Starts local dev server at `localhost:4321`      |
| `pnpm build`                        | Build your production site to `./dist/`          |
| `pnpm preview`                      | Preview your build locally, before deploying     |
| `pnpm new-post <filename>`          | Create a new post                                |
| `pnpm astro ...`                    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`                 | Get help using the Astro CLI                     |
