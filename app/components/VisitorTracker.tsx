'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    // Fire and forget
    fetch('/api/visit').catch(console.error);
  }, []);

  return null;
}
