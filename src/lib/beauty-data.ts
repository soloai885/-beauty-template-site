export type ServiceKey = "nails" | "lashes" | "skin";

export type PortfolioItem = {
  id: string;
  title: string;
  service: ServiceKey;
  image: string;
  tags: string[];
};

export const services: { key: ServiceKey; name: string; tagline: string }[] = [
  { key: "nails", name: "美甲", tagline: "乾淨線條、柔和色階、細節不妥協" },
  { key: "lashes", name: "美睫", tagline: "自然放大眼神，日常也像濾鏡" },
  { key: "skin", name: "皮膚管理", tagline: "把膚況穩下來，保養走在正軌" },
];

export type PriceRow = {
  group: string;
  items: { name: string; price: string; note?: string }[];
};

export const pricing: PriceRow[] = [
  {
    group: "美甲",
    items: [
      { name: "單色凝膠", price: "NT$ 1,200", note: "含基礎保養" },
      { name: "法式 / 漸層", price: "NT$ 1,500", note: "依難度調整" },
      { name: "手繪 / 造型款", price: "NT$ 1,800 起", note: "建議先傳圖報價" },
    ],
  },
  {
    group: "美睫",
    items: [
      { name: "自然款（單根）", price: "NT$ 1,600", note: "舒適日常" },
      { name: "濃密款（3D/6D）", price: "NT$ 2,200", note: "依毛量調整" },
      { name: "卸睫 + 清潔", price: "NT$ 500", note: "外店卸睫" },
    ],
  },
  {
    group: "皮膚管理",
    items: [
      { name: "基礎保濕護理", price: "NT$ 1,600", note: "60 分鐘" },
      { name: "深層清潔 + 舒緩", price: "NT$ 2,000", note: "90 分鐘" },
      { name: "換膚 / 酵素管理", price: "NT$ 2,400", note: "依膚況評估" },
    ],
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "林小姐",
    quote: "細節很到位，顏色挑選也很專業，整體氛圍超放鬆。",
    rating: 5,
  },
  {
    name: "陳小姐",
    quote: "第一次做皮膚管理就很有感，回家隔天膚況穩很多。",
    rating: 5,
  },
  {
    name: "王小姐",
    quote: "預約流程清楚，作品集看完就決定來，成品比想像更美。",
    rating: 5,
  },
];
