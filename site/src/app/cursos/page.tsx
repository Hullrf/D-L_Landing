import type { Metadata } from "next";
import Courses from "@/components/courses";
import { CONTENT } from "@/lib/content";

const { metaTitle: title, metaDescription: description } = CONTENT.es.courses;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, locale: "es_CO", type: "website" },
};

export default function CursosPage() {
  return <Courses />;
}
