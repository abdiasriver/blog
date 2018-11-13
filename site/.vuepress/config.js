module.exports = {
  title: 'AbdiasRiver',
  description: 'Programming, Linux and all things Open Source',
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",
  ga: 'UA-116906401-1',
  themeConfig: {
  	lastUpdated: 'Actualizado el',
  

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Windows', link: '/windows/' },
      { text: 'Github', link: 'https://github.com/abdiasriver' },
    ],


    sidebar: {
      '/linux/': [
        '',        /* / */
        '/linux/archlinux-repo-in-a-git-repo/', /* /contact.html */
        '/linux/archlinux-meta-packages/'    /* /about.html */
      ],

      '/blog/': [
        '',      /* /bar/ */
        '/blog/Sync-Paused-Google-chrome-error/', /* /bar/three.html */
        '/blog/Cuenta-tidal-7meses-full-gratis-free/',
        '/windows/Descarga-musica-athame-tidal/'   /* /bar/four.html */
      ],

      '/windows/': [
        '',      /* /bar/ */
        '/windows/Sync-Paused-Google-chrome-error/',
        '/blog/Cuenta-tidal-7meses-full-gratis-free/',
        '/windows/Descarga-musica-athame-tidal/'

      ]
    }


  }
}
