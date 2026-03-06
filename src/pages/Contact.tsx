import SiteLayout from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("已送出訊息（示意）", {
      description: "此版型未串接寄信服務，可改成串接表單或直接導 LINE。",
    });
  }

  return (
    <SiteLayout>
      <div>
        <div className="text-xs font-semibold text-muted-foreground">聯絡我們</div>
        <h1 className="mt-2 text-3xl font-black">想問細節？用你最習慣的方式</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          這頁示範「多入口聯絡」：電話、Email、地址、表單、以及 LINE。
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="soft-card rounded-3xl p-6">
          <div className="text-sm font-extrabold">聯絡資訊（範例）</div>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <InfoRow icon={<MapPin className="h-4 w-4" />} title="地址" value="高雄市（示意）" />
            <InfoRow icon={<Phone className="h-4 w-4" />} title="電話" value="09xx-xxx-xxx" />
            <InfoRow icon={<Mail className="h-4 w-4" />} title="Email" value="hello@example.com" />
          </div>

          <div className="mt-6 rounded-2xl border border-border/60 bg-background/60 p-4">
            <div className="text-sm font-extrabold">最快的方式：LINE</div>
            <div className="mt-2 text-sm text-muted-foreground">
              直接傳「預約項目＋日期時間＋參考圖」，溝通成本最低、成交最快。
            </div>
            <div className="mt-4">
              <Button asChild className="w-full rounded-full">
                <a href="https://line.me/R/ti/p/@368utzqf" target="_blank" rel="noreferrer">
                  加 LINE 詢問 / 預約
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="soft-card rounded-3xl p-6">
          <div className="text-sm font-extrabold">留言表單（示意）</div>
          <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">姓名</Label>
              <Input id="name" placeholder="王小明" required />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="phone">電話</Label>
                <Input id="phone" placeholder="0900-000-000" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="service">想諮詢的項目</Label>
                <Input id="service" placeholder="例：美甲 / 美睫 / 皮膚管理" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">需求描述</Label>
              <Textarea id="message" className="min-h-28 rounded-2xl" placeholder="簡單說說你想做的風格或膚況…" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" size="lg" className="rounded-full">
                <Send className="mr-2 h-4 w-4" />
                送出
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="https://line.me/R/ti/p/@368utzqf" target="_blank" rel="noreferrer">
                  改用 LINE
                </a>
              </Button>
            </div>
          </form>
        </Card>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-background/60">
        <div className="p-5">
          <div className="text-sm font-extrabold">地圖（可換成你的 Google Map）</div>
          <div className="mt-1 text-sm text-muted-foreground">此處用示意方塊，實際可嵌入 iframe。</div>
        </div>
        <div className="h-64 bg-gradient-to-br from-secondary/70 via-background/70 to-accent/50" />
      </div>
    </SiteLayout>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-4">
      <div className="mt-0.5 text-foreground">{icon}</div>
      <div>
        <div className="text-xs font-semibold text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
}
