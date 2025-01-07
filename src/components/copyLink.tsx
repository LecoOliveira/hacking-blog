'use client';

import { useEffect, useState } from 'react';
import ClipboardJS from 'clipboard';
import Link from 'next/link';
import SvgCopyLinkComponent from './svgComponents/svgCopyLink';

export default function CopyLinkComponent({ slug }: { slug: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [fullUrl, setFullUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      setFullUrl(`${window.location.origin}/blog/${slug}`);
    }
  }, [slug]);

  useEffect(() => {
    const clipboard = new ClipboardJS('.js-copy-link');

    clipboard.on('success', (event) => {
      const tooltip = event.trigger.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.textContent = 'Link Copiado para a área de transferência';
        setIsCopied(true);
        setTimeout(() => {
          tooltip.textContent = '';
          setIsCopied(false);
        }, 5000);
      }
      event.clearSelection();
    });
    return () => {
      clipboard.destroy();
    };
  }, []);

  if (!isClient) return null;

  return (
    <Link
      href={`#`}
      className="link js-copy-link"
      onClick={(e) => e.preventDefault()}
      data-clipboard-text={fullUrl}
      title="Copiar o link"
      rel="noopener"
    >
      <SvgCopyLinkComponent
        className={`
            fill-[--foreground] hover:fill-blue-500 transition-all 
            duration-300 opacity-65 hover:opacity-100 w-6 hover:scale-110
            `}
      />
      <span
        className={`
          absolute ${
            isCopied ? 'p-3 animate-fadeIn' : 'p-0'
          } -ml-60 my-12 tooltip-text rounded-md text-xs font-semibold
          text-[#1e4126] bg-[#daffe2] 
          `}
        role="alert"
      >
        {isCopied ? 'Link Copiado para a área de transferência' : ''}
      </span>
    </Link>
  );
}
