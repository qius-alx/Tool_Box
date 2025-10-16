import React from 'react';

export const Robot = ({ className }: { className?: string }) => (
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
    <rect x="5" y="11" width="14" height="10" rx="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    <line x1="10" y1="15" x2="10" y2="17"></line>
    <line x1="14" y1="15" x2="14" y2="17"></line>
    <circle cx="12" cy="5" r="1"></circle>
  </svg>
);