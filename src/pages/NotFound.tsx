import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-xl rounded-3xl border border-border/60 bg-background/60 p-8 text-center">
        <div className="text-xs font-semibold text-muted-foreground">404</div>
        <h1 className="mt-2 text-3xl font-black">找不到這個頁面</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          這套版型示範已包含：首頁、作品集、價目表、線上預約、聯絡我們。
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          <Button asChild className="rounded-full">
            <Link href="/">回首頁</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/portfolio">看作品集</Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
}
