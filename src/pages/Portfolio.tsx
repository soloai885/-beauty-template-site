import SiteLayout from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { images } from "@/lib/beauty-images";
import { services } from "@/lib/beauty-data";
import { useMemo, useState } from "react";
import { Camera, ArrowLeftRight } from "lucide-react";

type Filter = "all" | "nails" | "lashes" | "skin";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [preview, setPreview] = useState<string | null>(null);

  const items = useMemo(() => {
    const base = images.gallery.map((src, idx) => {
      const key = services[idx % services.length].key;
      return {
        id: `work-${idx + 1}`,
        src,
        service: key,
        title:
          key === "nails"
            ? `奶油裸色｜細金箔 ${idx + 1}`
            : key === "lashes"
              ? `自然放大｜輕羽感 ${idx + 1}`
              : `舒緩管理｜柔霧光 ${idx + 1}`,
      };
    });
    return filter === "all" ? base : base.filter((x) => x.service === filter);
  }, [filter]);

  return (
    <SiteLayout>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold text-muted-foreground">作品集</div>
          <h1 className="mt-2 text-3xl font-black">先看風格，再談預約</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            作品集的任務是：讓訪客快速辨識你擅長的風格與質感。
            這裡示範 Masonry/拼貼感排列，你可以換成你的實拍作品。
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")} label="全部" />
          <FilterChip active={filter === "nails"} onClick={() => setFilter("nails")} label="美甲" />
          <FilterChip active={filter === "lashes"} onClick={() => setFilter("lashes")} label="美睫" />
          <FilterChip active={filter === "skin"} onClick={() => setFilter("skin")} label="皮膚管理" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <button
            key={it.id}
            onClick={() => setPreview(it.src)}
            className={
              "group text-left " +
              (i % 6 === 0 ? "md:col-span-2" : "")
            }
            aria-label={`預覽：${it.title}`}
          >
            <Card className="soft-card overflow-hidden rounded-3xl p-0">
              <div className="relative">
                <img src={it.src} alt={it.title} className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div>
                    <Badge className="rounded-full" variant="secondary">
                      {it.service === "nails" ? "美甲" : it.service === "lashes" ? "美睫" : "皮膚管理"}
                    </Badge>
                    <div className="mt-2 text-sm font-extrabold">{it.title}</div>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-background/70 text-foreground">
                    <Camera className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-border/60 bg-background/60 p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground text-background">
            <ArrowLeftRight className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold">作品集頁的建議做法</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>每張作品卡加「服務分類標籤」：讓訪客快速理解你做什麼</li>
              <li>點開大圖時，可加「使用色號 / 施作時間 / 維持週數」等資訊</li>
              <li>如果你有「案例故事」：可做成 Work Detail 內頁（含 Before/After）</li>
            </ul>
          </div>
        </div>
      </div>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-3xl p-0">
          <DialogHeader className="border-b border-border/60 bg-background/80 px-6 py-4 backdrop-blur">
            <DialogTitle className="text-lg font-black">作品預覽</DialogTitle>
          </DialogHeader>
          {preview ? (
            <div className="bg-background">
              <img src={preview} alt="作品預覽" className="h-auto w-full" />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <Button
      onClick={onClick}
      variant={active ? "default" : "outline"}
      className="rounded-full"
      size="sm"
    >
      {label}
    </Button>
  );
}
