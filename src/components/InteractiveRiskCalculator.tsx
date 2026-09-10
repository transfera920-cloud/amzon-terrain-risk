import React, { useState } from 'react';
import { Calculator, AlertTriangle, ShieldCheck, RefreshCw, Info } from 'lucide-react';

export const InteractiveRiskCalculator: React.FC = () => {
  const [terrainScore, setTerrainScore] = useState<number>(2);
  const [weatherScore, setWeatherScore] = useState<number>(2);
  const [personnelVulnerability, setPersonnelVulnerability] = useState<number>(2);

  // Calculate composite multiplier score (range 1 to 125, or 1 to 27)
  const compositeScore = terrainScore * weatherScore * personnelVulnerability;

  // Evaluation criteria
  let riskLevel = '低風險 (可正常通過)';
  let riskColor = 'text-emerald-400';
  let badgeBg = 'bg-emerald-950 border-emerald-600/40 text-emerald-300';
  let advice = '環境條件良好，維持基本防護步伐與行進節奏即可。';

  if (compositeScore >= 27) {
    riskLevel = '極高致命風險 (嚴禁進入 / 立即撤退)';
    riskColor = 'text-rose-400';
    badgeBg = 'bg-rose-950 border-rose-600/60 text-rose-300';
    advice = '多重致命變因相互放大，容錯率歸零！強行通過極易發生重大墜落或集體傷亡，請立即採取保守選擇退避。';
  } else if (compositeScore >= 12) {
    riskLevel = '高風險 (高度警戒 / 謹慎決策)';
    riskColor = 'text-amber-400';
    badgeBg = 'bg-amber-950 border-amber-600/60 text-amber-300';
    advice = '已有兩個以上變因明顯惡化，必須停步檢核，架設確保、拉大間距，或評估等待天候好轉。';
  } else if (compositeScore >= 6) {
    riskLevel = '中等風險 (落實防護程序)';
    riskColor = 'text-yellow-400';
    badgeBg = 'bg-yellow-950 border-yellow-600/60 text-yellow-300';
    advice = '單一變因具備潛在挑戰，需保持專注，放慢腳步，維持三點不動或拉開間隔。';
  }

  const resetValues = () => {
    setTerrainScore(2);
    setWeatherScore(2);
    setPersonnelVulnerability(2);
  };

  return (
    <section id="risk-calculator" className="py-12 sm:py-16 border-b border-stone-800/80 bg-[#080c10]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5 mr-1" />
            <span>互動教學輔助工具</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
            核心公式實踐：風險相乘模擬器
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base max-w-3xl">
            透過直觀滑桿，親自體驗「風險 = 地形條件 × 天候變化 × 人員能力」之非線性連鎖倍增效應。
          </p>
        </div>

        {/* Calculator Panel */}
        <div className="rounded-2xl bg-stone-900/90 border border-stone-800 p-6 sm:p-8 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Input Controls (Left 2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Factor 1: 地形條件 */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-bold text-stone-200">1. 地形條件危險度</span>
                  <span className="font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-stone-900 border border-stone-700">
                    等級 {terrainScore} / 4
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={terrainScore}
                  onChange={(e) => setTerrainScore(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>1: 緩坡開闊土徑</span>
                  <span>2: 一般山徑樹根</span>
                  <span>3: 陡峭岩壁碎石</span>
                  <span>4: 垂直絕壁/崩壁橫渡</span>
                </div>
              </div>

              {/* Factor 2: 天候變化 */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-bold text-stone-200">2. 天候惡劣度</span>
                  <span className="font-mono text-sky-400 font-bold px-2 py-0.5 rounded bg-stone-900 border border-stone-700">
                    等級 {weatherScore} / 4
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={weatherScore}
                  onChange={(e) => setWeatherScore(parseInt(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>1: 晴朗乾燥溫和</span>
                  <span>2: 陰天微風</span>
                  <span>3: 持續降雨/強風</span>
                  <span>4: 暴雨/低溫結冰/濃霧</span>
                </div>
              </div>

              {/* Factor 3: 人員能力脆弱度 */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-bold text-stone-200">3. 人員狀態脆弱度（體能疲勞與經驗短缺）</span>
                  <span className="font-mono text-amber-400 font-bold px-2 py-0.5 rounded bg-stone-900 border border-stone-700">
                    等級 {personnelVulnerability} / 4
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={personnelVulnerability}
                  onChange={(e) => setPersonnelVulnerability(parseInt(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>1: 充足體力/技術熟練</span>
                  <span>2: 輕度疲勞/正常判斷</span>
                  <span>3: 明顯疲倦/肌肉酸痛</span>
                  <span>4: 體力透支/恐慌/失溫徵兆</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={resetValues}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded text-xs text-stone-400 hover:text-stone-200 bg-stone-800/80 border border-stone-700 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>重設為基準預設值</span>
                </button>
              </div>

            </div>

            {/* Output Result Card (Right 1 col) */}
            <div className="rounded-xl bg-stone-950/80 border border-stone-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-mono text-stone-400 font-bold mb-2">
                  綜合風險指數試算結果
                </div>

                <div className="text-center py-4 bg-stone-900/60 rounded-xl border border-stone-800/80 mb-4">
                  <div className="text-xs text-stone-400 font-mono mb-1">
                    {terrainScore} (地形) × {weatherScore} (天候) × {personnelVulnerability} (人員)
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-stone-100">
                    {compositeScore}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">相乘指數分值</div>
                </div>

                <div className="mb-4">
                  <span className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-md border block text-center ${badgeBg}`}>
                    {riskLevel}
                  </span>
                </div>

                <div className="text-xs text-stone-300 leading-relaxed bg-stone-900/40 p-3.5 rounded-lg border border-stone-800/60">
                  <span className="font-bold text-stone-200 block mb-1">現場應變建議：</span>
                  {advice}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 leading-normal flex items-start space-x-1.5">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>公式啟示：只要有一項因數暴增，相乘結果將迅速跨過危險紅線。</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
