import React from 'react';

export const IotIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
    <path d="M12 8v8"></path>
    <path d="M8 12h8"></path>
    <path d="m7 7 2 2"></path>
    <path d="m15 7-2 2"></path>
    <path d="m7 17 2-2"></path>
    <path d="m15 17-2-2"></path>
  </svg>
);