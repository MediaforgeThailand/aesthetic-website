import PromotionsPage, { promotionsMetadata } from "@/components/pages/PromotionsPage";

export const metadata = promotionsMetadata("en");

export default function Page() {
  return <PromotionsPage lang="en" />;
}
