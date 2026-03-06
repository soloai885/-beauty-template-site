import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Streamdown } from "streamdown";
import {
  ArrowRight,
  ClipboardList,
  Compass,
  FileText,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import mdSpec from "@/assets/分析與設計規格.md?raw";
import beautyImg from "@/assets/template-beauty.png";
import nailImg from "@/assets/template-nail.png";
import hairImg from "@/assets/template-hair.png";

interface HomeProps {
  targetSection?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function hashNav(section: string) {
  // App.tsx uses hash-location router. Use /section to let Home scroll.
  return `/#/${section}`;
}

export default function Home({ targetSection }: HomeProps) {
  // Scroll to target section when URL changes (e.g., /#/templates → scroll to #templates)
  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  const nav = useMemo(
    () => [
      { id: "top", label: "首頁" },
      { id: "overview", label: "現況分析" },
      { id: "principles", label: "共通模組" },
      { id: "templates", label: "三套版型" },
      { id: "deliverables", label: "交付物" },
      { id: "fulltext", label: "全文" },
    ],
    [],
  );

  return (
    <div id="top" className="relative min-h-screen">
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 left-[-18rem] h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{ background: "oklch(0.92 0.04 92 / 0.7)" }}
        />
        <div
          className="absolute -top-32 right-[-16rem] h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{ background: "oklch(0.80 0.10 20 / 0.35)" }}
        />
        <div
          className="absolute bottom-[-18rem] left-[18%] h-[42rem] w-[42rem] rounded-full blur-3xl"
          style={{ background: "oklch(0.78 0.10 306 / 0.22)" }}
        />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,black_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b bg-background/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl border bg-card shadow-sm">
              <Layers className="size-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg">aigent.tw 三行業版型</div>
              <div className="text-xs text-muted-foreground">
                現況分析  模板規格  視覺稿示意
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {nav.slice(1, 5).map((i) => (
              <a
                key={i.id}
                href={hashNav(i.id)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                {i.label}
              </a>
            ))}
            <Button asChild className="rounded-xl">
              <a href={hashNav("templates")}>
                看三套版型 <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-4 pb-24 pt-10">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="relative"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="rounded-full">
                Canvas-design 導向的模板示意
              </Badge>
              <span className="text-xs text-muted-foreground">
                for  壹智科技企業社
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-4xl leading-[1.06] tracking-tight md:text-5xl"
            >
              把「預約系統」做成
              <span className="ml-2 italic">行業專用模板</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              這頁把你現有的 aigent.tw（SoloAI LocalBiz Core）拆解成可複用的模組，
              並示範三種行業：<b className="text-foreground">美學 / 美甲 / 美髮</b> 的
              首頁版型與內容排序。
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-xl">
                <a href={hashNav("overview")}>
                  先看現況分析 <Compass className="ml-2 size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <a href={hashNav("fulltext")}>
                  直接看全文 <FileText className="ml-2 size-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">核心轉換</CardTitle>
                  <CardDescription>首屏 CTA 一眼可點</CardDescription>
                </CardHeader>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">行業差異</CardTitle>
                  <CardDescription>模組排序 + 視覺母題</CardDescription>
                </CardHeader>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">可落地</CardTitle>
                  <CardDescription>UI 模組直接可切版</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <Card className="overflow-hidden rounded-3xl border bg-card/70 shadow-sm">
              <CardHeader className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="font-display">三套模板一眼比對</CardTitle>
                    <CardDescription>
                      先用視覺稿定方向，再延伸到內頁
                    </CardDescription>
                  </div>
                  <div className="grid size-11 place-items-center rounded-2xl border bg-background">
                    <Sparkles className="size-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-2xl border bg-background/60 p-3">
                      <div className="text-xs text-muted-foreground">A</div>
                      <div className="mt-1 font-display">美學</div>
                      <div
                        className="mt-2 h-1.5 w-full rounded-full"
                        style={{ background: "var(--brand-rose)" }}
                      />
                    </div>
                    <div className="rounded-2xl border bg-background/60 p-3">
                      <div className="text-xs text-muted-foreground">B</div>
                      <div className="mt-1 font-display">美甲</div>
                      <div
                        className="mt-2 h-1.5 w-full rounded-full"
                        style={{ background: "var(--brand-violet)" }}
                      />
                    </div>
                    <div className="rounded-2xl border bg-background/60 p-3">
                      <div className="text-xs text-muted-foreground">C</div>
                      <div className="mt-1 font-display">美髮</div>
                      <div
                        className="mt-2 h-1.5 w-full rounded-full"
                        style={{ background: "var(--brand-studio)" }}
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-background/60 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium">共通骨架</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          Nav → Hero → 熱門服務 → 信任模組 → 位置資訊
                        </div>
                      </div>
                      <a
                        href={hashNav("principles")}
                        className="text-xs font-medium underline underline-offset-4"
                      >
                        看模組
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <Separator className="my-12" />

        {/* Overview */}
        <section id="overview" className="scroll-mt-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-2">
                <div className="grid size-10 place-items-center rounded-2xl border bg-card shadow-sm">
                  <ClipboardList className="size-5" />
                </div>
                <h2 className="font-display text-2xl">現況快速分析</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                目前首頁採「目的地選擇」概念：用類別卡片導向店型頁，店型頁以
                Hero 情境圖 + CTA（會員/訪客預約）作為主要轉換。
              </p>

              <div className="mt-6 grid gap-3">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">資訊架構（可見頁）</CardTitle>
                    <CardDescription>
                      首頁（分類）→ 店型頁（預約入口）→ 會員/訪客流程
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">視覺語言</CardTitle>
                    <CardDescription>
                      乾淨留白 + 大幅情境照片 + 高對比 CTA
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">可補強之處</CardTitle>
                    <CardDescription>
                      行業敘事/信任素材/決策資訊模組（價目、評價、時段）
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <Card className="rounded-3xl border bg-card/70 shadow-sm">
              <CardHeader>
                <CardTitle className="font-display">我會把差異做在兩層</CardTitle>
                <CardDescription>
                  同一套系統，不同店型就像換一套「專用骨架」
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="rounded-2xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">① 模組排序（內容動線）</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    美甲先看作品牆、美髮先看空檔/排班、美學先看問題解法。
                  </div>
                </div>
                <div className="rounded-2xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">② 視覺母題（情緒與材質）</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    色彩、字體、陰影、卡片密度、標籤系統——讓人一眼認出產業。
                  </div>
                </div>
                <div className="rounded-2xl border bg-background/60 p-4">
                  <div className="text-sm font-medium">③ 轉換摩擦最小化</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    首屏 CTA 必見、服務卡直接預約、行動版底部固定 CTA。
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Principles */}
        <section id="principles" className="scroll-mt-24">
          <div className="flex items-center gap-2">
            <div className="grid size-10 place-items-center rounded-2xl border bg-card shadow-sm">
              <Layers className="size-5" />
            </div>
            <h2 className="font-display text-2xl">共通版型模組（所有行業）</h2>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            這是一個「LocalBiz 預約型網站」的可重用骨架。換行業不需要改系統，
            只要換內容與排序。
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              {
                title: "Top Nav + 首屏 CTA",
                desc: "Logo（左）/ 預約查詢 / 立即預約；行動版底部固定 CTA。",
              },
              {
                title: "Hero（情境 + 一句價值主張）",
                desc: "兩顆 CTA：會員/訪客 或 立即預約/看價目。",
              },
              {
                title: "熱門服務卡（3–6）",
                desc: "名稱、時間、價位區間、立即預約；hover 顯示下一個空檔（可選）。",
              },
              {
                title: "信任模組",
                desc: "強項 3 點、團隊卡、評價摘要、位置與營業資訊。",
              },
            ].map((i) => (
              <Card key={i.title} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{i.title}</CardTitle>
                  <CardDescription>{i.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border bg-card/70 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-display text-lg">建議互動規格</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  首屏 CTA 必見；服務卡可掃讀；行動版不迷路。
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-xl">
                <a href={hashNav("templates")}>
                  套用到三行業 <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Templates */}
        <section id="templates" className="scroll-mt-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl">三套行業版型（首頁示意）</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                三套都沿用同一個預約骨架，但透過排序與視覺母題建立差異。
                這裡先用首頁視覺稿作為方向確認。
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="beauty" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-2xl bg-card/70 p-1">
                <TabsTrigger value="beauty" className="rounded-xl">
                  A 美學
                </TabsTrigger>
                <TabsTrigger value="nail" className="rounded-xl">
                  B 美甲
                </TabsTrigger>
                <TabsTrigger value="hair" className="rounded-xl">
                  C 美髮
                </TabsTrigger>
              </TabsList>

              <TabsContent value="beauty" className="mt-4">
                <TemplatePanel
                  tone="Ritual Calm"
                  accent="var(--brand-rose)"
                  title="美學 / 美體（Beauty & Wellness）"
                  bullets={[
                    "情緒：療癒、放鬆、儀式感",
                    "排序：Hero → 熱門療程 → 問題解法 → 儀器/可信度 → 團隊",
                    "專用模組：『今天想改善什麼？』快速選單",
                  ]}
                  img={beautyImg}
                />
              </TabsContent>

              <TabsContent value="nail" className="mt-4">
                <TemplatePanel
                  tone="Gallery Pulse"
                  accent="var(--brand-violet)"
                  title="美甲（Nail Art & Care）"
                  bullets={[
                    "情緒：精緻、潮流、可分享",
                    "排序：Hero → 作品集拼貼牆 → 熱門款式 → 價目 → 美甲師",
                    "專用模組：按風格挑款（極簡/甜酷/通勤/派對…）",
                  ]}
                  img={nailImg}
                />
              </TabsContent>

              <TabsContent value="hair" className="mt-4">
                <TemplatePanel
                  tone="Precision Studio"
                  accent="var(--brand-studio)"
                  title="美髮（Hair Salon）"
                  bullets={[
                    "情緒：俐落、自信、專業",
                    "排序：Hero → 本週空檔/排班 → 熱門服務 → Before/After → 團隊",
                    "專用模組：依髮長/髮質推薦",
                  ]}
                  img={hairImg}
                />
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8 rounded-3xl border bg-card/70 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  想把第三套換成牙醫 / 物理治療 / 餐飲？沿用同骨架即可替換模組與視覺母題。
                </div>
              </div>
              <Button asChild className="rounded-xl" variant="secondary">
                <a href={hashNav("fulltext")}>對照原文規格</a>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Deliverables */}
        <section id="deliverables" className="scroll-mt-24">
          <h2 className="font-display text-2xl">交付物（本頁包含）</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            這個頁面本身就是「可分享的網頁版規格書」。若你要交付給設計/工程/業務，
            直接貼網址即可。
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">現況分析</CardTitle>
                <CardDescription>資訊架構、視覺語言、可優化方向</CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">共通模組</CardTitle>
                <CardDescription>可重用骨架 + 互動規格</CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">三套行業版型</CardTitle>
                <CardDescription>排序、語氣、專用模組 + 視覺稿示意</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-6">
            <Accordion type="single" collapsible className="rounded-3xl border bg-card/70">
              <AccordionItem value="next" className="px-2">
                <AccordionTrigger className="px-4 font-display">
                  下一步：把它變成可用的正式模板？
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm text-muted-foreground">
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      <b className="text-foreground">確認視覺方向</b>：先選一套當「母版」，
                      統一字體、按鈕、卡片、陰影與 icon。
                    </li>
                    <li>
                      <b className="text-foreground">補內頁</b>：作品集/價目表/預約流程/FAQ。
                    </li>
                    <li>
                      <b className="text-foreground">內容結構化</b>：把服務/價目/團隊/時段
                      變成可配置資料，讓不同店家套用。
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Fulltext */}
        <section id="fulltext" className="scroll-mt-24">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-2xl">全文（原始 Markdown）</h2>
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => {
                navigator.clipboard
                  ?.writeText(mdSpec)
                  .catch(() => {
                    /* ignore */
                  });
              }}
            >
              複製全文
            </Button>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border bg-card/70 shadow-sm">
            <div className="border-b bg-background/60 px-6 py-4">
              <div className="text-sm font-medium">aigent_三行業版型_分析與設計規格.md</div>
              <div className="mt-1 text-xs text-muted-foreground">
                以可讀性為主；若要投影片/提案版排版，建議另出一份。
              </div>
            </div>
            <div className="md-content px-6 py-6">
              <Streamdown>{mdSpec}</Streamdown>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t pt-8 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>© {new Date().getFullYear()} aigent.tw｜壹智科技企業社</div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">本頁為規格示意與可分享文件</span>
              <span className="sm:hidden">規格示意</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function TemplatePanel(props: {
  tone: string;
  accent: string;
  title: string;
  bullets: string[];
  img: string;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
      <Card className="rounded-3xl border bg-card/70 shadow-sm">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <CardTitle className="font-display">{props.title}</CardTitle>
              <CardDescription>
                視覺語氣：<span className="font-medium text-foreground">{props.tone}</span>
              </CardDescription>
            </div>
            <div
              className="h-10 w-10 rounded-2xl"
              style={{ background: props.accent, opacity: 0.9 }}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {props.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="rounded-2xl border bg-background/60 p-4 text-xs text-muted-foreground">
            這是「首頁」示意。若要真的上線，建議把服務、價目、團隊、時段做成可配置資料。
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden rounded-3xl border bg-card/70 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">首頁視覺稿</CardTitle>
          <CardDescription>示意 UI 模組與資訊層級</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-hidden rounded-2xl border bg-background/40">
            <img
              src={props.img}
              alt={`${props.title} 首頁視覺稿`}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
