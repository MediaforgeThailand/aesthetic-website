import ReviewsPage, { reviewsMetadata } from "@/components/pages/ReviewsPage";

export const metadata = reviewsMetadata("en");

export default function Page() {
  return <ReviewsPage lang="en" />;
}
