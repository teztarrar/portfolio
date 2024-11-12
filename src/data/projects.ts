export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "autoIPChanger",
    techs: ["Rust", "Tor", "SOCKS Proxy"],
    link: "https://github.com/teztarrar/autoIPChanger",
  },
  {
    title: "networkRouting",
    techs: ["C", "Networking", "Routing Algorithms"],
    link: "https://github.com/teztarrar/networkRouting",
  },
  {
    title: "firewall-wazuh",
    techs: ["Rust", "iptables", "Firewall"],
    link: "https://github.com/teztarrar/firewall-wazuh",
  },
  {
    title: "Portfolio",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://teztarrar.github.io/",
  },
];

export default projects;
