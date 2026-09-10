import React, { useState } from 'react';
import { AlertOctagon, ShieldAlert, ShieldCheck, Wrench, ChevronRight, CheckSquare } from 'lucide-react';
import { CHAPTER_5_DATA, TerrainType } from '../data/terrainRiskCurriculum';

export const SixTerrainTypesSection: React.FC = () => {
  const [selectedTerrainId, setSelectedTerrainId] = useState<string>(CHAPTER_5_DATA.terrainTypes[0].id);

  const activeTerrain = CHAPTER_5_DATA.terrainTypes.find(t => t.id === selectedTerrainId) || CHAPTER_5_DATA.terrainTypes[0];

  return (
    <section id="six-terrains" className="py-12 sm:py-16 border-b border-stone-800/80 bg-[#0a0e14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full mb-3">
            <span>高風險地形專題</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
            六種高風險地形類型與安全通過守則
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base max-w-3xl">
            針對臺灣山林六大典型致災地形形態，深入解析其危險成因、惡劣天候加乘威脅與標準安全通過動作守則。
          </p>
        </div>

        {/* Terrain Type Selector Buttons (Mobile Scrollable) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {CHAPTER_5_DATA.terrainTypes.map((terrain, idx) => {
            const isSelected = terrain.id === selectedTerrainId;
            return (
              <button
                key={terrain.id}
                onClick={() => setSelectedTerrainId(terrain.id)}
                className={`p-3 rounded-lg text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-950/80 border-emerald-500 text-stone-100 shadow-md ring-1 ring-emerald-500/50'
                    : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                }`}
              >
                <div className="text-[11px] font-mono text-emerald-400 font-bold mb-1">
                  類型 0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-bold truncate leading-tight">
                  {terrain.name}
                </div>
                <div className="mt-2 text-[10px] px-1.5 py-0.5 rounded bg-stone-950/80 border border-stone-800 inline-block w-fit text-stone-400">
                  {terrain.riskLevel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Terrain Full Detail Card */}
        <div className="rounded-2xl bg-stone-900/90 border border-emerald-600/30 p-6 sm:p-8 shadow-2xl">
          
          {/* Top Info Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-800/80 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-stone-800 text-stone-300 text-xs font-mono">
                  {activeTerrain.category}
                </span>
                <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                  activeTerrain.riskLevel === '極高風險'
                    ? 'bg-rose-950/80 border border-rose-600/40 text-rose-300'
                    : 'bg-amber-950/80 border border-amber-600/40 text-amber-300'
                }`}>
                  {activeTerrain.riskLevel}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100 font-serif mt-2">
                {activeTerrain.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-400">
                典型特徵坡度：<strong className="text-emerald-400 font-mono">{activeTerrain.slopeRange}</strong>
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-950/70 border border-stone-800 max-w-sm text-xs text-stone-300">
              <span className="font-semibold text-emerald-400 block mb-1">地形特徵物理描述：</span>
              {activeTerrain.characteristics}
            </div>
          </div>

          {/* Two Columns: Hazards & Safety Passing Rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Left: Specific Hazards */}
            <div className="p-5 rounded-xl bg-stone-950/50 border border-rose-900/30">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>潛在主要危害與致災機制</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
                {activeTerrain.hazards.map((hazard, hIdx) => (
                  <li key={hIdx} className="flex items-start">
                    <span className="text-rose-400 mr-2 font-bold">•</span>
                    <span>{hazard}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Safety Passing Rules */}
            <div className="p-5 rounded-xl bg-stone-950/50 border border-emerald-900/30">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>標準安全通過守則與動作程序</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
                {activeTerrain.safetyPassingRules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start">
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Required Equipment */}
          <div className="mt-6 pt-5 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs text-stone-400 font-medium">
              <Wrench className="w-4 h-4 text-emerald-400" />
              <span>本類地形關鍵防護裝備：</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeTerrain.equipmentNeeded.map((eq, eIdx) => (
                <span key={eIdx} className="px-2.5 py-1 rounded bg-stone-800 border border-stone-700 text-stone-200 text-xs font-mono">
                  {eq}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
