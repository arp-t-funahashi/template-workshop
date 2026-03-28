// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "舟橋剛",
  role: "Webエンジニア",
  bio: "エンジニア歴1年半",
  avatarUrl: "/images/profile.png", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "JavaScript", level: "学習中" },
  { name: "React", level: "学習中" },
  { name: "TypeScript", level: "学習中" },
  { name: "Next.js", level: "学習中" },
  // 追加・削除してOK
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
