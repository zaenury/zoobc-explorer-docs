const siteConfig = {
  title: "ZooBC Explorer Docs",
  tagline: "Documentation for all things ZooBC",
  url: "https://docs.zoobc.net",
  baseUrl: "/",
  projectName: "",
  organizationName: "ZooBC",
  headerLinks: [
    { doc: "welcome-to-zoobc", label: "Docs" },
    { doc: "doc4", label: "API" },
    // { doc: "about-zoobc", label: "About" },
    // { doc: "frequently-asked-questions", label: "FAQ" },
    // { blog: true, label: "Blog" },
    // { page: "help", label: "Help" }
  ],
  headerIcon: "img/zoobc-logo-white.svg",
  footerIcon: "img/bcz_logo_2.png",
  favicon: "img/favicon.ico",
  colors: {
    primaryColor: "#013558",
    secondaryColor: "#013558"
  },
  fonts: {
    myFont: [
      "Roboto",
      "Monsterrat"
    ]
  },
  copyright1: `ZooBC released under the`,
  copyright2: `Docs released under the`,
  copyright3: `Copyright © ${new Date().getFullYear()} Blockchain Zoo Pte Ltd. All rights reserved.`,
  highlight: {
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate",
  cleanUrl: true,
  cname: "https://docs.zoobc.net",
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg"
};

module.exports = siteConfig;
