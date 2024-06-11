
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EsyBosch',
  tagline: 'Sistema para gestão de eventos',
  favicon: 'img/icon_white_esybosch.png',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl:'/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config
  // organizationName: 'EsyProject',
  // projectName: 'Esy_documentation',
  // deploymentBranch: 'docusaurus',
  // trailingSlash: false


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BoschEsy',
        logo: {
          alt: 'logo_esyBosch',
          src: 'img/icon_white_esybosch.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/orgs/EsyProject/repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentação API',
                to: '/docs/Documentação API/a_getting_started',
              },
            ],
          },
          {
            title: 'Links Úteis',
            items: [
              {
                label: 'Git Hub (EsyBosch)',
                href: 'https://github.com/orgs/EsyProject/repositories',
              },
              {
                label: 'LandingPage',
                href: 'https://github.com/orgs/EsyProject/repositories',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub (Bruno Gomes)',
                href: 'https://github.com/BrnGomes0',
              },
              {
                label: 'GitHub (João Corrêa)',
                href: 'https://github.com/JoaoCorreaSilva',
              },
              {
                label: 'GitHub (Manuela Rocha)',
                href: 'https://github.com/kethelynsantos',
              },
              {
                label: 'GitHub (Kethelyn Gabrielly)',
                href: 'https://github.com/rochamanuela'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bosch Esy, Inc. Built with us team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;