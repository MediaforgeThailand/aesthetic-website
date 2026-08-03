import ReviewsPage, { reviewsMetadata } from "@/components/pages/ReviewsPage";

export const metadata = reviewsMetadata("th");

export default function Page() {
  return <ReviewsPage lang="th" />;
}
