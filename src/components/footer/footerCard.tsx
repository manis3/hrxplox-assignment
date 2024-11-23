import React from 'react';

interface FooterCardProps {
  title: string;
  links: string[];
}

export default function FooterCard({ title, links }: FooterCardProps) {
  return (
    <div className="w-full flex flex-col gap-2 space-y-1">
      <p className="text-base font-semibold text-black tracking-wider uppercase">{title}</p>
      {links &&
        links.map((link, index) => (
          <div key={index} className="text-base font-normal text-text-proseBody">
            {link}
          </div>
        ))}
    </div>
  );
}
