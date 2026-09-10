import React from 'react';
import { CheckSquare, ShieldCheck, ArrowRight, AlertOctagon, HelpCircle } from 'lucide-react';
import { CHAPTER_5_DATA } from '../data/terrainRiskCurriculum';

export const DecisionFrameworkSection: React.FC = () => {
  return (
    <section id="decision-framework" className="py-12 sm:py-16 border-b border-stone-800/80 bg-[#0a0e14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            <span>現場決策指引</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
            系統化決策框架（O-A-D-A 循環）
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base max-w-3xl">
            面對具有潛在危險的困難地形，不憑直覺或盲目從眾。嚴格執行四階段結構化決策流程，落實保守原則。
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHAPTER_5_DATA.decisionFramework.map((frameworkStep, idx) => (
            <div 
              key={idx}
              className="rounded-xl bg-stone-900/80 border border-stone-800 p-6 flex flex-col justify-between hover:border-emerald-600/50 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-800/60">
                    {frameworkStep.step}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    STEP 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-100 font-serif">
                  {frameworkStep.title}
                </h3>
                <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                  {frameworkStep.description}
                </p>

                {/* Checklist */}
                <div className="mt-4 pt-4 border-t border-stone-800/80 space-y-2">
                  <div className="text-[11px] uppercase font-bold text-stone-400 tracking-wider">
                    執行檢核清單：
                  </div>
                  {frameworkStep.checklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start text-xs text-stone-300 leading-relaxed">
                      <CheckSquare className="w-3.5 h-3.5 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Non-Negotiable Conservative Principle Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-stone-900 to-emerald-950/60 border border-emerald-500/40 p-6 sm:p-8 text-center shadow-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-stone-950 px-3 py-1 rounded-full border border-emerald-600/50 mb-4">
            <AlertOctagon className="w-4 h-4 text-emerald-400" />
            <span>決策核心最高準則</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-100 font-serif leading-tight">
            「安全第一，回家比登頂重要。」
          </h3>
          
          <p className="mt-3 text-base sm:text-lg text-emerald-300 font-medium max-w-2xl mx-auto leading-relaxed">
            「當資訊不足、判斷不確定時，採取較保守的選擇。」
          </p>

          <p className="mt-4 text-xs text-stone-400 max-w-xl mx-auto leading-relaxed">
            在山岳教育中，撤退並非懦弱，而是成熟山岳人最高等級的自律與智慧。山永遠都在，唯有平安歸來，才能延續下一次的探險。
          </p>
        </div>

      </div>
    </section>
  );
};
