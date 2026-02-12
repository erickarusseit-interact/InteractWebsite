import ButtonCTA from '../(componenten)/button';
import ElectricBorder from '../(componenten)/lightning';

export default function Hero() {
    return <section className=' h-fit mx-auto max-w-[1440px] bg-black text-neutral-100 sm:px-8 pt-32 pb-30 lg:px-20 flex flex-col md:flex-row md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 xl:flex-row items-center justify-between w-full gap-24 2xl:gap-0 overflow-visible'>
    <div className='flex flex-col gap-4 items-center md:items-start w-full md:w-1/2 text-center md:text-left overflow-visible  '>
        <div className='flex flex-col gap-2'>
        <h1 className='text-neutral-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl w-fit '> Andere raten, Wir wissen</h1>
        <p className=" text-neutral-300 max-w-none lg:max-w-[85%] ">
            Wir entwickeln Webapps und Websites mit Wirkung, 
            basierend auf echter Marktforschung und messerscharfer Positionierung. 
            Von der Positionierung bis zum fertigen Produkt.
          </p>
        </div>
        <ButtonCTA text="Projekt starten"/>
    </div>

        {/* Hero:Window.IL */}
        <div className='flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-0 md:w-1/2 gap-3 sm:gap-4 h-fit overflow-visible'>
          {/* Main Window Container */}
          <div className='flex flex-col items-start w-full max-w-[500px] md:max-w-none border border-[#292524] rounded-md overflow-visible'>
            
            {/* Window Header with Dots - Responsive */}
            <div className='flex items-center px-2 sm:px-3 py-2 gap-1 w-full h-6 sm:h-[30px] border-b border-[rgba(28,25,23,0.3)] overflow-visible'>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-[#FF5F57] opacity-20 border border-[#E1413A] rounded-full'></div>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-[#FEBC2E] opacity-20 border border-[#DF9C0C] rounded-full'></div>
              <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] bg-[#28C840] opacity-20 border border-[#0CA923] rounded-full'></div>
            </div>

            {/* Main Content Area - Responsive */}
            <div className='relative flex flex-col items-center p-3 sm:p-4 md:p-5 lg:p-6 w-full flex-1 overflow-visible box-border'>

                {/* Visuals Container */}
                <div className='flex flex-col justify-center items-center gap-3 w-full max-w-full overflow-visible'>
              {/* Inner Window with ElectricBorder and Glow effect - Responsive */}
              <div className='relative w-full aspect-[2/1] min-h-[100px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] overflow-visible'>

                  {/* Layer 1: Purple blur glow */}
                  <div
                      className='absolute left-1/2 top-1/2 w-[calc(100%+25px)] h-[calc(100%+20px)] bg-purple-500/50 rounded-[14px] z-[1]'
                      style={{
                          filter: 'blur(80px)',
                          boxShadow: '0px 0px 4px #FFFFFF',
                          // FIX FÜR SAFARI:
                          WebkitBackfaceVisibility: 'hidden',
                          perspective: 1000,
                          transform: 'translate3d(-50%, -50%, 0)', // Erzwingt GPU-Rendering
                          willChange: 'filter'
                      }}
                  />

                  {/* Layer 2: White blur */}
                  <div
                      className='absolute left-1/2 top-1/2 w-full h-full bg-purple-300 rounded-[14px] z-[2]'
                      style={{
                          filter: 'blur(20px)',
                          boxShadow: '0px 0px 4px #FFFFFF',
                          // FIX FÜR SAFARI:
                          WebkitBackfaceVisibility: 'hidden',
                          perspective: 1000,
                          transform: 'translate3d(-50%, -50%, 0)',
                          willChange: 'filter'
                      }}
                  />

                {/* Layer 3: Light purple blur (z-index 3) */}
                <div
                  className='absolute left-1/2 top-1/2 w-[92%] h-[85%] bg-purple-50/100 rounded-[24px] z-[3]'
                  style={{
                    filter: 'blur(10px)',
                    // FIX FÜR SAFARI:
                    WebkitBackfaceVisibility: 'hidden',
                    perspective: 1000,
                    transform: 'translate3d(-50%, -50%, 0)',
                    willChange: 'filter'
                  }}
                />

                  <div
                      className='absolute left-1/2 top-1/2 w-[80%] h-[58%] bg-purple-200/80  rounded-[14px] z-[3]'
                      style={{
                          filter: 'blur(15px)',
                          // FIX FÜR SAFARI:
                          WebkitBackfaceVisibility: 'hidden',
                          perspective: 1000,
                          transform: 'translate3d(-50%, -50%, 0)',
                          willChange: 'filter'
                      }}
                  />

                  {/* Main visible element (z-index 0) */}
                  <div style={{
                      borderRadius: 24,
                      boxShadow:  '0px 0px 4px #FFFFFF, inset 0px 0px 6px #FFFFFF',
                      width: '98%',
                      height: '98%',

                      top: '1%',
                      left: '1%'
                  }}>
                  <ElectricBorder
                      className='relative w-full h-full z-[00]'
                      color="#FFFFFF"
                      speed={1}
                      chaos={0.02}

                  >
                  </ElectricBorder>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
}