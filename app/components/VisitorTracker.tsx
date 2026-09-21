'use client';

import { useEffect } from 'react';

// Suppress unhandled errors injected by third-party browser extensions (e.g. VPNs, ad blockers)
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
}

export default function VisitorTracker() {
  useEffect(() => {
    // Fire and forget
    fetch('/api/visit').catch(console.error);
  }, []);

  return null;
}
