'use client';

import React from 'react';

interface VoiceSearchOptimizedProps {
  question: string;
  answer: string;
  relatedQuestions?: {
    question: string;
    url: string;
  }[];
  className?: string;
  children?: React.ReactNode;
}

const VoiceSearchOptimized: React.FC<VoiceSearchOptimizedProps> = ({
  question,
  answer,
  relatedQuestions = [],
  className = '',
  children
}) => {
  // Format the question to be more natural for voice search
  // Voice searches are often in the form of questions
  const formattedQuestion = question.trim().endsWith('?') 
    ? question 
    : `${question}?`;

  return (
    <div className={`voice-search-optimized ${className}`}>
      {/* Main content with question and answer */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{formattedQuestion}</h3>
        <div className="prose">
          <p>{answer}</p>
        </div>
      </div>

      {/* Optional child content */}
      {children && <div className="mb-4">{children}</div>}

      {/* Related questions for voice search follow-ups */}
      {relatedQuestions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Câu hỏi liên quan:</h4>
          <ul className="space-y-2">
            {relatedQuestions.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.url} 
                  className="text-blue-600 hover:text-blue-800"
                >
                  {item.question}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hidden content for voice search optimization */}
      <div className="hidden">
        <div itemScope itemType="https://schema.org/Question">
          <meta itemProp="name" content={formattedQuestion} />
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <meta itemProp="text" content={answer} />
          </div>
        </div>
        
        {/* Common voice search phrases */}
        <p>Hãy cho tôi biết {question.toLowerCase()}</p>
        <p>Làm thế nào để {question.toLowerCase()}</p>
        <p>Tôi muốn biết về {question.toLowerCase()}</p>
        <p>Giải thích {question.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default VoiceSearchOptimized;
