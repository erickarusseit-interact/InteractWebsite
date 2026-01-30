import React from 'react';

export default function HeroUsp() {
    return <section className="bg-black px-4 pt-4 sm:px-8 lg:px-20 pb-16 md:pb-24 lg:pb-32  pt-12 space-y-8 md: space-y-12 h-fit relative overflow-hidden max-w-[1440px] mx-auto">
        {/* Main heading */}
        <div className="space-y-2 text-left md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100">Warum Interact</h2>
        </div>

        {/* Horizontal layout with glow effects */}
        <div className=" my-auto h-fit flex flex-col lg:flex-row w-full gap-6 md:gap-12 lg:gap-10 items-center lg:items-start">
            
            {/* First section - Purple glow */}
            <div className="flex-1 flex flex-row gap-4 min-w-0 items-start relative">
                {/* Icon with glow */}
                <div className="relative shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                    <div className="absolute inset-0 bg-purple-500/60 rounded-full blur-lg"></div>
                    <img className='relative w-10 h-10 sm:w-12 sm:h-12' src="images/IconsUSP/Icon 1.svg" alt="User Fokus" />
                </div>
                <p className='text-sm sm:text-base text-neutral-200 min-w-0 sm:text-left'>
                  <span className='text-neutral-50'>Wir fangen dort an wo andere aufhören.</span>{' '}
                  bei der entscheidenden Frage: Was will eure Zielgruppe wirklich – und warum? (Motive, Erwartungen, Entscheidungsbarrieren) 
                </p>
            </div>

            {/* Second section - Blue glow */}
            <div className="flex-1 flex flex-row gap-4 min-w-0 items-start relative">
                {/* Icon with glow */}
                <div className="relative shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                    <div className="absolute inset-0 bg-blue-500/60 rounded-full blur-lg"></div>
                    <img className='relative w-10 h-10 sm:w-12 sm:h-12' src="images/IconsUSP/Icon 2.svg" alt="Wissenschaft" />
                </div>
                
                <p className='text-sm sm:text-base text-neutral-200 min-w-0 text-left'>
                  <span className='text-neutral-50'>Klare Maßnahmen auf Fakten und Wissenschaft nicht Bauchgefühl.</span>{' '}
                 Unser Design folgt Daten, nicht Trends oder dem hübschen aussehen, mit dem Ziel Ergebnisse zu liefern.
                </p>
            </div>

            {/* Third section - Yellow glow */}
            <div className="flex-1 flex flex-row gap-4 min-w-0 items-start relative">
                {/* Icon with glow */}
                <div className="relative shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                    <div className="absolute inset-0 bg-yellow-500/60 rounded-full blur-lg"></div>
                    <img className='relative w-10 h-10 sm:w-12 sm:h-12' src="images/IconsUSP/Icon 3.svg" alt="Effizienz" />
                </div>
                
                <p className='text-sm sm:text-base text-neutral-200 min-w-0 text-left'>
                  <span className='text-neutral-50'>Planung die kosteneffizient arbeitet</span>{' '}
                  Unsere Produkte sind effizient gebaut, flexibel erweiterbar und automatisieren das, was Zeit und Ressourcen frisst.
                </p>
            </div>

         </div>
        
    </section>
    
}