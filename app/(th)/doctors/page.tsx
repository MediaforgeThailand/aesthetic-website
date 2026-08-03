import DoctorsPage, { doctorsMetadata } from "@/components/pages/DoctorsPage";

export const metadata = doctorsMetadata("th");

export default function Page() {
  return <DoctorsPage lang="th" />;
}
