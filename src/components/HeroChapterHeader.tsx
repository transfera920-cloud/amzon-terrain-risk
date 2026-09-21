import React from 'react';
import { AlertTriangle, Mountain, CloudRain, Users, ArrowDown, BookOpen } from 'lucide-react';
import { CHAPTER_5_DATA } from '../data/terrainRiskCurriculum';

export const HeroChapterHeader: React.FC = () => {
  return (
    <section 
      id="top"
      className="relative overflow-hidden border-b border-stone-800/80 bg-gradient-to-b from-[#0e141c] via-[#0b1016] to-[#090d12] pt-10 pb-14 sm:pt-14 sm:pb-20"
      aria-label="章節主視覺與核心概念"
    >
      {/* Mountain Topographical Contour Lines Background Graphic (Pure SVG, lightweight, responsive) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center overflow-hidden" 
        aria-hidden="true"
      >
        <svg viewBox="0 0 1000 600" className="w-full h-full object-cover">
          <path d="M0,300 C150,200 350,400 500,280 C650,160 850,320 1000,220 L1000,600 L0,600 Z" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M0,340 C180,240 380,440 520,320 C680,200 860,360 1000,260" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="6 4" />
          <path d="M0,390 C220,290 400,480 550,370 C700,250 880,400 1000,310" fill="none" stroke="#059669" strokeWidth="1" />
          <path d="M0,450 C250,350 420,530 580,420 C730,300 900,450 1000,360" fill="none" stroke="#047857" strokeWidth="0.8" />
          <circle cx="500" cy="280" r="4" fill="#34d399" />
          <circle cx="850" cy="320" r="3" fill="#fbbf24" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Exact and Only H1 on the Page */}
        <h1 
          id="chapter-main-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-100 font-serif leading-tight"
        >
          {CHAPTER_5_DATA.chapterTitle}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-xl text-stone-300 max-w-3xl leading-relaxed">
          {CHAPTER_5_DATA.subtitle}
        </p>

        {/* Core Concept Banner */}
        <div className="mt-8 rounded-xl bg-stone-900/90 border border-stone-800 p-5 sm:p-6 shadow-2xl relative">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-600/40 text-emerald-400 shrink-0">
              <Mountain className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">
                教案核心思維 (Core Concept)
              </div>
              <blockquote className="text-base sm:text-lg font-medium text-stone-100 italic border-l-2 border-emerald-500 pl-3 my-1">
                「{CHAPTER_5_DATA.coreConcept}」
              </blockquote>
            </div>
          </div>

          {/* Formula Display Box */}
          <div className="mt-5 pt-5 border-t border-stone-800/80">
            <div className="text-xs uppercase font-semibold text-stone-400 tracking-wider mb-2">
              山域地形核心安全公式 (Core Risk Formula)
            </div>
            
            <div className="p-4 rounded-lg bg-[#060a0e] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <span className="text-xs text-stone-400 block">數學連鎖乘數模型</span>
                <span className="text-lg sm:text-2xl font-black tracking-wide text-emerald-300 font-mono">
                  {CHAPTER_5_DATA.coreFormula}
                </span>
              </div>

              {/* Three Factors Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
                <span className="inline-flex items-center px-2.5 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-200">
                  <Mountain className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  地形條件
                </span>
                <span className="text-stone-500 font-bold">×</span>
                <span className="inline-flex items-center px-2.5 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-200">
                  <CloudRain className="w-3.5 h-3.5 mr-1 text-sky-400" />
                  天候變化
                </span>
                <span className="text-stone-500 font-bold">×</span>
                <span className="inline-flex items-center px-2.5 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-200">
                  <Users className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  人員能力
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Chapter Stat Badges */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <a 
            href="#ten-units" 
            className="p-3 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:border-emerald-700/60 transition-colors group"
          >
            <div className="text-xl sm:text-2xl font-bold text-stone-100 font-mono group-hover:text-emerald-400">
              10
            </div>
            <div className="text-xs text-stone-400 mt-0.5">完整教學單元</div>
          </a>
          <a 
            href="#six-terrains" 
            className="p-3 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:border-emerald-700/60 transition-colors group"
          >
            <div className="text-xl sm:text-2xl font-bold text-stone-100 font-mono group-hover:text-emerald-400">
              6
            </div>
            <div className="text-xs text-stone-400 mt-0.5">高風險地形類型</div>
          </a>
          <a 
            href="#five-cases" 
            className="p-3 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:border-emerald-700/60 transition-colors group"
          >
            <div className="text-xl sm:text-2xl font-bold text-stone-100 font-mono group-hover:text-emerald-400">
              5
            </div>
            <div className="text-xs text-stone-400 mt-0.5">實戰案例情境</div>
          </a>
          <a 
            href="#decision-framework" 
            className="p-3 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:border-emerald-700/60 transition-colors group"
          >
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
              O-A-D-A
            </div>
            <div className="text-xs text-stone-400 mt-0.5">系統化決策流程</div>
          </a>
        </div>

      </div>
    </section>
  );
};
