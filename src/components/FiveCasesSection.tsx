import React, { useState } from 'react';
import { AlertTriangle, MapPin, CloudRain, Users, ShieldAlert, Lightbulb } from 'lucide-react';
import { CHAPTER_5_DATA, CaseStudy } from '../data/terrainRiskCurriculum';

export const FiveCasesSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(CHAPTER_5_DATA.caseStudies[0].id);

  const activeCase = CHAPTER_5_DATA.caseStudies.find(c => c.id === activeCaseId) || CHAPTER_5_DATA.caseStudies[0];

  return (
    <section id="five-cases" className="py-12 sm:py-16 border-b border-stone-800/80 bg-[#080c10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-3 py-1 rounded-full mb-3">
            <AlertTriangle className="w-3.5 h-3.5 mr-1" />
            <span>真實山難情境復盤</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
            五個實際案例研討與情境剖析
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base max-w-3xl">
            以真實山難為借鏡，以「地形 × 天候 × 人員」核心公式進行全維度復盤，探討微小錯誤如何引發骨牌式連鎖災難。
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-8">
          {CHAPTER_5_DATA.caseStudies.map((caseItem, idx) => {
            const isSelected = caseItem.id === activeCaseId;
            return (
              <button
                key={caseItem.id}
                onClick={() => setActiveCaseId(caseItem.id)}
                className={`p-3 rounded-lg text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-rose-950/60 border-rose-500/80 text-stone-100 ring-1 ring-rose-500/40 shadow-lg'
                    : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                }`}
              >
                <div className="text-[11px] font-mono text-rose-400 font-bold mb-1">
                  案例 0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                  {caseItem.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Detail Card */}
        <div className="rounded-2xl bg-stone-900/90 border border-rose-600/30 p-6 sm:p-8 shadow-2xl">
          
          {/* Case Header */}
          <div className="pb-6 border-b border-stone-800/80">
            <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 font-bold mb-1.5">
              <span>CASE STUDY FILE</span>
              <span className="text-stone-600">•</span>
              <span>情境分析</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-100 font-serif">
              {activeCase.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-stone-400 flex items-center">
              <MapPin className="w-3.5 h-3.5 text-stone-500 mr-1.5" />
              <span>環境情境地點：{activeCase.locationContext}</span>
            </p>
          </div>

          {/* Three Key Factors Grid (Formula Breakdown) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            
            {/* Terrain Factor */}
            <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>地形條件（客觀威脅）</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeCase.keyFactors.terrain}
              </p>
            </div>

            {/* Weather Factor */}
            <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-sky-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>天候變化（加乘催化）</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeCase.keyFactors.weather}
              </p>
            </div>

            {/* Personnel Factor */}
            <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>人員能力（決策失誤）</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeCase.keyFactors.personnel}
              </p>
            </div>

          </div>

          {/* Event Sequence & Root Cause */}
          <div className="space-y-4 text-xs sm:text-sm">
            
            <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800">
              <h4 className="font-bold text-stone-200 mb-1.5 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-2"></span>
                事故經過還原：
              </h4>
              <p className="text-stone-300 leading-relaxed">
                {activeCase.eventDescription}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950/50 border border-stone-800">
              <h4 className="font-bold text-stone-200 mb-1.5 flex items-center">
                <ShieldAlert className="w-4 h-4 text-rose-400 mr-2" />
                根本原因分析（Root Cause）：
              </h4>
              <p className="text-stone-300 leading-relaxed">
                {activeCase.rootCause}
              </p>
            </div>

            {/* Decision Lesson Takeaway */}
            <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/30 border border-emerald-600/40 text-emerald-100">
              <div className="flex items-center space-x-2 font-bold text-xs sm:text-sm text-emerald-400 mb-1.5">
                <Lightbulb className="w-4 h-4" />
                <span>關鍵決策啟示與安全警言：</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-emerald-200/95 font-medium">
                {activeCase.decisionLesson}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
