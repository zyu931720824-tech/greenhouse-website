import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "关于我们", href: "#" },
  { label: "新闻资讯", href: "#" },
  { label: "产品中心", href: "#" },
  { label: "联系我们", href: "#" },
  { label: "数据结构", href: "#" },
];

export const testimonials = [
  {
    user: "福建",
    company: "漳州调研",
    image: user1,
    text: "福建漳州适种农田广，灌溉粗放费水、施肥不当、土培致病虫害（尤西红柚），急需智能节水温室大棚赋能。",
  },
  {
    user: "广西",
    company: "南宁调研",
    image: user2,
    text: "南宁粮蔗种得多、熟期偏长，AI 决策与水培技术能破种植痛点。",
  },
  {
    user: "广东",
    company: "广州调研",
    image: user3,
    text: "广州农田量较广西少，作物受大小年困扰，我方产品能针对性改善。",
  },
  {
    user: "广东",
    company: "湛江调研",
    image: user4,
    text: "传统漫灌节水率低，每亩年浪费水 200 吨；土培根腐病、姜螟发生率 18%-22%，农药依赖严重。",
  },
  {
    user: "云南",
    company: "大理调研",
    image: user5,
    text: "良姜幼苗耐低温性差，冻伤率超 40%；智能设备普及率低，传统种植管理粗放。",
  },
  {
    user: "广东",
    company: "潮州调研",
    image: user6,
    text: "黏壤土占比 75%，含氧量＜10%；良姜根茎发育不良，单株减产 25%+。",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "智能适配环境参数",
    description:
      "DeepSeek API 能实时分析，动态生成最优阈值，助力动态调整，实现低成本调控且准确率高，联动时间短。",
  },
  {
    icon: <Fingerprint />,
    text: "多参数耦合AI决策模型",
    description:
      "多参数耦合模型整合温湿度、光照等数据，通过deepseek API生成协同策略，大幅提升控制精度与响应速度。实现高效节水，缓解水资源短缺痛点。",
  },
  {
    icon: <ShieldHalf />,
    text: "水培种养共生集成技术",
    description:
      "传统土培技术存在缺点病虫害于是我们采用雾、水培模式有效隔绝传播病毒的途径，能量利用率高，减少病虫害。",
  },
  // {
  //   icon: <BatteryCharging />,
  //   text: "Real-Time Preview",
  //   description:
  //     "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  // },
  // {
  //   icon: <PlugZap />,
  //   text: "Collaboration Tools",
  //   description:
  //     "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  // },
  // {
  //   icon: <GlobeLock />,
  //   text: "Analytics Dashboard",
  //   description:
  //     "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  // },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "关于我们" },
  { href: "#", text: "新闻资讯" },
  { href: "#", text: "产品中心" },
  { href: "#", text: "联系我们" },
  { href: "#", text: "数据结构" },
];

export const platformLinks = [
  { href: "#", text: "总览" },
  { href: "#", text: "数据" },
  { href: "#", text: "警报" },
  { href: "#", text: "设置" },
  { href: "#", text: "报表" },
];

// export const communityLinks = [
//   { href: "#", text: "Events" },
//   { href: "#", text: "Meetups" },
//   { href: "#", text: "Conferences" },
//   { href: "#", text: "Hackathons" },
//   { href: "#", text: "Jobs" },
// ];
