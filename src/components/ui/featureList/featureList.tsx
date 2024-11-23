import { cn } from '@/utils/cn'
import React from 'react'

export default function FeatureList({ className, textClassName, icon, content }: { className?: string, textClassName?: string, icon: React.ReactNode, content: string }) {
    return (
        <div className={cn('mt-3 flex items-center justify-start gap-2', className)}>
            <span>
                {icon}
            </span>
            <p className={cn('text-zinc-500 text-base font-medium', textClassName)}>{content}</p>
        </div>
    )
}
