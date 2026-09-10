import React from 'react';
import { BookOpen, CheckCircle, Shield, AlertTriangle, Compass, HeartHandshake } from 'lucide-react';
import { CHAPTER_5_DATA } from '../data/terrainRiskCurriculum';

export const ChapterSummarySection: React.FC = () => {
  return (
    <section id="chapter-summary" className="py-14 sm:py-20 border-b border-stone-800/80 bg-[#090d12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3.5 py-1 rounded-full mb-3 shadow-inner">
            <BookOpen className="w-3.5 h-3.5 mr-1" />
            <span>教案結語與整合回顧</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-100 font-serif leading-tight">
            第五章｜地形風險 全章知識總結
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            從地圖判讀到現場判斷，學習辨識危險地形與安全通過方式。整章核心架構完整收斂於四大支柱。
          </p>
        </div>

        {/* 4 Pillars Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Pillar 1: 10 Teaching Units */}
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800/60">
                  PILLAR 01
                </span>
                <span className="text-xs text-stone-500 font-mono">10 UNITS</span>
              </div>
              <h3 className="text-lg font-bold text-stone-100 font-serif">
                十個教學單元系統回顧
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                涵蓋風險乘數本質、地形四大要素（坡度/岩質/植被/排水）、天候四大變因、人員能力四大維度、行前地圖判讀、行進現場觀察、持續動態評估迴圈、六大地形安全通過技巧、五大案例復盤與 O-A-D-A 決策框架。
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-800/80 flex items-center text-xs text-emerald-400 font-medium">
              <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />
              <span>十單元知識體系已完整修習完畢</span>
            </div>
          </div>

          {/* Pillar 2: 6 Terrain Types */}
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800/60">
                  PILLAR 02
                </span>
                <span className="text-xs text-stone-500 font-mono">6 TERRAINS</span>
              </div>
              <h3 className="text-lg font-bold text-stone-100 font-serif">
                六種地形類型防護指南
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                垂直陡坡（三點不動）、碎石崩塌地（拉開間距與警戒落石）、高空瘦稜（降低重心收杖雙手扶握）、暴漲溪谷（解開背包扣具與不渡混水）、高山密林箭竹（GPS校準絕不下切溪谷）、泥濘樹根坡（小步垂直落足插穩雙杖）。
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-800/80 flex items-center text-xs text-sky-400 font-medium">
              <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />
              <span>掌握各類型防護與安全通過標準程序</span>
            </div>
          </div>

          {/* Pillar 3: 5 Practical Cases */}
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950 px-2.5 py-1 rounded border border-rose-800/60">
                  PILLAR 03
                </span>
                <span className="text-xs text-stone-500 font-mono">5 CASES</span>
              </div>
              <h3 className="text-lg font-bold text-stone-100 font-serif">
                五個實際案例教訓借鏡
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                落石崩壁橫渡盲進之戒、強風失溫高空瘦稜之痛、溪水暴漲強行涉水之險、迷途大霧盲目下切之災、終點前疲憊下坡摔跌骨折之誤。以慘痛事實告誡登山者絕不可存僥倖之心。
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-800/80 flex items-center text-xs text-rose-400 font-medium">
              <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />
              <span>銘記山難骨牌連鎖效應，築牢心理警鐘</span>
            </div>
          </div>

          {/* Pillar 4: Systematic Decision Framework */}
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950 px-2.5 py-1 rounded border border-amber-800/60">
                  PILLAR 04
                </span>
                <span className="text-xs text-stone-500 font-mono">FRAMEWORK</span>
              </div>
              <h3 className="text-lg font-bold text-stone-100 font-serif">
                系統化決策框架（O-A-D-A）
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                以「現場觀察 Observe → 風險計算 Assess → 保守裁決 Decide → 防護執行 Act」形成持續迴圈，在任何險境前始終保留充足的容錯與撤退退路。
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-800/80 flex items-center text-xs text-amber-400 font-medium">
              <CheckCircle className="w-4 h-4 mr-1.5 shrink-0" />
              <span>以結構化流程取代情緒與從眾心態</span>
            </div>
          </div>

        </div>

        {/* The Absolute Core Inviolable Safety Creed Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#111923] to-[#0a1017] border-2 border-emerald-500/60 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          
          <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-6 shadow-lg">
            <Shield className="w-8 h-8" />
          </div>

          <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-3">
            亞馬遜國家山岳協會｜原始安全核心原則
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-100 font-serif leading-tight">
              「安全第一，回家比登頂重要。」
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-300 font-serif">
              「當資訊不足、判斷不確定時，採取較保守的選擇。」
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800/80 max-w-xl mx-auto text-xs text-stone-400 leading-relaxed">
            本條目為亞馬遜國家山岳協會登山教育最高宗旨。本章教案之所有地形技術、裝備配置與決策流程，皆為落實此二核心原則而生。
          </div>

        </div>

      </div>
    </section>
  );
};
