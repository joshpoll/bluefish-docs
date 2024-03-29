// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Because your diagrams are worth it",
  tagline: "Create beautiful, customizable diagrams with declarative code",
  url: "https://bluefishjs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/bluefish.ico",
  themes: ["@docusaurus/theme-live-codeblock"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "joshpoll", // Usually your GitHub org/user name.
  projectName: "bluefish-docs", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Bluefish (Alpha)",
        logo: {
          alt: "Bluefish Logo",
          src: "img/bluefish logo transparent - no bubbles.svg",
        },
        items: [
          {
            type: "doc",
            docId: "get-started/run",
            position: "left",
            label: "Get Started",
          },
          {
            type: "doc",
            docId: "/category/examples",
            position: "left",
            label: "Examples",
          },
          {
            type: "doc",
            docId: "/category/components",
            position: "left",
            label: "Component API Reference",
          },
          {
            position: "right",
            type: "html",
            value: `
            <a href="https://github.com/bluefishjs/bluefish" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/img/github-logo.svg" alt="GitHub" style="height: 20px;" />
            </a>
          `,
          },
          {
            position: "right",
            type: "html",
            value: `
            <a href="https://discord.gg/RTKDYBBybB" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <img src="/img/discord-logo.svg" alt="Discord" style="height: 20px;" />
            </a>
          `,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/get-started/run",
              },
              {
                label: "Examples",
                to: "/docs/category/examples",
              },
              {
                label: "Component API Reference",
                to: "/docs/category/components",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Join our Discord!",
                href: "https://discord.gg/RTKDYBBybB",
              },
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "Star Us on GitHub!",
                href: "https://github.com/bluefishjs/bluefish",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Josh Pollock. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
