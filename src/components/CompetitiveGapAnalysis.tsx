'use client';

import React, { useState, useEffect } from 'react';

interface Competitor {
  name: string;
  url: string;
  strengths: string[];
  weaknesses: string[];
  contentGaps: string[];
  backlinks: number;
  keywords: number;
  coreWebVitals: {
    lcp: number; // Largest Contentful Paint (seconds)
    fid: number; // First Input Delay (milliseconds)
    cls: number; // Cumulative Layout Shift (score)
  };
}

interface CompetitiveGapAnalysisProps {
  competitors: Competitor[];
  className?: string;
  showInProduction?: boolean;
}

const CompetitiveGapAnalysis: React.FC<CompetitiveGapAnalysisProps> = ({
  competitors,
  className = '',
  showInProduction = false
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'technical' | 'backlinks'>('overview');
  
  // Only show in development mode unless explicitly allowed in production
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  const renderOverviewTab = () => (
    <div>
      <h3 className="text-lg font-semibold mb-3">Tổng quan đối thủ cạnh tranh</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Đối thủ
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Từ khóa
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Backlinks
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Core Web Vitals
              </th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  <a 
                    href={competitor.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {competitor.name}
                  </a>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {competitor.keywords.toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {competitor.backlinks.toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <span 
                      className={`inline-block w-3 h-3 rounded-full ${
                        competitor.coreWebVitals.lcp < 2.5 ? 'bg-green-500' : 
                        competitor.coreWebVitals.lcp < 4 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      title={`LCP: ${competitor.coreWebVitals.lcp}s`}
                    ></span>
                    <span 
                      className={`inline-block w-3 h-3 rounded-full ${
                        competitor.coreWebVitals.fid < 100 ? 'bg-green-500' : 
                        competitor.coreWebVitals.fid < 300 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      title={`FID: ${competitor.coreWebVitals.fid}ms`}
                    ></span>
                    <span 
                      className={`inline-block w-3 h-3 rounded-full ${
                        competitor.coreWebVitals.cls < 0.1 ? 'bg-green-500' : 
                        competitor.coreWebVitals.cls < 0.25 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      title={`CLS: ${competitor.coreWebVitals.cls}`}
                    ></span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContentTab = () => (
    <div>
      <h3 className="text-lg font-semibold mb-3">Phân tích khoảng trống nội dung</h3>
      <div className="space-y-4">
        {competitors.map((competitor, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">{competitor.name}</h4>
            <div className="mb-3">
              <h5 className="text-sm font-medium text-gray-700 mb-1">Điểm mạnh:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {competitor.strengths.map((strength, idx) => (
                  <li key={idx} className="text-sm">{strength}</li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <h5 className="text-sm font-medium text-gray-700 mb-1">Điểm yếu:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {competitor.weaknesses.map((weakness, idx) => (
                  <li key={idx} className="text-sm">{weakness}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-1">Khoảng trống nội dung:</h5>
              <ul className="list-disc pl-5 space-y-1">
                {competitor.contentGaps.map((gap, idx) => (
                  <li key={idx} className="text-sm">{gap}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTechnicalTab = () => (
    <div>
      <h3 className="text-lg font-semibold mb-3">Phân tích kỹ thuật</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Đối thủ
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                LCP
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                FID
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                CLS
              </th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {competitor.name}
                </td>
                <td className={`py-2 px-4 border-b border-gray-200 ${
                  competitor.coreWebVitals.lcp < 2.5 ? 'text-green-600' : 
                  competitor.coreWebVitals.lcp < 4 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {competitor.coreWebVitals.lcp}s
                </td>
                <td className={`py-2 px-4 border-b border-gray-200 ${
                  competitor.coreWebVitals.fid < 100 ? 'text-green-600' : 
                  competitor.coreWebVitals.fid < 300 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {competitor.coreWebVitals.fid}ms
                </td>
                <td className={`py-2 px-4 border-b border-gray-200 ${
                  competitor.coreWebVitals.cls < 0.1 ? 'text-green-600' : 
                  competitor.coreWebVitals.cls < 0.25 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {competitor.coreWebVitals.cls}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className={`competitive-gap-analysis bg-gray-50 p-4 rounded-lg border border-gray-200 ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Phân tích khoảng trống cạnh tranh</h2>
      
      <div className="mb-4">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Tổng quan
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'content' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('content')}
          >
            Nội dung
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'technical' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('technical')}
          >
            Kỹ thuật
          </button>
        </div>
      </div>
      
      <div>
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'content' && renderContentTab()}
        {activeTab === 'technical' && renderTechnicalTab()}
      </div>
    </div>
  );
};

export default CompetitiveGapAnalysis;
