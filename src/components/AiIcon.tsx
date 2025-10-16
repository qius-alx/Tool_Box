import React from 'react';

export const AiIcon = ({ className }: { className?: string }) => (
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
    <path d="M12 2a10 10 0 0 0-2 19.54A10 10 0 0 0 12 2zM12 2a10 10 0 0 1 2 19.54A10 10 0 0 1 12 2z"></path>
    <path d="M12 2v20"></path>
    <path d="M2 12h20"></path>
    <path d="M5 12a7 7 0 0 1 7-7"></path>
    <path d="M19 12a7 7 0 0 0-7-7"></path>
  </svg>
);