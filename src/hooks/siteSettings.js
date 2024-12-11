
const siteSettings = {
  title: "FindMyTutor",
  author: "HaivTech",
  headerTitle: "",
  description: "Providing you with services that makes you smile.",
  address: "Ibadan Oyo State, Nigeria",
  currency: "₦",
  language: "en-us",
  theme: "system", // system, dark or light
  siteLogoWhite: "/logo.png",
  siteLogoColor: "/logocolor.png",
  image: "/logo.png",
  email: "noreply@findmytutor.haivtech.com.ng",
  phone: "09066100815",
  github: "https://github.com/HiveTech1/findmytutor",
  twitter: "https://twitter.com/findmytutor",
  linkedin: "https://www.linkedin.com/in/findmytutor/",
  facebook: "https://www.facebook.com/findmytutor",
  instagram: "https://www.instagram.com/findmytutor",
  website: "https://findmytutor.haivtech.com.ng",
  locale: "en-US",
  analytics: {
    simpleAnalytics: true, // true or false
    googleAnalyticsId: "",
  },
  newsletter: {
    provider: "emailOctopus",
  },
  comment: {
    provider: "giscus",
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname",
      reactions: "1",
      metadata: "0",
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: "light",
      inputPosition: "bottom",
      lang: "en",
      darkTheme: "dark",
      themeURL: "",
    },
  },
  socialAccount: {
    twitter: "findmytutor",
  },
};

module.exports = siteSettings;
