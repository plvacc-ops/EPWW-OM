// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vFIR Warszawa Operations Manual',
  tagline: 'by Polish VACC',
  favicon: 'img/logo-plvacc.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://om.plvacc.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'plvacc-ops', // Usually your GitHub org/user name.
  projectName: 'EPWW-OM', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',


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
          routeBasePath: '/',
                    // DODAJ LUB ZMIEŃ TE LINIE:
          lastVersion: '2606', // Wersja 2606 będzie domyślnie wyświetlana
          
          versions: {
            '2606': {
              label: '2606',
              path: '2606', // Dostępne pod /docs/2606/ lub /docs/
              banner: 'none', // Brak baneru dla stabilnej wersji
            },
            current: {
              label: '2607/1',
              path: 'next', // Dostępne pod /docs/next/
              banner: 'unreleased', // Wyświetla baner "This is unreleased documentation"
            },
          },
        },
        blog: false,
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
      image: 'img/plvacc-social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'vFIR Warszawa Operations Manual',
        logo: {
          alt: 'Logo Polish VACC',
          src: 'img/logo-plvacc.svg',
        },
        items: [
          {
          type: 'docsVersionDropdown',
          position: 'left', // lub 'right'
          dropdownActiveClassDisabled: true,
        },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn more',
            items: [
              {
                label: 'Website',
                href: 'https://plvacc.pl/',
              },
              {
                label: 'CORE vACC',
                href: 'https://cv.plvacc.pl/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/plvacc/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/plvacc/',
              },
              {
                label: 'Discord',
                href: 'https://community.vatsim.net/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Polish VACC`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;