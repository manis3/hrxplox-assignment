// Tabs.tsx
import React from 'react';
import Button from '../button/ButtonWithLoadingState';
import { cn } from '@/utils/cn';

export default function Tabs({ children, isActive, onClick }: { children: React.ReactNode; isActive: boolean; onClick: () => void }) {
    return (
        <Button
            variant="link"
            onClick={onClick}
            className={cn(
                'py-5 px-4 transition-all border-b-2 rounded-none focus-visible:ring-0 font-medium text-base',
                isActive ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-700 hover:text-blue-500',
            )}
        >
            {children}
        </Button>
    );
}
