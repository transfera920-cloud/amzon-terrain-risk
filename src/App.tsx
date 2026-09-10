/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroChapterHeader } from './components/HeroChapterHeader';
import { CoreConceptSection } from './components/CoreConceptSection';
import { TeachingUnitsSection } from './components/TeachingUnitsSection';
import { SixTerrainTypesSection } from './components/SixTerrainTypesSection';
import { FiveCasesSection } from './components/FiveCasesSection';
import { DecisionFrameworkSection } from './components/DecisionFrameworkSection';
import { InteractiveRiskCalculator } from './components/InteractiveRiskCalculator';
import { ChapterSummarySection } from './components/ChapterSummarySection';
import { FooterSection } from './components/FooterSection';
import { DeploymentModal } from './components/DeploymentModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);

  // Sync route URL if visiting directly or via links
  useEffect(() => {
    // If on /terrain-risk/ or /chapter-5-terrain-risk/, ensure page canonical state is maintained
    const path = window.location.pathname;
    if (path === '/' || path === '/terrain-risk/' || path === '/chapter-5-terrain-risk/') {
      // Valid routes for this standalone educational publication
    }
  }, []);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg';
      case 'xlarge':
        return 'text-lg sm:text-xl';
      default:
        return 'text-sm sm:text-base';
    }
  };

  return (
    <div className="min-h-screen bg-[#090d12] text-stone-100 flex flex-col selection:bg-emerald-900 selection:text-emerald-100">
      
      {/* Semantic Top Header and Navigation */}
      <HeaderNav
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenDeployGuide={() => setDeployGuideOpen(true)}
      />

      {/* Semantic Main Educational Article Body */}
      <main className="flex-1 w-full" id="main-content" role="main">
        <article>
          {/* Chapter Main Header with the Single H1 */}
          <HeroChapterHeader />

          {/* Core Concept and 3-Tier Terrain Assessment */}
          <CoreConceptSection />

          {/* Ten Complete Teaching Units */}
          <TeachingUnitsSection 
            fontSizeClass={getFontSizeClass()} 
            searchQuery={searchQuery} 
          />

          {/* Interactive Formula Practice Calculator */}
          <InteractiveRiskCalculator />

          {/* Six High-Risk Terrain Types Visual Guide */}
          <SixTerrainTypesSection />

          {/* Five Real Mountaineering Incident Case Studies */}
          <FiveCasesSection />

          {/* Systematic Decision Framework (O-A-D-A) */}
          <DecisionFrameworkSection />

          {/* Chapter Summary & Core Safety Mandates */}
          <ChapterSummarySection />
        </article>
      </main>

      {/* Semantic Footer with Full Technical & Organization Metadata */}
      <FooterSection onOpenDeployGuide={() => setDeployGuideOpen(true)} />

      {/* Deployment & Production URL Details Modal */}
      <DeploymentModal
        isOpen={deployGuideOpen}
        onClose={() => setDeployGuideOpen(false)}
      />

    </div>
  );
}
