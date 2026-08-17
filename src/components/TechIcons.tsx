import React from 'react';

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-4 h-4' }) => {
  switch (name.toLowerCase()) {
    case 'next.js':
    case 'nextjs':
    case 'next':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000"/>
          <path d="M16.5 17.5L8.5 7H7V17H8.6V9.8L15.3 18.5C15.7 18.2 16.1 17.9 16.5 17.5Z" fill="#FFFFFF"/>
          <path d="M15.5 7H17V13.5H15.5V7Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#E44D26"/>
          <path d="M12 4.5V20.3L17.2 18.8L18.4 4.5H12Z" fill="#F16529"/>
          <path d="M12 8.5H8.2L8.5 11.5H12V8.5ZM12 14.5L12 14.5L9.4 13.8L9.2 12H7.2L7.6 15.6L12 16.8V14.5Z" fill="#EBEBEB"/>
          <path d="M12 8.5V11.5H15.4L15.1 14.5L12 15.3V17.6L16.4 16.4L16.9 11.5H12V8.5Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 3L5.5 20L12 22L18.5 20L20 3H4Z" fill="#1572B6"/>
          <path d="M12 4.5V20.3L17.2 18.8L18.4 4.5H12Z" fill="#33A9DC"/>
          <path d="M12 8.5H8.2L8.5 11.5H12V8.5ZM12 14.5L9.4 13.8L9.2 12H7.2L7.6 15.6L12 16.8V14.5Z" fill="#EBEBEB"/>
          <path d="M12 8.5V11.5H15.4L15.1 14.5L12 15.3V17.6L16.4 16.4L16.9 11.5H12V8.5Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M7 17.5C7.8 18.5 9 19 10.5 19C12.5 19 13.5 17.8 13.5 15.5V9H11.5V15.5C11.5 16.6 11 17.2 10.2 17.2C9.5 17.2 9 16.8 8.6 16.2L7 17.5ZM15 17.2C15.8 18.4 17 19 18.5 19C20.5 19 22 17.8 22 15.8C22 14 20.8 13.2 19.2 12.5L18.5 12.2C17.6 11.8 17.2 11.4 17.2 10.7C17.2 10 17.8 9.5 18.7 9.5C19.5 9.5 20.1 9.8 20.6 10.5L22 9.2C21.2 8.1 20 7.5 18.6 7.5C16.8 7.5 15.3 8.7 15.3 10.6C15.3 12.3 16.4 13.1 18 13.8L18.7 14.1C19.8 14.6 20.2 15.1 20.2 15.9C20.2 16.7 19.5 17.3 18.5 17.3C17.4 17.3 16.6 16.7 16.1 15.8L15 17.2Z" fill="#000000"/>
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <path d="M5.5 10.5H12.5V8.5H3.5V10.5H5.5V18H7.5V10.5H5.5ZM13.5 16.2C14.2 17.2 15.2 17.8 16.5 17.8C18.2 17.8 19.5 16.8 19.5 15.2C19.5 13.7 18.5 13 17 12.4L16.4 12.1C15.6 11.8 15.2 11.4 15.2 10.8C15.2 10.2 15.7 9.8 16.5 9.8C17.2 9.8 17.8 10.1 18.2 10.7L19.5 9.5C18.8 8.5 17.8 8 16.5 8C14.8 8 13.5 9 13.5 10.7C13.5 12.2 14.5 12.9 15.8 13.5L16.4 13.7C17.4 14.1 17.8 14.5 17.8 15.2C17.8 15.9 17.2 16.4 16.4 16.4C15.4 16.4 14.7 15.9 14.3 15.1L13.5 16.2Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'react.js':
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/>
        </svg>
      );
    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
        </svg>
      );
    case 'node.js':
    case 'node':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#5FA04E">
          <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2ZM11 17.5H9.5V13H8V11.5H11V17.5ZM16 17.5H14.5V10H16V17.5Z"/>
        </svg>
      );
    case 'express.js':
    case 'express':
      return (
        <span className="text-xs font-bold font-mono text-neutral-900 bg-neutral-200 px-1 py-0.2 rounded">ex</span>
      );
    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#4169E1">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C14.2 5 16 6.8 16 9C16 11.2 14.2 13 12 13C9.8 13 8 11.2 8 9C8 6.8 9.8 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#47A248">
          <path d="M12 2C11.5 2.5 7 8.5 7 13.5C7 17.5 9.5 20.5 12 22C14.5 20.5 17 17.5 17 13.5C17 8.5 12.5 2.5 12 2ZM12 19.5V4.5C13.5 6.5 15.5 10 15.5 13.5C15.5 16.5 14 18.5 12 19.5Z"/>
        </svg>
      );
    case 'mongoose':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#880000">
          <rect width="24" height="24" rx="4" fill="#880000"/>
          <path d="M7 16V8L12 13L17 8V16H15V11L12 14.5L9 11V16H7Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'prisma orm':
    case 'prisma':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#2D3748">
          <path d="M12 2L4 18L12 22L20 18L12 2ZM12 5.5L17.2 16.5H6.8L12 5.5Z"/>
        </svg>
      );
    case 'c++':
    case 'cpp':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#00599C"/>
          <path d="M10 8.5C9.2 8.5 8.5 9.2 8.5 10V14C8.5 14.8 9.2 15.5 10 15.5H11.5V17H10C8.3 17 7 15.7 7 14V10C7 8.3 8.3 7 10 7H11.5V8.5H10Z" fill="#FFFFFF"/>
          <path d="M14 11H15V10H16V11H17V12H16V13H15V12H14V11ZM18 11H19V10H20V11H21V12H20V13H19V12H18V11Z" fill="#659AD2"/>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#EA2D2E"/>
          <path d="M8.5 15.5C8.5 15.5 9.5 16.2 11.5 16.2C13.5 16.2 15.5 15.2 15.5 15.2C15.5 15.2 14.8 17.5 11.5 17.5C8.2 17.5 8.5 15.5 8.5 15.5ZM10.5 7.5C10.5 7.5 13 8 13 9.5C13 11 11.5 11.5 11.5 12.5C11.5 13.5 13 14 13 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'c':
    case 'c language':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#659AD2">
          <circle cx="12" cy="12" r="10" fill="#283593"/>
          <path d="M15 8C14.2 7.4 13.2 7 12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C13.2 17 14.2 16.6 15 16L16 17.5C14.9 18.4 13.5 19 12 19C8.1 19 5 15.9 5 12C5 8.1 8.1 5 12 5C13.5 5 14.9 5.6 16 6.5L15 8Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4C12.6 1.9 11.7 1.9 11.2 2.4L9.3 4.3L11.7 6.7C12.2 6.5 12.9 6.7 13.3 7.1C13.8 7.6 13.9 8.3 13.6 8.9L16 11.3C16.6 11 17.3 11.1 17.8 11.6C18.4 12.2 18.4 13.1 17.8 13.7C17.2 14.3 16.3 14.3 15.7 13.7C15.3 13.3 15.1 12.6 15.4 12.1L13.1 9.8V15.2C13.3 15.4 13.4 15.7 13.4 16C13.4 16.8 12.7 17.5 11.9 17.5C11.1 17.5 10.4 16.8 10.4 16C10.4 15.4 10.7 15 11.1 14.7V9.3C10.7 9 10.4 8.6 10.4 8C10.4 7.5 10.7 7 11.1 6.8L8.7 4.4L2.4 10.7C1.9 11.2 1.9 12.1 2.4 12.6L10.9 21.1C11.4 21.6 12.3 21.6 12.8 21.1L21.6 12.3C22.1 11.9 22.1 11.4 21.6 10.9Z"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#181717">
          <path d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.843 20.198 8.796 21.52C9.3 21.611 9.48 21.298 9.48 21.03C9.48 20.793 9.472 20.165 9.467 19.327C6.685 19.938 6.098 17.973 6.098 17.973C5.643 16.804 4.996 16.49 4.996 16.49C4.088 15.864 5.065 15.877 5.065 15.877C6.069 15.948 6.598 16.924 6.598 16.924C7.491 18.47 8.941 18.026 9.511 17.768C9.602 17.114 9.86 16.669 10.146 16.417C7.925 16.162 5.59 15.293 5.59 11.428C5.59 10.327 5.979 9.426 6.617 8.72C6.514 8.465 6.171 7.439 6.715 6.06C6.715 6.06 7.553 5.79 9.462 7.098C10.258 6.874 11.107 6.763 11.954 6.759C12.801 6.763 13.65 6.874 14.448 7.098C16.355 5.79 17.191 6.06 17.191 6.06C17.737 7.439 17.394 8.465 17.291 8.72C17.931 9.426 18.318 10.327 18.318 11.428C18.318 15.304 15.979 16.159 13.75 16.408C14.108 16.719 14.428 17.334 14.428 18.277C14.428 19.638 14.416 20.735 14.416 21.03C14.416 21.302 14.593 21.618 15.105 21.518C19.061 20.194 21.901 16.444 21.901 12.017C21.901 6.484 17.424 2 12 2Z"/>
        </svg>
      );
    case 'vs code':
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#007ACC">
          <path d="M17.5 2.5L7.5 10.5L3.5 7.5L2 8.5V15.5L3.5 16.5L7.5 13.5L17.5 21.5L22 19.5V4.5L17.5 2.5ZM17.5 16.8L10.2 12L17.5 7.2V16.8Z"/>
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#000000">
          <path d="M12 2L22 20H2L12 2Z"/>
        </svg>
      );
    case 'render':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#46E3B7">
          <circle cx="12" cy="12" r="10" fill="#1A1F2C"/>
          <path d="M7 16V8H13C15.2 8 17 9.8 17 12C17 14.2 15.2 16 13 16H7Z" fill="#46E3B7"/>
        </svg>
      );
    case 'google gemini api':
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="url(#geminiGrad)"/>
          <defs>
            <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1BA1E3"/>
              <stop offset="0.5" stopColor="#5E5CE6"/>
              <stop offset="1" stopColor="#C93BBE"/>
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return (
        <span className="w-2 h-2 rounded-full bg-neutral-900" />
      );
  }
};
