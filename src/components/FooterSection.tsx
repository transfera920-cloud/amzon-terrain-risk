import React from 'react';
import { Compass } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="border-t border-stone-800 bg-[#06090d] text-stone-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
        <div className="flex items-center space-x-2.5 text-stone-100 font-bold text-base">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-600/40 flex items-center justify-center text-emerald-400">
            <Compass className="w-5 h-5" />
          </div>
          <a href="https://amazon-hike.com/intro" className="hover:text-emerald-400 transition-colors">
            亞馬遜國家山岳協會
          </a>
        </div>
      </div>
    </footer>
  );
};
