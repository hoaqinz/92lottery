'use client';

import React, { useState, useEffect } from 'react';

interface AIContentSuggestionProps {
  mainKeyword: string;
  relatedKeywords?: string[];
  contentType: 'article' | 'product' | 'service' | 'guide';
  className?: string;
  children: React.ReactNode;
}

interface KeywordData {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  intent: 'informational' | 'navigational' | 'transactional' | 'commercial';
}

// This is a mock of AI-driven content suggestions
// In a real implementation, this would connect to an API
const AIContentSuggestion: React.FC<AIContentSuggestionProps> = ({
  mainKeyword,
  relatedKeywords = [],
  contentType,
  className = '',
  children
}) => {
  const [keywordData, setKeywordData] = useState<KeywordData[]>([]);
  const [contentSuggestions, setContentSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching keyword data from an API
  useEffect(() => {
    // In a real implementation, this would be an API call
    const mockFetchKeywordData = () => {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        const mockData: KeywordData[] = [
          {
            keyword: mainKeyword,
            searchVolume: Math.floor(Math.random() * 10000),
            difficulty: Math.floor(Math.random() * 100),
            intent: 'informational'
          },
          ...relatedKeywords.map(keyword => ({
            keyword,
            searchVolume: Math.floor(Math.random() * 5000),
            difficulty: Math.floor(Math.random() * 100),
            intent: ['informational', 'navigational', 'transactional', 'commercial'][
              Math.floor(Math.random() * 4)
            ] as KeywordData['intent']
          }))
        ];
        
        setKeywordData(mockData);
        
        // Generate content suggestions based on keyword data
        const suggestions = [
          `Thêm phần so sánh chi tiết về "${mainKeyword}" với các đối thủ cạnh tranh`,
          `Bổ sung thêm câu hỏi thường gặp về "${mainKeyword}"`,
          `Thêm hình ảnh minh họa cho "${mainKeyword}"`,
          `Bổ sung video hướng dẫn về "${mainKeyword}"`,
          `Thêm bảng dữ liệu về "${mainKeyword}"`
        ];
        
        setContentSuggestions(suggestions);
        setIsLoading(false);
      }, 1000);
    };
    
    mockFetchKeywordData();
  }, [mainKeyword, relatedKeywords, contentType]);

  // This component doesn't actually modify the content
  // It just provides suggestions for content improvement
  // In a real implementation, these suggestions could be used by editors
  return (
    <div className={`ai-content-suggestion ${className}`} data-content-type={contentType}>
      {/* The actual content */}
      {children}
      
      {/* AI suggestions - only visible in development/admin mode */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold mb-2">AI Content Suggestions</h3>
          
          {isLoading ? (
            <p>Loading suggestions...</p>
          ) : (
            <>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Keyword Analysis:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Keyword
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Search Volume
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Difficulty
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Intent
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {keywordData.map((data, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {data.keyword}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {data.searchVolume}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {data.difficulty}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {data.intent}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Content Improvement Suggestions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {contentSuggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AIContentSuggestion;
