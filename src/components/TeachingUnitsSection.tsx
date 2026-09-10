import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, AlertCircle, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';
import { CHAPTER_5_DATA, TeachingUnit } from '../data/terrainRiskCurriculum';

interface TeachingUnitsSectionProps {
  fontSizeClass: string;
  searchQuery: string;
}

export const TeachingUnitsSection: React.FC<TeachingUnitsSectionProps> = ({ fontSizeClass, searchQuery }) => {
  // Set default open units (first 2 open by default, user can toggle all)
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });

  const toggleUnit = (unitNumber: number) => {
    setExpandedUnits(prev => ({
      ...prev,
      [unitNumber]: !prev[unitNumber]
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    CHAPTER_5_DATA.units.forEach(u => { all[u.unitNumber] = true; });
    setExpandedUnits(all);
  };

  const collapseAll = () => {
    const none: Record<number, boolean> = {};
    CHAPTER_5_DATA.units.forEach(u => { none[u.unitNumber] = false; });
    setExpandedUnits(none);
  };

  // Filter units if there is an active search query
  const filteredUnits = CHAPTER_5_DATA.units.filter(unit => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = unit.title.toLowerCase().includes(q);
    const subtitleMatch = unit.subtitle.toLowerCase().includes(q);
    const summaryMatch = unit.summary.toLowerCase().includes(q);
    const contentMatch = unit.contentSections.some(sec => 
      sec.heading.toLowerCase().includes(q) ||
      sec.paragraphs.some(p => p.toLowerCase().includes(q)) ||
      sec.bulletPoints?.some(b => b.toLowerCase().includes(q))
    );
    return titleMatch || subtitleMatch || summaryMatch || contentMatch;
  });

  return (
    <section id="ten-units" className="py-12 sm:py-16 border-b border-stone-800/80 bg-[#080c10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-stone-800/80 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full mb-3">
              <BookOpen className="w-3.5 h-3.5 mr-1" />
              <span>依原始教案順序編排</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
              十個教學單元完整內容
            </h2>
            <p className="mt-2 text-stone-400 text-sm max-w-2xl">
              嚴格完整保留全部十個教學單元之原始專業知識、定義與分析，不任意刪減或濃縮，以結構化卡片提供最優良的手機與桌面閱讀體驗。
            </p>
          </div>

          {/* Expand/Collapse Controls */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded bg-stone-900 border border-stone-800 text-xs font-medium text-stone-300 hover:text-white hover:border-stone-700 transition-colors"
            >
              展開全部單元
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded bg-stone-900 border border-stone-800 text-xs font-medium text-stone-300 hover:text-white hover:border-stone-700 transition-colors"
            >
              收合單元
            </button>
          </div>
        </div>

        {/* Search Results Notice */}
        {searchQuery && (
          <div className="mb-6 p-3 rounded-lg bg-stone-900 border border-emerald-800/50 flex items-center justify-between text-xs text-stone-300">
            <span>
              搜尋關鍵字「<strong className="text-emerald-400">{searchQuery}</strong>」共找到 {filteredUnits.length} 個相關單元
            </span>
          </div>
        )}

        {/* Units Navigation Pill Bar (Quick Jump) */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex space-x-2 text-xs min-w-max">
            {CHAPTER_5_DATA.units.map(unit => (
              <a
                key={unit.unitNumber}
                href={`#unit-${unit.unitNumber}`}
                className="px-3 py-1.5 rounded-md bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-emerald-400 hover:border-emerald-600/40 transition-colors font-mono"
              >
                0{unit.unitNumber} {unit.title.split('：')[0].replace('四大要素分析', '').replace('四大關鍵變因', '').replace('四大評估維度', '')}
              </a>
            ))}
          </div>
        </div>

        {/* 10 Teaching Units List */}
        <div className="space-y-6">
          {filteredUnits.map((unit) => {
            const isExpanded = !!expandedUnits[unit.unitNumber];

            return (
              <article
                key={unit.unitNumber}
                id={`unit-${unit.unitNumber}`}
                className={`rounded-xl border transition-all ${
                  isExpanded
                    ? 'bg-stone-900/90 border-emerald-600/40 shadow-xl'
                    : 'bg-stone-900/50 border-stone-800 hover:border-stone-700'
                }`}
              >
                {/* Unit Header Bar (Clickable Accordion) */}
                <div 
                  onClick={() => toggleUnit(unit.unitNumber)}
                  className="p-5 sm:p-6 cursor-pointer select-none flex items-start justify-between gap-4"
                >
                  <div className="flex items-start space-x-3.5">
                    {/* Unit Badge */}
                    <div className={`shrink-0 px-2.5 py-1 rounded text-xs font-mono font-bold tracking-wider ${
                      isExpanded
                        ? 'bg-emerald-900/80 border border-emerald-500/60 text-emerald-300'
                        : 'bg-stone-800 border border-stone-700 text-stone-300'
                    }`}>
                      {unit.badge}
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-100 font-serif leading-snug">
                        {unit.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-stone-400">
                        {unit.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div className="shrink-0 p-1.5 rounded-lg bg-stone-800/80 border border-stone-700 text-stone-400 hover:text-white">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Unit Summary Strip (Always Visible for quick scanning) */}
                <div className="px-5 sm:px-6 pb-4 pt-0">
                  <div className="p-3.5 rounded-lg bg-stone-950/70 border border-stone-800/80 text-xs sm:text-sm text-stone-300 leading-relaxed">
                    <span className="font-semibold text-emerald-400 mr-2">單元概要：</span>
                    {unit.summary}
                  </div>
                </div>

                {/* Collapsible Detailed Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-800/80 space-y-6">
                    
                    {/* Unit Content Sections */}
                    {unit.contentSections.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <h4 className="text-base sm:text-lg font-bold text-stone-200 border-l-2 border-emerald-500 pl-3">
                          {section.heading}
                        </h4>

                        {/* Paragraphs */}
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className={`${fontSizeClass} text-stone-300 leading-relaxed`}>
                            {p}
                          </p>
                        ))}

                        {/* Bullet points if present */}
                        {section.bulletPoints && section.bulletPoints.length > 0 && (
                          <div className="mt-3 p-4 rounded-lg bg-stone-950/60 border border-stone-800 space-y-2">
                            {section.bulletPoints.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start text-xs sm:text-sm text-stone-300 leading-relaxed">
                                <span className="text-emerald-400 font-bold mr-2.5 mt-0.5">•</span>
                                <div>{bullet}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Callout Box if present */}
                        {section.calloutBox && (
                          <div className={`mt-4 p-4 rounded-lg border ${
                            section.calloutBox.type === 'critical'
                              ? 'bg-rose-950/40 border-rose-600/40 text-rose-100'
                              : section.calloutBox.type === 'warning'
                              ? 'bg-amber-950/40 border-amber-600/40 text-amber-100'
                              : 'bg-emerald-950/40 border-emerald-600/40 text-emerald-100'
                          }`}>
                            <div className="flex items-center space-x-2 font-bold text-xs sm:text-sm mb-1.5">
                              <AlertCircle className="w-4 h-4 text-emerald-400" />
                              <span>{section.calloutBox.title}</span>
                            </div>
                            <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                              {section.calloutBox.text}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Key Takeaway Box */}
                    <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-600/30 flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          單元核心精要 (Key Takeaway)
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-emerald-200/90 font-medium leading-relaxed">
                          {unit.keyTakeaway}
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
