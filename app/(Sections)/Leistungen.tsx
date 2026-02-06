import React from 'react';
export default function LeistungenBento() {
    return (
        <section className='bg-neutral-50 text-neutral-900 '>
         <div className='mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 pb-12 pt-32 sm:pb-14 sm:pt-32 lg:pb-16 lg:pt-32 flex flex-col '>
            <h2 className='text-neutral-900 pb-2 text-2xl sm:text-3xl md:text-4xl'>Leistungen</h2>
            <p className='text-neutral-600 pb-8 sm:pb-10 md:pb-12 text-sm sm:text-base max-w-3xl'>
                Das Ziel jeder Website ist es, Ihre Kunden zu überzeugen und zu motivieren. Um dies zu gewährleisten, 
                ist es essenziell, zu verstehen und zu messen, was Ihren Kunden wichtig ist. Unser System stellt sicher, 
                dass die Ansprüche Ihrer Website klar ermittelt und umgesetzt werden.
            </p>

            {/* Grid Layout Bento Layout - Responsive */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 sm:gap-6 auto-rows-fr lg:h-[960px]'>
                
                {/* Card 1 - Positionierung und Marktforschung */}
                <div className='bg-black text-neutral-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden h-[400px] sm:h-[360px] md:h-[400px] lg:h-full col-span-1 md:col-span-2 lg:col-span-6'>
                    <p className='text-neutral-400 text-sm sm:text-base mb-4 z-20'>
                        <span className='text-neutral-50 font-medium'>Positionierung und Marktforschung, </span>
                        Wir schaffen Klarheit darüber, was Ihr wirklich verkauft, wen und warum es überzeugt
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none bg-[url(/images/texture.lines.6px.svg)50]  overflow-hidden'>
                         <img src="/images/Marktforschung.IL.png" alt="Marktforschung.IL" className="object-contain scale-150 " /> 
                    </div>
                    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-neutral-400 relative z-10'>
                        <p>• Marktforschung & Nutzeranalyse</p>
                        <p>• Psychologische Motiv- & Entscheidungsanalyse</p>
                        <p>• Positionierung & Messaging</p>
                    </div>
                </div>

                {/* Card 2 - UX & Produktdesign */}
                <div className='bg-neutral-950 text-neutral-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden h-[400px] sm:h-[360px] md:h-[400px] lg:h-full col-span-1 md:col-span-1 lg:col-span-4'>
                    <p className='text-neutral-400 text-sm sm:text-base mb-4 z-20'>
                        <span className='text-neutral-50 font-medium'>UX & Produktdesign, </span>
                        Wir übersetzen Erkenntnis in markante Strukturen, klare Abläufe und intuitive Interfaces.
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 pointer-events-none'>
                                                 <img src="/images/UX.IL.png" alt="UX.IL" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain h-full scale-175" />
                    </div>
                    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-neutral-400 relative z-10'>
                        <p>• UX-Konzepte</p>
                        <p>• Prototypen & Tests</p>
                        <p>• Conversion- und Onboarding</p>
                    </div>
                </div>

                {/* Card 3 - Automatisierung & Skalierung */}
                <div className='bg-neutral-950 text-neutral-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden h-[400px] sm:h-[360px] md:h-[400px] lg:h-full col-span-1 md:col-span-1 lg:col-span-4'>
                    <p className='text-neutral-400 text-sm sm:text-base mb-4 z-20'>
                        <span className='text-neutral-50 font-medium'>Automatisierung & Skalierung, </span>
                        Wir automatisieren Prozesse und schaffen Strukturen, die Wachstum ermöglichen, statt es zu bremsen.
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                        <img src="/images/Automation.IL.png" alt="Automatisierung.IL" className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain h-full scale-175 " />
                    </div>
                    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-neutral-400 relative z-10'>
                        <p>• User Flows & Informationsarchitektur</p>
                        <p>• Monitoring & Optimierung</p>
                    </div>
                </div>

                {/* Card 4 - Entwicklung */}
                <div className='bg-black text-neutral-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden h-[400px] sm:h-[360px] md:h-[400px] lg:h-full col-span-1 md:col-span-2 lg:col-span-6'>
                    <p className='text-neutral-400 text-sm sm:text-base mb-4 z-20'>
                        <span className='text-neutral-50 font-medium'>Entwicklung, </span>
                        Wir entwickeln saubere, skalierbare Systeme, die sich flexibel anpassen lassen. So bleibt euer Produkt stabil, während es wächst.
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                        <img src="/images/Webdev.IL.png" alt="Webdev.IL" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain h-full scale-155" />
                    </div>
                    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-neutral-400 relative z-10'>
                        <p>• Web- & Web-App-Entwicklung</p>
                        <p>• Frontend & Backend</p>
                        <p>• API- & System-Integrationen</p>
                        <p>• Architektur & Infrastruktur</p>
                    </div>
                </div>

            </div>

      
     </div>
     </section>
    );
}