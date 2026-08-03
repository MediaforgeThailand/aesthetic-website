import ContactPage, { contactMetadata } from "@/components/pages/ContactPage";

export const metadata = contactMetadata("th");

export default function Page() {
  return <ContactPage lang="th" />;
}
