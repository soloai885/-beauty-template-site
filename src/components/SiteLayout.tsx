import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "首頁" },
  { href: "/portfolio", label: "作品集" },
  { href: "/pricing", label: "價目表" },
  { href: "/booking", label: "線上預約" },
  { href: "/contact", label: "聯絡我們" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [loc] = useLocation();

  return (
    <div className="min-h-screen beauty-bg">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/65 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="group inline-flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground text-background shadow-sm transition-transform group-hover:scale-[1.02]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold">暮光美感工作室</div>
              <div className="text-xs text-muted-foreground">美容 / 美甲｜品牌官網示範</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground",
                  loc === n.href && "bg-secondary/60 text-foreground"
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full md:inline-flex">
              <a href="https://line.me/R/ti/p/@368utzqf" target="_blank" rel="noreferrer">
                LINE 預約
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-2xl md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <div className="mt-2 text-sm font-extrabold">導覽</div>
                <div className="mt-3 grid gap-2">
                  {nav.map((n) => (
                    <Link key={n.href} href={n.href} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-secondary/60">
                      {n.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full rounded-full">
                    <a href="https://line.me/R/ti/p/@368utzqf" target="_blank" rel="noreferrer">
                      LINE 預約
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">{children}</main>

      <footer className="border-t border-border/60 bg-background/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="text-sm font-extrabold">暮光美感工作室</div>
            <div className="mt-2 text-sm text-muted-foreground">
              這是一套「美業版型」示範網站：可直接換成你的店名、地址、價目與作品照，即可上線。
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold">營業資訊（範例）</div>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>地址：高雄市（示意）</li>
              <li>時間：週一至週六 10:00 - 20:00</li>
              <li>電話：09xx-xxx-xxx</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold">快速入口</div>
            <div className="mt-2 grid gap-2">
              <a className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground" href="https://line.me/R/ti/p/@368utzqf" target="_blank" rel="noreferrer">
                LINE：@368utzqf
              </a>
              <a className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground" href="https://soloai885.com" target="_blank" rel="noreferrer">
                你的原網站：soloai885.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
