import { Lang } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";
import StickyCta from "./StickyCta";

export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <div className={`aa-root lang-${lang}`} style={{ overflowX: "clip" }} lang={lang}>
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
      <StickyCta lang={lang} />
    </div>
  );
}
