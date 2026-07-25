// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "舟橋剛",
  role: "Webエンジニア",
  bio: "エンジニア歴1年半",
  avatarUrl: "/images/profile.png", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "JavaScript", level: "カーシェアAPI開発（バックエンド）" },
  { name: "React", level: "会員サイト作成" },
  { name: "TypeScript", level: "会員サイト作成" },
  { name: "Next.js", level: "HP新機能追加" },
  { name: "AWS", level: "CodeBuild hosted GitHub Actions Runner作成、VPC、ECR、TransitGateway"},
];

export const projects = [
  {
    title: "weather-outfit-app",
    description: "今日の気温からあなたの今日の最適な服装をアドバイスします。",
    techStack: ["Next.js", "TypeScript"],
    url: "https://weather-outfit-app-wine.vercel.app/",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/arp-t-funahashi",
  email: "t.funahashi.arp@gmail.com",
};
