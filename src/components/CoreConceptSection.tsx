import React from 'react';
import { Mountain, CloudRain, Users, MapPin, Eye, RefreshCw, Layers, ShieldCheck, Compass } from 'lucide-react';
import { CHAPTER_5_DATA } from '../data/terrainRiskCurriculum';

export const CoreConceptSection: React.FC = () => {
  return (
    <section id="core-concept" className="py-12 sm:py-16 border-b border-stone-800/80 bg-[#0a0e14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full mb-3">
            <span>核心架構剖析</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
            核心內容：三大相乘維度與要素
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base max-w-3xl">
            登山風險並非單一因素造成，而是「地形條件」、「天候變化」與「人員能力」三者的交集乘積。任一維度的失衡都可能觸發致命連鎖反應。
          </p>
        </div>

        {/* The 3 Major Multiplier Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. 地形條件 */}
          <div className="rounded-xl bg-stone-900/80 border border-stone-800 p-6 flex flex-col justify-between hover:border-emerald-600/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-600/40 flex items-center justify-center text-emerald-400 mb-4">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center justify-between">
                <span>1. 地形條件</span>
                <span className="text-xs font-mono font-normal text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">客觀基底</span>
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                山域環境物理結構的固有屬性，決定了重力坡度、摩擦支撐點與排水危險度。
              </p>

              <div className="mt-5 space-y-3">
                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    坡度（Slope）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    決定失足時的重力加速度與制動機率，坡度越陡容錯率越低。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    岩質（Rock Quality）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    頁岩、板岩風化碎石與堅固火成岩之摩擦係數與踩點崩解穩定度。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    植被覆蓋（Vegetation）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    樹根濕滑、箭竹海遮蔽路跡與暗藏深坑，需判斷地表真偽。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    排水系統（Drainage）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    溝槽凹地水流匯聚通道，降雨時極易在幾分鐘內引發山洪或土石流。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 天候變化 */}
          <div className="rounded-xl bg-stone-900/80 border border-stone-800 p-6 flex flex-col justify-between hover:border-sky-600/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400 mb-4">
                <CloudRain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center justify-between">
                <span>2. 天候變化</span>
                <span className="text-xs font-mono font-normal text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">外部催化</span>
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                氣象環境的即時動態改變，會讓原本安全的普通地形在短時間內變為致命陷阱。
              </p>

              <div className="mt-5 space-y-3">
                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2"></span>
                    降雨（Rainfall）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    直接降低摩擦力達 60% 以上，軟化地質結構引發崩落並加速失溫。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2"></span>
                    溫度（Temperature）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    低溫麻痺肢體神經使抓握力喪失；冰點以下岩面結黑冰幾近零摩擦。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2"></span>
                    風速（Wind Speed）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    高山強風吹襲大背包宛如風帆，在瘦稜與岩壁上可直接推倒人體。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2"></span>
                    能見度（Visibility）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    濃霧與暴雨遮蔽前方路跡、懸崖邊界與遠山定位，極易誘發迷途下切。
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 人員能力 */}
          <div className="rounded-xl bg-stone-900/80 border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-600/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-600/40 flex items-center justify-center text-amber-400 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-100 flex items-center justify-between">
                <span>3. 人員能力</span>
                <span className="text-xs font-mono font-normal text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/60">可控變因</span>
              </h3>
              <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                唯一由登山者自主控制的要素，決定了隊伍對惡劣環境的承載與容錯邊際。
              </p>

              <div className="mt-5 space-y-3">
                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                    技術水平（Technical）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    三點不動攀登、碎石坡重心壓制、繩索確保操作與離線導航熟練度。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                    體能狀態（Fitness）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    體力衰竭將導致肌肉顫抖與落足精確度暴跌，多數失足發生於疲累下坡。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                    心理素質（Resilience）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    面對高度暴露感與惡劣逆境時維持冷靜專注，克服懼高與恐慌僵直。
                  </div>
                </div>

                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800/80">
                  <div className="font-semibold text-stone-200 text-xs flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                    決策能力（Decision）
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    擺脫「登頂執念」與沉沒成本，勇於做出保守暫停、避難或撤退決定。
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 6: 地形評估三大層次 */}
        <div id="terrain-factors" className="mt-16 pt-12 border-t border-stone-800/80">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              實戰流程
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif mt-1">
              地形評估三層次：從行前到現場
            </h2>
            <p className="mt-2 text-stone-400 text-sm">
              完整落實「行前地圖判讀 → 行進現場觀察 → 即時動態評估」之三階段遞進評估體系。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. 地圖判讀 */}
            <div className="rounded-xl bg-stone-900/60 border border-stone-800 p-6 relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-emerald-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-mono">PHASE 1</div>
                  <h3 className="text-base font-bold text-stone-100">地圖判讀（行前預判）</h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-stone-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-2">•</span>
                  <div>
                    <strong className="text-stone-100">等高線密度：</strong>
                    密集處代表陡坡峭壁（超過40度）；重疊處代表垂直斷崖。
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-2">•</span>
                  <div>
                    <strong className="text-stone-100">地形特徵：</strong>
                    區分山脊稜線（風大暴露高）與溪谷溝槽（落石與山洪匯流區）。
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-2">•</span>
                  <div>
                    <strong className="text-stone-100">植被分布：</strong>
                    對比裸岩帶、箭竹灌木帶與林道，預先標記可能迷途與阻礙點。
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. 現場觀察 */}
            <div className="rounded-xl bg-stone-900/60 border border-stone-800 p-6 relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-sky-400">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-mono">PHASE 2</div>
                  <h3 className="text-base font-bold text-stone-100">現場觀察（行進實證）</h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-stone-300">
                <li className="flex items-start">
                  <span className="text-sky-400 font-bold mr-2">•</span>
                  <div>
                    <strong className="text-stone-100">地表狀況：</strong>
                    觀察是否有新鮮落石痕跡、路基張裂縫與水流突然混濁變色。
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 font-bold mr-2">•</span>
                  <div>
                    <strong className="text-stone-100">天候跡象：</strong>
                    觀察山谷湧起的積雨雲、風向突然翻轉與氣溫驟降。
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 font-bold mr-2">•</span>
                  <div>
                    <strong className="text-stone-100">其他登山者狀況：</strong>
                    對向山友裝備濕透程度與即時路況回報，以及隊友的疲勞步態。
                  </div>
                </li>
              </ul>
            </div>

            {/* 3. 動態評估 */}
            <div className="rounded-xl bg-stone-900/60 border border-emerald-800/40 p-6 relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-600/40 flex items-center justify-center text-emerald-400">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-mono">PHASE 3</div>
                  <h3 className="text-base font-bold text-stone-100">動態評估（持續循環）</h3>
                </div>
              </div>
              <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
                <p className="font-semibold text-emerald-300">
                  強調：地形風險不是固定不變！
                </p>
                <p>
                  同一條山徑在乾爽清晨與暴雨午後是完全不同的世界。每逢天候轉變、隊員受傷疲勞或進入隘口前，必須立即重新套用：
                </p>
                <div className="p-2 rounded bg-stone-950 border border-stone-800 text-center font-mono font-bold text-emerald-400 text-xs">
                  地形 × 天候 × 人員狀況
                </div>
                <p className="text-stone-400">
                  持續重新評估，只要變因惡化，立刻啟動保守備案。
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
