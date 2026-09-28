'use client';

import { useEffect } from 'react';

// Suppress unhandled errors and hydration warnings injected by third-party browser extensions (e.g. Bitdefender, VPNs, ad blockers)
if (typeof window !== 'undefined') {
  window.addEventListener(
    'error',
    (e) => {
      if (
        e.filename?.startsWith('chrome-extension://') ||
        e.message?.includes('chrome-extension') ||
        e.error?.stack?.includes('chrome-extension')
      ) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    },
    true
  );

  const origError = console.error;
  console.error = function (...args: unknown[]) {
    const msg = args.map((a) => (typeof a === 'string' ? a : '')).join(' ');
    if (
      msg.includes('bis_skin_checked') ||
      msg.includes('chrome-extension://') ||
      (msg.includes('hydrat') && msg.includes('bis_'))
    ) {
      return;
    }
    return origError.apply(console, args);
  };
}

export default function VisitorTracker() {
  useEffect(() => {
    // Fire and forget
    fetch('/api/visit').catch(console.error);
  }, []);

  return null;
}
