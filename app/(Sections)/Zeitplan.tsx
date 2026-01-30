'use client'
import React, { useEffect, useRef } from 'react';

 type Stage = {
   title: string;
   description: string;
 };
 



// Border path positions for smooth perimeter following
const STAGE_POSITIONS = [
  // Bottom edge (left to right)
  { x: 0.05, y: 0.95 },  // Start - bottom left corner
  { x: 0.25, y: 0.95 },  // Bottom edge - 25%
  { x: 0.5, y: 0.95 },   // Bottom edge - center
  { x: 0.75, y: 0.95 },  // Bottom edge - 75%
  { x: 0.95, y: 0.95 },  // Bottom right corner
  
  // Right edge (bottom to top)
  { x: 0.95, y: 0.75 },  // Right edge - 75%
  { x: 0.95, y: 0.5 },   // Right edge - center
  { x: 0.95, y: 0.25 },  // Right edge - 25%
  { x: 0.95, y: 0.05 },  // Top right corner
  
  // Top edge (right to left)
  { x: 0.75, y: 0.05 },  // Top edge - 75%
  { x: 0.5, y: 0.05 },   // Top edge - center
  { x: 0.25, y: 0.05 },  // Top edge - 25%
  { x: 0.05, y: 0.05 },  // Top left corner
  
  // Left edge (top to bottom)
  { x: 0.05, y: 0.25 },  // Left edge - 25%
  { x: 0.05, y: 0.5 },   // Left edge - center
  { x: 0.05, y: 0.75 },  // Left edge - 75%
];
function animateLight(progress: number, lightElement: HTMLElement, container: HTMLElement) {
  if (!lightElement || !container) return;
  
  // Calculate position along the border path (16 positions total)
  const totalPositions = STAGE_POSITIONS.length;
  const pathProgress = progress * totalPositions;
  const currentIndex = Math.floor(pathProgress) % totalPositions;
  const nextIndex = (currentIndex + 1) % totalPositions;
  const segmentProgress = pathProgress - Math.floor(pathProgress);
  
  const currentPos = STAGE_POSITIONS[currentIndex];
  const nextPos = STAGE_POSITIONS[nextIndex];
  
  // Interpolate between positions
  const x = currentPos.x + (nextPos.x - currentPos.x) * segmentProgress;
  const y = currentPos.y + (nextPos.y - currentPos.y) * segmentProgress;
  
  // Convert to pixel positions within container
  const containerRect = container.getBoundingClientRect();
  const pixelX = x * containerRect.width;
  const pixelY = y * containerRect.height;
  
  // Apply transform
  lightElement.style.transform = `translate(${pixelX - 70}px, ${pixelY - 70}px)`;
}


  
 const STAGES: Stage[] = [
   {
     title: '1.Plan',
     description:
       'Bevor wir gestalten oder entwickeln, klären wir die entscheidenden Fragen. Zielgruppe, Motive, Erwartungen und Entscheidungsbarrieren werden systematisch analysiert.',
   },
   {
     title: '2.Build',
     description:
       'Auf Basis der Erkenntnisse entstehen Struktur, UX und technische Architektur. Design und Entwicklung greifen dabei direkt ineinander, statt getrennt zu arbeiten.',
   },
   {
     title: '3.Ship',
     description:
       'Der Launch ist kein Abschluss, sondern ein kontrollierter Schritt nach vorne. Performance, Verhalten und Nutzung werden bewusst beobachtet.',
   },
   {
     title: '4.Feedback',
     description:
       'Wir sammeln nicht beliebiges Feedback, sondern relevante Signale. Nutzerverhalten, Conversion-Daten und qualitative Rückmeldungen fließen strukturiert zurück.',
   },
 ];

 export default function Zeitplan() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const light = lightRef.current;
    
    if (!section || !container || !light) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate scroll progress based on section visibility
          // Progress starts when section enters viewport and completes when it exits
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          const sectionHeight = rect.height;
          
          let progress = 0;
          
          if (sectionBottom > 0 && sectionTop < windowHeight) {
            // Section is visible - delay animation start until section is more centered
            if (sectionTop <= windowHeight * 0.7) {
              // Animation starts when section is 20% into viewport (more scroll needed)
              const animationStart = windowHeight * 0.2;
              const effectiveTop = Math.min(sectionTop, animationStart);
              // Slower progress: require 2x more scroll distance to complete animation
              progress = Math.min(1, (animationStart - effectiveTop) / (sectionHeight * 1.6));
            }
          }
          
          animateLight(progress, light, container);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial position
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   return (
    <section ref={sectionRef} className='bg-neutral-50'>
      <div className='mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 py-16 sm:py-24 lg:py-32 flex flex-col gap-12 lg:flex-col'>
        <h2 className='text-neutral-900'>Arbeitsweise</h2>
       
    <div ref={containerRef} className='bg-neutral-300 h-32 rounded-4xl p-2.5 shadow-inner relative overflow-hidden hidden lg:block '>          <div ref={lightRef} className='w-[140px] h-[140px] absolute transition-transform duration-300 ease-out' id="light">          
            
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[140px] h-[140px] bg-[#FF9900] rounded-full blur-xl'/>
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[92px] h-[92px] bg-[#FEBC2E] rounded-full blur-md'/>
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[52px] h-[52px] bg-white rounded-full blur-sm'/>
            </div>
          
        </div>
        <div className='bg-neutral-50 w-full h-full rounded-3xl overflow-hidden relative z-10'/>
      </div>

        <div className='w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {STAGES.map((s) => (
            <div key={s.title} className='flex flex-col gap-2'>
              <h3 className='text-neutral-900'>{s.title}</h3>
              <p className='text-neutral-900'>{s.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

