import SiteLayout from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { pricing } from "@/lib/beauty-data";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <SiteLayout>
      <div>
        <div className="text-xs font-semibold text-muted-foreground">價目表</div>
        <h1 className="mt-2 text-3xl font-black">清楚透明，價格不靠猜</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          建議把「基本款價格」寫清楚，再加上「依難度調整」的說明，客人會更安心。
          下面為示範內容，你可換成自己的實際品項。
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {pricing.map((group) => (
          <Card key={group.group} className="soft-card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black">{group.group}</h2>
              <Badge className="rounded-full" variant="secondary">
                熱門
              </Badge>
            </div>
            <Separator className="my-4" />
            <div className="space-y-3">
              {group.items.map((it) => (
                <div key={it.name} className="rounded-2xl border border-border/60 bg-background/60 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-extrabold">{it.name}</div>
                      {it.note ? (
                        <div className="mt-1 text-xs text-muted-foreground">{it.note}</div>
                      ) : null}
                    </div>
                    <div className="text-sm font-black">{it.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  若有參考圖片，建議先透過 LINE 傳圖，可更精準估時與報價。
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-border/60 bg-background/60 p-6">
        <div className="text-sm font-extrabold">價目表頁的小技巧</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>加上「施作時間 / 追加項目」：降低現場溝通成本</li>
          <li>加上「保養須知」：避免期待落差</li>
          <li>把「熱門方案」放最上面：更容易被選擇</li>
        </ul>
      </div>
    </SiteLayout>
  );
}
