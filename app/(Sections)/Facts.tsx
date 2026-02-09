'use client';

import Counter from '../(componenten)/Counter';
import ButtonCTA from "@/app/(componenten)/button";

export default function Facts() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          
          {/* Left Column - Headline and CTA */}
          <div className="flex-1 flex flex-col justify-between items-start min-h-[300px] lg:min-h-[504px]">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold leading-[115%] tracking-[-0.03em] text-white max-w-[567px]">
              Wir sind die, zu denen du kommst, wenn alles sitzen muss.
            </h2>
            <ButtonCTA />
          </div>

          {/* Right Column - Stats */}
          <div className="flex-1 border-t lg:border-t-0 lg:border-l border-[#404040] pt-8 lg:pt-0 lg:pl-6">
            
            {/* Stat 1 */}
            <div className="py-6 border-b border-[#404040]">
              <div className="flex items-baseline gap-1">
                <span style={{ fontSize: 64, fontWeight: 600, color: '#44403B', lineHeight: 1.15 }}>+</span>
                <Counter
                  value={400}
                  fontSize={64}
                  fontWeight={600}
                  gradientFrom="#C4B4FF"
                  gradientTo="#7F22FE"
                />
                <span className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[115%] bg-gradient-to-b from-[#C4B4FF] to-[#7F22FE] bg-clip-text text-transparent">%</span>
              </div>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white leading-[115%] tracking-[-0.03em] mt-2">Conversion Rate</h3>
              <p className="text-[13px] sm:text-[14px] text-white/80 leading-[125%] tracking-[-0.02em] mt-1">
                  erreichen wir durch psychologisch fundiertes UX-Design, das Ihre Besucher messbar zu Kunden macht.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="py-6 border-b border-[#404040]">
              <div className="flex items-baseline gap-1">
                <span style={{ fontSize: 64, fontWeight: 600, color: '#44403B', lineHeight: 1.15 }}>+</span>
                <Counter
                  value={75}
                  fontSize={64}
                  fontWeight={600}
                  gradientFrom="#FFB86A"
                  gradientTo="#FF6900"
                />
                <span className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[115%] bg-gradient-to-b from-[#FFB86A] to-[#FF6900] bg-clip-text text-transparent">%</span>
              </div>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white leading-[115%] tracking-[-0.03em] mt-2">Glaubwürdigkeit</h3>
              <p className="text-[13px] sm:text-[14px] text-white/80 leading-[125%] tracking-[-0.02em] mt-1">
                  sichern wir durch ein High-End-Design, das Ihre Expertise für Kunden in Millisekunden spürbar macht.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="py-6">
              <div className="flex items-baseline gap-1">
                <span style={{ fontSize: 64, fontWeight: 600, color: '#44403B', lineHeight: 1.15 }}>+</span>
                <Counter
                  value={23}
                  fontSize={64}
                  fontWeight={600}
                  gradientFrom="#8EC5FF"
                  gradientTo="#155DFC"
                />
                <span className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[115%] bg-gradient-to-b from-[#8EC5FF] to-[#155DFC] bg-clip-text text-transparent">%</span>
              </div>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-white leading-[115%] tracking-[-0.03em] mt-2">Umsatz</h3>
              <p className="text-[13px] sm:text-[14px] text-white/80 leading-[125%] tracking-[-0.02em] mt-1">
                  generieren wir durch eine glasklare Positionierung, die Ihre Marke zur automatisierten Wachstumsmaschine macht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}