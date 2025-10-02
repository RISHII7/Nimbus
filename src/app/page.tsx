import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { components } from "@/slices";

import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { asImageSrc } from "@prismicio/client";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}