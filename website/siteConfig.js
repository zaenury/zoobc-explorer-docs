const users = [
  {
    caption: "User1",
    image: "/img/undraw_open_source.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "ZooBC Explorer Docs",
  tagline: "ZooBC Explorer Documentation",
  url: "https://docs.zoobc.net",
  baseUrl: "/",
  projectName: "",
  organizationName: "ZooBC",
  headerLinks: [
    { doc: "doc1", label: "Docs" },
    { doc: "doc4", label: "API" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" }
  ],
  users,
  headerIcon: "img/favicon.ico",
  footerIcon: "img/bcz_logo_2.png",
  favicon: "img/favicon.ico",
  colors: {
    primaryColor: "#33517f",
    secondaryColor: "#233858"
  },
  copyright: `Copyright © ${new Date().getFullYear()} Blockchain Zoo Pte Ltd. All rights reserved.`,
  highlight: {
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate",
  cleanUrl: true,
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg"
};

module.exports = siteConfig;
