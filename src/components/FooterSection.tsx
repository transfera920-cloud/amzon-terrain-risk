import React from 'react';
import { Compass, Shield, FileText, ArrowUp, ExternalLink, Database } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-800 bg-[#06090d] text-stone-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800/80">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5 text-stone-100 font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-600/40 flex items-center justify-center text-emerald-400">
                <Compass className="w-5 h-5" />
              </div>
              <a href="https://amazon-hike.com/intro" className="hover:text-emerald-400 transition-colors">亞馬遜國家山岳協會</a>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-md">
              登山安全與登山教育知識平台。致力於推動科學化、系統化的山域風險教育，普及地圖判讀、動態環境評估與安全決策理念。
            </p>
            <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800 text-[11px] text-stone-400 space-y-1">
              <div className="font-semibold text-emerald-400 flex items-center">
                <Database className="w-3.5 h-3.5 mr-1.5" />
                <span>資料自主性宣言：</span>
              </div>
              <div>
                本教育網站所有教案皆為標準開放架構，不依賴 Manus 或任何私有封閉雲庫。原始教案資料結構獨立完整，隨時支援靜態匯出與跨平台遷移發佈。
              </div>
            </div>
          </div>

          {/* Col 2: Chapter Navigation */}
          <div className="space-y-2">
            <div className="font-bold text-stone-200 uppercase tracking-wider text-[11px]">
              本章快速導覽
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#core-concept" className="hover:text-emerald-400 transition-colors">核心概念與公式</a></li>
              <li><a href="#terrain-factors" className="hover:text-emerald-400 transition-colors">地形評估三層次</a></li>
              <li><a href="#ten-units" className="hover:text-emerald-400 transition-colors">十個教學單元</a></li>
              <li><a href="#six-terrains" className="hover:text-emerald-400 transition-colors">六種地形類型</a></li>
              <li><a href="#five-cases" className="hover:text-emerald-400 transition-colors">五個實際案例</a></li>
              <li><a href="#decision-framework" className="hover:text-emerald-400 transition-colors">系統化決策框架</a></li>
              <li><a href="#chapter-summary" className="hover:text-emerald-400 transition-colors">章節總結與核心</a></li>
            </ul>
          </div>

          {/* Col 3: SEO & Official Technical Declarations */}
          <div className="space-y-2">
            <div className="font-bold text-stone-200 uppercase tracking-wider text-[11px]">
              正式網站與 SEO 宣告
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="hover:text-stone-200 flex items-center">
                  <FileText className="w-3 h-3 mr-1" />
                  <span>sitemap.xml (網站地圖)</span>
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noreferrer" className="hover:text-stone-200 flex items-center">
                  <FileText className="w-3 h-3 mr-1" />
                  <span>robots.txt (爬蟲規範)</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-stone-500">
                語意規格：HTML5 / Schema.org
              </li>
              <li className="text-[11px] text-stone-500">
                網頁語系：zh-TW
              </li>
              <li className="text-[11px] text-stone-500">
                整頁單一 H1 語意架構
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
          <div>
            © {new Date().getFullYear()} 亞馬遜國家山岳協會 (Amazon Mountaineering Association). 保留所有權利。
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-stone-400">登山安全教育專題｜第五章：地形風險</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-stone-400 hover:text-emerald-400 transition-colors"
            >
              <span>回到頂端</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
