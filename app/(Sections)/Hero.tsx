import ButtonCTA from '../(componenten)/button';
import ElectricBorder from '../(componenten)/lightning';

export default function Hero() {
    return <section className='h-fit mx-auto max-w-[1440px] bg-black text-neutral-100 sm:px-8 pt-32 pb-30 lg:px-20 flex flex-col md:flex-row md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 xl:flex-row items-center justify-between w-full gap-8 2xl:gap-0 overflow-hidden'>
    <div className='flex flex-col gap-4 items-center md:items-start w-full md:w-1/2 text-center md:text-left'>
        <div className='flex flex-col gap-2'>
 
       

        <h1 className='text-neutral-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'> Andere raten, Wir wissen</h1>
        <p className=" text-neutral-300 max-w-none lg:max-w-[90%]">
            Wir entwickeln Webapps und Websites mit Wirkung, 
            basierend auf echter Marktforschung und messerscharfer Positionierung. 
            Von der Positionierung bis zum fertigen Produkt.
          </p>
        </div>
        <ButtonCTA text="Projekt starten"/>
    </div>
    

      {/* Hero:Window.IL Main Container - Responsive  */}
      <div className='overflow-visible flex flex-col justify-center items-center lg:items-start gap-3 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[472px] min-h-[280px] sm:min-h-[320px] lg:min-h-[348px] z-10'>
        
        {/* Frame 92 - Main Window */}
        <div className='flex items-start gap-3 w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[348px] overflow-visible'>
          
          {/* Main Window Container - Responsive */}
          <div className='flex flex-col items-start gap-[10px] w-full border border-[#292524] rounded-xl overflow-visible'>
            
            {/* Window Header with Dots - Responsive */}
            <div className='flex items-center px-3 py-[10px] gap-1 w-full h-[30px] border-b border-[rgba(28,25,23,0.3)]'>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-[#FF5F57] opacity-20 border border-[#E1413A] rounded-full'></div>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-[#FEBC2E] opacity-20 border border-[#DF9C0C] rounded-full'></div>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-[#28C840] opacity-20 border border-[#0CA923] rounded-full'></div>
            </div>

            {/* Main Content Area - Responsive */}
            <div className='relative flex flex-col items-start px-4 sm:px-6 lg:px-[30px] py-4 sm:py-6 lg:py-6 gap-4 sm:gap-6 lg:gap-[30px] w-full flex-1 isolate'>
              
              {/* Inner Window with ElectricBorder - Responsive */}
              <div className='relative w-full aspect-[2.06] max-h-[140px] sm:max-h-[170px] lg:max-h-[200px]'>
            
                {/* Layer 1: Purple blur glow (z-index 1) */}
                <div 
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+25px)] h-[calc(100%+20px)] bg-[#8E51FF] border border-white rounded-[14px] z-[1]'
                  style={{
                    filter: 'blur(40px)',
                    boxShadow: '0px 0px 4px #FFFFFF'
                  }}
                />
                
                {/* Layer 2: White blur (z-index 2) */}
                <div 
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[85%] bg-white border border-white rounded-[14px] z-[2]'
                  style={{
                    filter: 'blur(6px)',
                    boxShadow: '0px 0px 4px #FFFFFF'
                  }}
                />
                
                {/* Layer 3: Light purple blur (z-index 3) */}
                <div 
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[82%] h-[70%] bg-[#EDE9FE] border border-white rounded-[14px] z-[3]'
                  style={{
                    filter: 'blur(22.5px)'
                  }}
                />

                {/* Main visible element (z-index 0) */}
                <ElectricBorder
                  className='relative w-full h-full z-[0] bg-[#F3E8FF] border border-white rounded-[14px]'
                  color="#FFFFFF"
                  speed={1}
                  chaos={0.032}
                  style={{ 
                    borderRadius: 14,
                    boxShadow: '0px 0px 4px #FFFFFF, inset 0px 0px 6px #FFFFFF'
                  }}
                >
                </ElectricBorder>
              </div>

            </div>

            {/* Bottom Tabs - Responsive */}
            <div className='flex items-start px-3 sm:px-6 lg:px-[30px] gap-2 sm:gap-3 lg:gap-3 w-full h-[32px] sm:h-[40px] lg:h-[50px]'>
              <div className='w-[200px] h-full bg-white/10 border border-[#292524] rounded-t-[4px]'></div>
              <div className='w-[200px] h-full bg-white/10 border border-[#292524] rounded-t-[4px]'></div>
            </div>

          </div>
        </div>
      </div>

    
    </section>
    
}