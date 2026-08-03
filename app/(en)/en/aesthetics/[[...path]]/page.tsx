import { notFound } from "next/navigation";
import ClonePage, { cloneMetadata } from "@/components/pages/ClonePage";
import CloneSectionIndex, { cloneSectionIndexMetadata } from "@/components/pages/CloneSectionIndex";
import { cloneRouteParams, getClonePage } from "@/lib/clone-content";

export const dynamicParams = false;

const SECTION = "aesthetics" as const;
const LANG = "en" as const;

export function generateStaticParams() {
  return cloneRouteParams(SECTION);
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path } = await params;
  const page = getClonePage(SECTION, path);
  if (page) return cloneMetadata(LANG, page);
  return cloneSectionIndexMetadata(LANG, SECTION);
}

export default async function Page({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path } = await params;
  const page = getClonePage(SECTION, path);
  if (page) return <ClonePage lang={LANG} page={page} />;
  if (!path || path.length === 0) return <CloneSectionIndex lang={LANG} section={SECTION} />;
  notFound();
}
