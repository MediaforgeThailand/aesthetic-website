import HomePage, { homeMetadata } from "@/components/pages/HomePage";

export const metadata = homeMetadata("th");

export default function Page() {
  return <HomePage lang="th" />;
}
