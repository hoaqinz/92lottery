'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageSwitcherProps {
  currentLanguage?: string;
  className?: string;
}

const languages: Language[] = [
  {
    code: 'vi',
    name: 'Tiếng Việt',
    flag: '🇻🇳'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'zh',
    name: '中文',
    flag: '🇨🇳'
  },
  {
    code: 'th',
    name: 'ไทย',
    flag: '🇹🇭'
  }
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage = 'vi',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getLanguageUrl = (langCode: string) => {
    // For simplicity, we're just adding language code as a prefix
    // In a real app, you might have more complex logic
    if (langCode === 'vi') {
      return pathname; // Default language doesn't need prefix
    }
    
    return `/${langCode}${pathname}`;
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 bg-white px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="mr-1">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <Link
                key={language.code}
                href={getLanguageUrl(language.code)}
                className={`flex items-center px-4 py-2 text-sm ${
                  language.code === currentLanguage
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                hrefLang={language.code}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hidden links for SEO */}
      <div className="hidden">
        {languages.map((language) => (
          <Link
            key={language.code}
            href={getLanguageUrl(language.code)}
            hrefLang={language.code}
            rel="alternate"
          >
            {language.name}
          </Link>
        ))}
        <Link href={pathname} hrefLang="x-default" rel="alternate">
          Default language
        </Link>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
