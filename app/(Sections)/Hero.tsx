'use client'
import React, { useState, useEffect, useRef } from 'react';
import ButtonCTA from '../(componenten)/button';
import ElectricBorder from '../(componenten)/lightning';
export default function Hero() {
  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

 function applyDimensions(sourceEl: HTMLElement, targetEl: HTMLElement) {
  const rect = sourceEl.getBoundingClientRect();
  targetEl.style.width = `${rect.width}px`;
  targetEl.style.height = `${rect.height}px`;
  targetEl.style.position = 'fixed';
  targetEl.style.left = `${rect.left}px`;
  targetEl.style.top = `${rect.top}px`;
  targetEl.style.pointerEvents = 'none';  // Add this line
}

useEffect(() => {

  const updateDimensions = () => {
    if (sourceRef.current && targetRef.current) {
      applyDimensions(sourceRef.current, targetRef.current);
    }
  };

  // Initial call
  updateDimensions();

  window.addEventListener('resize', updateDimensions);
  window.addEventListener('scroll', updateDimensions); // Add this

  return () => {
    window.removeEventListener('resize', updateDimensions);
    window.removeEventListener('scroll', updateDimensions); // Add this
  };
}, []);

{/* Animation Callback Blur Text */}
const handleAnimationComplete = () => {
            console.log('Animation completed!');
          };

    return <section className= ' h-fit mx-auto max-w-[1440px] bg-black text-neutral-100  sm:px-8 pt-32 pb-30 lg:px-20 flex flex-col md:flex-row md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 xl:flex-row items-center justify-between w-full gap-8 2xl:gap-0 overflow-hidden'>
    <div className='flex flex-col gap-4 sm:gap-4 items-center md:items-start w-full md:w-1/2 text-center md:text-left'>
        <div className='flex flex-col gap-2 sm:gap-2'>
 
       

        <h1 className='text-neutral-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'> Andere raten, Wir wissen</h1>
        <p className=" text-neutral-300 max-w-none lg:max-w-[90%]">
            Wir entwickeln Webapps und Websites mit Wirkung, 
            basierend auf echter Marktforschung und messerscharfer Positionierung. 
            Von der Positionierung bis zum fertigen Produkt.
          </p>
        </div>
        <ButtonCTA text="Projekt starten"/>
    </div>
    <div className=' position-relative overflow-visible pointer-events-none'>
      
      {/* Background Glow Effects - Perfectly Aligned */}
      <div className='absolute inset-0 z-0 opacity-80
      p-3 top-72 left- right-0 bottom-0 overflow-visible pointer-events-none'>
        {/* Main blur background - matches window container exactly */}
        <div ref={targetRef} className='position-absolute overflow-visible'>
        <div 
          className='absolute inset-0 opacity-70 bg-purple-300/50 mx-0 my-0 '
          style={{
            filter: 'blur(clamp(15px, 5vw, 30px))'
          }}
        />
        {/* Purple glow - centered on window */}
        <div 
          className='absolute inset-0 bg-purple-300 m-6'
          style={{
            filter: 'blur(clamp(20px, 8vw, 60px))'
          }}
        />

          
        {/* Light purple glow 2 - innermost glow */}
        <div 
          className='absolute inset-0 bg-purple-300 mx-0 my-0'
          style={{
            filter: 'blur(clamp(6px, 1.2vw, 12px))'
          }}
        />
      
              {/* Light purple glow 2 - innermost glow */}
        <div 
          className='absolute inset-0 bg-purple-200/10 -m-20'
          style={{
            filter: 'blur(clamp(40px, 10vw, 60px))'
          }}
        />

     
        </div>
      </div>
    </div>
    

      {/* Hero:Window.IL Main Container - Responsive  */}
      <div className='flex flex-col justify-center items-center lg:items-start gap-3 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[472px] h-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[348px] z-10 mix-blend-overlay'> 
        
        {/* Frame 92 - Main Window */}
        <div className='flex flex-row items-start gap-3 w-full h-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[348px]'>
          
          {/* Main Window Container - Responsive */}
          <div className='flex flex-col items-start gap-2 w-full bg-gray-900 border border-white/40 rounded-xl overflow-visible'>
            
            {/* Window Header with Dots - Responsive */}
            <div className='flex flex-row items-center px-3 py-2 gap-1 w-full h-[30px] border-b border-gray-300/30'>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-red-500 border border-red-600 rounded-full'></div>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-yellow-500 border border-yellow-600 rounded-full'></div>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-green-500 border border-green-600 rounded-full'></div>
            </div>

            {/* Main Content Area - Responsive */}
            <div className='relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-[30px] py-2 sm:py-6 gap-4 sm:gap-6 lg:gap-[30px] w-full flex-1'>
              
              {/* Inner Window with ElectricBorder - Responsive */}
              <div ref={sourceRef} className='relative w-full h-auto'>
            
                {/* Glow Effects - Matching ElectricBorder Container */}
                <div className='absolute inset-0 z-0 opacity-80 sm:opacity-100 '>
                  {/* Main blur background */}
                  <div 
                    className='absolute inset-0 opacity-70 bg-purple-300/90'
                    style={{
                      filter: 'blur(clamp(10px, 5vw, 20px))'
                    }}
                  />
                  {/* Purple glow */}
                  <div 
                    className='absolute inset-0 bg-purple-600 '
                    style={{
                      filter: 'blur(clamp(14px, 5vw, 24px))'
                    }}
                  />
                  {/* Light purple glow 1 */}
                  <div 
                    className='absolute inset-0 bg-purple-200 m-4'
                    style={{
                      filter: 'blur(clamp(12px, 10vw, 10px))'
                    }}
                  />
                
                </div>
                <ElectricBorder
                  className='relative w-full aspect-[2.06] max-h-[140px] sm:max-h-[170px] lg:max-h-[200px] z-10 bg-neutral-50/20'
                  color="#FFFFFF"
                  speed={1}
                  chaos={0.032}
                  style={{ borderRadius: 24 }}
                >
                  
            
                </ElectricBorder>
              </div>

            </div>

            {/* Bottom Tabs - Responsive */}
            <div className='flex flex-row items-start px-3 sm:px-6 lg:px-[30px] gap-2 sm:gap-3 w-full h-[32px] sm:h-[40px] lg:h-[50px]'>
              <div className='flex-1 max-w-[200px] h-full bg-white/10 border border-white border-b-0 rounded-t-[4px]'></div>
              <div className='flex-1 max-w-[200px] h-full bg-white/10 border border-white border-b-0 rounded-t-[4px]'></div>
            </div>

          </div>
        </div>
      </div>

    
    </section>
    
}