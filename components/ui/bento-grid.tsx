import type React from "react"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-5 md:auto-rows-[20rem] md:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border-2 bg-card p-5 transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1",
        "dark:bg-card dark:shadow-none",
        className,
      )}
    >
      <div className="overflow-hidden rounded-xl">
        {header}
      </div>
      <div className="transition duration-300 group-hover/bento:translate-x-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-muted-foreground">{icon}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">Feature</span>
        </div>
        <div className="font-display text-lg font-medium text-foreground mb-2">{title}</div>
        <div className="font-body text-sm text-muted-foreground leading-relaxed">{description}</div>
      </div>
    </div>
  )
}
