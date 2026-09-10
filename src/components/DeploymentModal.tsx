import React, { useState } from 'react';
import { X, Globe, Server, Check, Copy, AlertTriangle, ShieldCheck, Terminal } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-stone-900 border border-stone-700 shadow-2xl p-6 sm:p-8 text-stone-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-lg bg-stone-800/80 hover:bg-stone-700 transition-colors"
          aria-label="關閉視窗"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-100 font-serif">
              正式發佈、網址與生產環境部署說明
            </h3>
            <p className="text-xs text-stone-400">
              亞馬遜國家山岳協會｜登山教育平台正式上線標準規範
            </p>
          </div>
        </div>

        {/* Notice on Preview URL vs. Production Custom Domain */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/50 text-amber-200 text-xs mb-6 leading-relaxed">
          <div className="flex items-center space-x-1.5 font-bold mb-1">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>重要原則：Preview URL ≠ 正式生產網址 (Production URL)</span>
          </div>
          <p>
            AI Studio 預覽環境的暫存網址（如 ais-dev-... / ais-pre-...）僅作為開發預覽與驗證用途。本專案為<strong>完整獨立、無任何後端資料庫依賴的純前端生產級架構（Production-Ready）</strong>，可直接建置並部署至貴協會擁有的正式自訂網域。
          </p>
        </div>

        {/* SEO & Canonical URLs Table */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold text-stone-300 uppercase tracking-wider">
            1. 正式 SEO 與語意 URL 規劃
          </div>

          <div className="rounded-lg bg-stone-950/80 border border-stone-800 p-3 space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-stone-800/60">
              <span className="text-stone-400">正式首頁 URL：</span>
              <span className="font-mono text-emerald-300">https://amazon-mountaineering.org/</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-stone-800/60">
              <span className="text-stone-400">第五章正式語意 URL：</span>
              <span className="font-mono text-emerald-300">https://amazon-mountaineering.org/terrain-risk/</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-stone-800/60">
              <span className="text-stone-400">Canonical 規範連結：</span>
              <span className="font-mono text-stone-300">https://amazon-mountaineering.org/terrain-risk/</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-stone-800/60">
              <span className="text-stone-400">網站地圖 (Sitemap)：</span>
              <span className="font-mono text-stone-300">/sitemap.xml</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-stone-400">爬蟲指南 (Robots.txt)：</span>
              <span className="font-mono text-stone-300">/robots.txt</span>
            </div>
          </div>
        </div>

        {/* Build & Deploy Instructions */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold text-stone-300 uppercase tracking-wider">
            2. 正式建置（Production Build）指令
          </div>
          <div className="p-3 rounded-lg bg-stone-950 font-mono text-xs text-stone-200 border border-stone-800 flex items-center justify-between">
            <code>npm run build</code>
            <button
              onClick={() => copyText('npm run build', 'build')}
              className="text-stone-400 hover:text-white"
              title="複製指令"
            >
              {copiedKey === 'build' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-[11px] text-stone-400">
            建置完成後將在 <code className="text-emerald-400">/dist</code> 目錄生成完整靜態檔案，包含優化後的 HTML、CSS、JavaScript、sitemap.xml 與 robots.txt。
          </p>
        </div>

        {/* 3 Hosting Options */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-stone-300 uppercase tracking-wider">
            3. 推薦的免費/正式 Hosting 平台發佈步驟
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
              <div className="font-bold text-emerald-400 mb-1">方案 A：Google Firebase Hosting</div>
              <p className="text-stone-400 text-[11px] leading-relaxed">
                全 Google 原生生態，全球 CDN 加速，內建免費 SSL 與自訂網域綁定。
                <br />
                <code className="text-stone-300 block mt-1">firebase init hosting && firebase deploy</code>
              </p>
            </div>

            <div className="p-3 rounded-lg bg-stone-950/60 border border-stone-800">
              <div className="font-bold text-emerald-400 mb-1">方案 B：Cloudflare Pages / GitHub Pages</div>
              <p className="text-stone-400 text-[11px] leading-relaxed">
                將 GitHub 倉庫直接連結至 Cloudflare Pages 或 Vercel，設定輸出目錄為 <code className="text-stone-300">dist</code>，自動獲得永久公開 URL 與客製網域。
              </p>
            </div>
          </div>
        </div>

        {/* Close Modal Footer */}
        <div className="mt-6 pt-4 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-600 transition-colors"
          >
            我已瞭解，關閉視窗
          </button>
        </div>

      </div>
    </div>
  );
};
