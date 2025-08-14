"use client";

import { BuilderComponent, builder } from "@builder.io/react";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (apiKey) {
  builder.init(apiKey);
} else {
  console.warn(
    "NEXT_PUBLIC_BUILDER_API_KEY is not defined. Builder content will not be loaded."
  );
}

interface BuilderContentProps {
  model: string;
  content: any;
}

export default function BuilderContent({ model, content }: BuilderContentProps) {
  return <BuilderComponent model={model} content={content} />;
}
