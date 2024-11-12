type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "imvishudevsingh@gmail.com",
  title: "Hi, I’m Vishu Dev Singh 👋",
  // profile: "/profile.webp",
  description:
    "Hello, I'm a *System Administrator* with expertise in both *Linux and Windows environments*, specializing in network configuration, system security, and troubleshooting. I am currently pursuing my *Integrated MCA in Cyber Security and Networking* at Parul University. Outside of work, I enjoy contributing to open-source projects and expanding my knowledge in network security.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/vishu-dev-singh-1292571ba",
    },
    {
      label: "GitHub",
      link: "https://github.com/teztarrar",
    },
    {
      label: "Credly",
      link: "https://www.credly.com/users/vishu-dev-singh/badges",
    },
  ],
};

export default presentation;
