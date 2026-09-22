import React, { useState } from 'react';
import { Compass, Menu, X, Search, Share2, Check } from 'lucide-react';

interface HeaderNavProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  fontSize?: 'normal' | 'large' | 'xlarge';
  setFontSize?: (size: 'normal' | 'large' | 'xlarge') => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onSearchChange,
  searchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-800/80 bg-[#090d12]/95 backdrop-blur-md">
      {/* Top Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://amazon-hike.com/"
              className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-emerald-400 shadow-inner hover:border-emerald-500 transition-colors"
              aria-label="回亞馬遜國家山岳協會主網站"
            >
              <Compass className="w-6 h-6" />
            </a>
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 block font-medium">
                登山安全與登山教育知識平台
              </span>
              <a 
                href="https://amazon-hike.com/" 
                className="text-base sm:text-lg font-bold text-stone-100 hover:text-emerald-400 transition-colors"
              >
                亞馬遜國家山岳協會
              </a>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-stone-300">
            <a href="#core-concept" className="hover:text-emerald-400 transition-colors py-1">
              核心概念
            </a>
            <a href="#ten-units" className="hover:text-emerald-400 transition-colors py-1">
              十個教學單元
            </a>
            <a href="#six-terrains" className="hover:text-emerald-400 transition-colors py-1">
              六種地形類型
            </a>
            <a href="#five-cases" className="hover:text-emerald-400 transition-colors py-1">
              五個實際案例
            </a>
            <a href="#decision-framework" className="hover:text-emerald-400 transition-colors py-1">
              決策框架
            </a>
            <a href="#chapter-summary" className="hover:text-emerald-400 transition-colors py-1 text-emerald-400">
              章節總結
            </a>
          </nav>

          {/* Quick Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Share Page Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700 transition-colors"
              title="複製公開網址"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">已複製</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">分享</span>
                </>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-900"
              aria-label="開啟導覽選單"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Semantic Filter & Search Bar */}
      <div className="bg-stone-950/70 border-t border-stone-800/60 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-end text-xs text-stone-400">
          {/* Quick Filter Search Bar */}
          <div className="relative flex items-center w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-500 absolute left-2.5 pointer-events-none" />
            <input
              type="search"
              placeholder="搜尋本章關鍵字 (如: 坡度, 溪谷, 碎石)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-3 py-1 bg-stone-900/90 border border-stone-800 rounded text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-emerald-600"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-2 text-stone-500 hover:text-stone-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-800 bg-[#0c1117] px-4 pt-3 pb-5 space-y-3">
          <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider pb-1 border-b border-stone-800">
            章節目錄導覽
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a
              href="#core-concept"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-stone-900/80 text-stone-200 hover:text-emerald-400 border border-stone-800"
            >
              核心概念與公式
            </a>
            <a
              href="#terrain-factors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-stone-900/80 text-stone-200 hover:text-emerald-400 border border-stone-800"
            >
              地形評估三層次
            </a>
            <a
              href="#ten-units"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-stone-900/80 text-stone-200 hover:text-emerald-400 border border-stone-800"
            >
              十個教學單元
            </a>
            <a
              href="#six-terrains"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-stone-900/80 text-stone-200 hover:text-emerald-400 border border-stone-800"
            >
              六種地形類型
            </a>
            <a
              href="#five-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-stone-900/80 text-stone-200 hover:text-emerald-400 border border-stone-800"
            >
              五個實際案例
            </a>
            <a
              href="#decision-framework"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-stone-900/80 text-stone-200 hover:text-emerald-400 border border-stone-800"
            >
              系統化決策框架
            </a>
            <a
              href="#risk-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-stone-900/80 text-stone-200 hover:text-emerald-400 border border-stone-800"
            >
              風險公式試算
            </a>
            <a
              href="#chapter-summary"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-emerald-950/60 text-emerald-300 font-semibold border border-emerald-700/60"
            >
              章節總結與安全核心
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
