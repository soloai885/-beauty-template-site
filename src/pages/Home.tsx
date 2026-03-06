import SiteLayout from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { images } from "@/lib/beauty-images";
import { services, testimonials } from "@/lib/beauty-data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";

interface HomeProps {
  targetSection?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.2, 0.8, 0.2, 1] },
  }),
} as unknown as Variants;

export default function Home(_props: HomeProps) {

  return (
    <SiteLayout>
      <section className="relative">
        <Card className="soft-card overflow-hidden rounded-[28px] p-0">
          <div className="relative grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative p-6 md:p-10">
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background/40 to-accent/25" />
                <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_20%_10%,black,transparent_55%)]">
                  <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
                </div>
              </div>

              <motion.div initial="hidden" animate="show" className="space-y-6">
                <motion.div variants={fadeUp} custom={0}>
                  <Badge className="rounded-full px-3 py-1" variant="secondary">
                    美容 / 美甲｜可直接上線的官網版型
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="text-3xl font-black leading-[1.08] md:text-5xl"
                >
                  你的專屬
                  <span className="block">美感工作室</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  作品集先說話、價目表清楚透明、預約流程一鍵完成。
                  這套版型特別為美業常見需求設計：讓訪客快速看到風格、快速決定、快速預約。
                </motion.p>

                <motion.div variants={fadeUp} custom={3} className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/portfolio">
                      <Camera className="mr-2 h-4 w-4" />
                      看作品集
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <Link href="/booking">
                      <CalendarCheck className="mr-2 h-4 w-4" />
                      線上預約
                    </Link>
                  </Button>
                </motion.div>

                <motion.div variants={fadeUp} custom={4} className="grid gap-3 sm:grid-cols-3">
                  <MiniStat title="作品集" desc="Masonry 拼貼展示" icon={<Camera className="h-4 w-4" />} />
                  <MiniStat title="價目表" desc="乾淨表格一眼懂" icon={<Sparkles className="h-4 w-4" />} />
                  <MiniStat title="預約" desc="表單 + LINE 導流" icon={<CalendarCheck className="h-4 w-4" />} />
                </motion.div>
              </motion.div>
            </div>

            <div className="relative min-h-[280px]">
              <img
                src={images.heroImg}
                alt="美甲服務主視覺"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-background/0 via-background/0 to-background/90 md:to-background/60" />
            </div>
          </div>
        </Card>
      </section>

      <div className="my-10 h-px w-full hairline" />

      <section className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <Card className="soft-card rounded-3xl p-6">
          <div className="text-xs font-semibold text-muted-foreground">服務項目</div>
          <h2 className="mt-2 text-2xl font-black">做你想要的風格，也照顧你的日常</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            先用「作品」建立信任，再用「流程」降低猶豫。
          </p>
          <div className="mt-5 grid gap-3">
            {services.map((s) => (
              <div
                key={s.key}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border/70 bg-background/60 p-4"
              >
                <div>
                  <div className="text-sm font-extrabold">{s.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.tagline}</div>
                </div>
                <Badge className="rounded-full" variant="secondary">
                  熱門
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="soft-card rounded-3xl p-6">
          <div className="text-xs font-semibold text-muted-foreground">店內環境</div>
          <h2 className="mt-2 text-2xl font-black">柔光、乾淨、舒服</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            簡單就很有質感：空間照片可換成你的店面。
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <ImgCard src={images.interior1} alt="店內環境 1" />
            <ImgCard src={images.interior2} alt="店內環境 2" />
          </div>
          <Separator className="my-5" />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              高雄市（示意）・近捷運 5 分鐘
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/contact">
                看聯絡資訊
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      <section className="mt-12">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold text-muted-foreground">客戶好評</div>
            <h2 className="mt-2 text-2xl font-black md:text-3xl">讓好評變成最強業務</h2>
          </div>
          <Button asChild className="rounded-full">
            <Link href="/pricing">先看價目表</Link>
          </Button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="soft-card rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold">{t.name}</div>
                <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function MiniStat({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-background/60 p-4">
      <div className="flex items-center gap-2">
        <span className="text-foreground">{icon}</span>
        <div className="text-sm font-extrabold">{title}</div>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
    </div>
  );
}

function ImgCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-background/60">
      <img src={src} alt={alt} className="h-44 w-full object-cover" loading="lazy" />
    </div>
  );
}
