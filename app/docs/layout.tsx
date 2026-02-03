import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import { DocsProvider } from "@/app/providers"
import { pageTree } from "@/lib/source"
import "fumadocs-ui/style.css"

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsProvider>
      <DocsLayout
        tree={pageTree}
        nav={{
          title: "Monmouth Docs",
          url: "/",
        }}
        sidebar={{
          defaultOpenLevel: 1,
        }}
      >
        {children}
      </DocsLayout>
    </DocsProvider>
  )
}
