import "./styles/globals.css";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { dana } from "./lib/utils/fonts";
import { ReactQueryProvider } from "./lib/reactQueryProvider";
import { getMetadata } from "./lib/metaData";
import { LayoutProps } from "./types";
import LoadingPage from "./loading";

export async function generateMetadata(): Promise<Metadata> {
  const meta = getMetadata();
  return {
    title: meta?.title,
    description: meta?.description,
    openGraph: meta?.openGraph,
    keywords: meta?.keywords,
    robots: meta?.robots,
    viewport: meta?.viewport,
  };
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ReactQueryProvider>
      <html className={`${dana.variable}`}>
        <body dir='rtl'>
          <Suspense fallback={<LoadingPage  />}>{children}</Suspense>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
