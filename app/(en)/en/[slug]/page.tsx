import { notFound } from "next/navigation";
import TxLandingPage from "@/components/pages/TxLandingPage";
import { txMetadata } from "@/lib/tx-data";
import { TX_KEY_BY_SLUG, TX_SLUGS } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(TX_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return txMetadata("en", TX_KEY_BY_SLUG[slug]);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = TX_KEY_BY_SLUG[slug];
  if (!key) notFound();
  return <TxLandingPage lang="en" txKey={key} />;
}
