import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import { DocsProvider } from "@/app/providers"
import { pageTree } from "@/lib/source"
import Image from "next/image"
import "./fumadocs.css"

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsProvider>
      <div data-docs>
      <DocsLayout
        tree={pageTree}
        nav={{
          title: (
            <div className="flex items-center gap-2">
              <Image
                src="/monmouth-logo.png"
                alt="Monmouth"
                width={24}
                height={24}
                className="dark:invert"
              />
              <span>Monmouth Docs</span>
            </div>
          ),
          url: "/",
        }}
        sidebar={{
          defaultOpenLevel: 1,
        }}
      >
        {children}
      </DocsLayout>
      </div>
    </DocsProvider>
  )
}
