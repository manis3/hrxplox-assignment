import React from 'react';

export default function ProductDescription({ title, content }: { title: string, content: string }) {
  return (
    <div className="space-y-4">
      <p className="text-xl md:text-3xl xl:text-5xl font-bold mb-[.7888889em] text-text-grayScaleCharcoal">{title}</p>
      <p className="text-text-proseBody text-base">{content}</p>
    </div>
  );
}
