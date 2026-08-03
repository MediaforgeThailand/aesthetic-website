import DoctorsPage, { doctorsMetadata } from "@/components/pages/DoctorsPage";

export const metadata = doctorsMetadata("en");

export default function Page() {
  return <DoctorsPage lang="en" />;
}
