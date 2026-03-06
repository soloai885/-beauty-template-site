import SiteLayout from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import { CalendarCheck, Clock3, Send, ShieldCheck } from "lucide-react";

export default function BookingPage() {
  const today = useMemo(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }, []);

  const [service, setService] = useState("nails");
  const [time, setTime] = useState("19:00");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("已送出預約需求（示意）", {
      description: "此版型未串接後台。建議導向 LINE 確認時間與細節。",
    });
  }

  return (
    <SiteLayout>
      <div>
        <div className="text-xs font-semibold text-muted-foreground">線上預約</div>
        <h1 className="mt-2 text-3xl font-black">把預約做得像結帳一樣簡單</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          美業的預約關鍵：
          「選項目 → 選時間 → 留資料 → LINE 確認」。
          這頁示範前端表單與導流。
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <Card className="soft-card rounded-3xl p-6">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground text-background">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold">預約表單</div>
              <div className="text-xs text-muted-foreground">送出後建議以 LINE 確認</div>
            </div>
          </div>

          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">姓名</Label>
              <Input id="name" placeholder="王小明" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">電話</Label>
              <Input id="phone" placeholder="0900-000-000" required />
            </div>

            <div className="grid gap-2">
              <Label>預約項目</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="rounded-2xl">
                  <SelectValue placeholder="選擇項目" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nails">美甲</SelectItem>
                  <SelectItem value="lashes">美睫</SelectItem>
                  <SelectItem value="skin">皮膚管理</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="date">日期</Label>
                <Input id="date" type="date" defaultValue={today} required />
              </div>
              <div className="grid gap-2">
                <Label>時間</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue placeholder="選擇時間" />
                  </SelectTrigger>
                  <SelectContent>
                    {["11:00", "13:00", "15:00", "17:00", "19:00"].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="note">備註（可貼參考風格）</Label>
              <Textarea id="note" placeholder="例：想做裸色＋金箔、或想預約深層清潔…" className="min-h-24 rounded-2xl" />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" size="lg" className="rounded-full">
                <Send className="mr-2 h-4 w-4" />
                送出預約需求
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="https://line.me/R/ti/p/@368utzqf" target="_blank" rel="noreferrer">
                  直接用 LINE 預約
                </a>
              </Button>
            </div>
          </form>
        </Card>

        <Card className="soft-card rounded-3xl p-6">
          <div className="text-sm font-extrabold">預約須知（建議放這些）</div>
          <div className="mt-3 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-4">
              <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="font-semibold text-foreground">時間確認</div>
                <div className="mt-1">送出表單後，以 LINE 確認檔期，避免重複預約。</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-4">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <div className="font-semibold text-foreground">風格/膚況評估</div>
                <div className="mt-1">美甲可先傳參考圖；皮膚管理依膚況建議項目。</div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
              <div className="font-semibold text-foreground">取消政策（範例）</div>
              <div className="mt-1">預約前 12 小時內取消，可能收取保留費（依店規）。</div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border/60 bg-background/60 p-4 text-sm">
            <div className="font-extrabold">為什麼要保留 LINE？</div>
            <div className="mt-2 text-muted-foreground">
              美業的變數很多（款式、時間、補色、膚況），表單做「初步收集」，LINE 做「確認與成交」。
            </div>
          </div>
        </Card>
      </div>
    </SiteLayout>
  );
}
