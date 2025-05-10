'use client';

import React from 'react';

interface SemanticContentProps {
  mainKeyword: string;
  relatedKeywords: string[];
  children: React.ReactNode;
  className?: string;
}

const SemanticContent: React.FC<SemanticContentProps> = ({
  mainKeyword,
  relatedKeywords,
  children,
  className = ''
}) => {
  // Create a data attribute with the main keyword for potential future JS enhancements
  const dataMainKeyword = mainKeyword.toLowerCase().replace(/\s+/g, '-');
  
  // Create a data attribute with related keywords for potential future JS enhancements
  const dataRelatedKeywords = relatedKeywords.join(',').toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div 
      className={`semantic-content ${className}`}
      data-main-keyword={dataMainKeyword}
      data-related-keywords={dataRelatedKeywords}
    >
      {children}
      
      {/* Hidden semantic context for search engines */}
      <div className="hidden">
        <span>{mainKeyword}</span>
        {relatedKeywords.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </div>
    </div>
  );
};

export default SemanticContent;
