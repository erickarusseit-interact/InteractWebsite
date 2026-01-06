import React from 'react';
import MagicBento from '../(componenten)/BentoBits';

export default function LeistungenBento() {
    return (
        <section className='bg-neutral-50 text-neutral-900 px-20 py-16 pt-32'>
            {/* Header */}
            <h2 className='text-neutral-900 pb-2'>Leistungen</h2>
            <p className='text-neutral-600 max-w-4xl pb-12'>
                Das Ziel jeder Website ist es, Ihre Kunden zu überzeugen und zu motivieren. Um dies zu gewährleisten, 
                ist es essenziell, zu verstehen und zu messen, was Ihren Kunden wichtig ist. Unsere System stellt sicher 
                das die Ansprüche Ihrer Website klar ermittelt und umgesetzt werden.
            </p>

            {/* Grid Layout - 2 columns */}
            <div className='grid grid-cols-10 gap-6 h-[960px]'>
                
                {/* Card 1 - Positionierung und Marktforschung */}
                <div className='bg-neutral-950 text-neutral-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden  h-full col-span-6'>
                    <p>
                        <span className='text-neutral-50 font-medium'>Positionierung und Marktforschung, </span>
                        <span className='text-neutral-400'>Wir schaffen Klarheit darüber, was Ihr wirklich verkauft, wen und warum es überzeugt.</span>
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                        {/* <img src="/your-image.svg" alt="" className="w-full h-full object-contain" /> */}
                    </div>
                    <div className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400 relative z-10'>
                        <span>• Marktforschung & Nutzeranalyse</span>
                        <span>• Psychologische Motiv- & Entscheidungsanalyse</span>
                        <span>• Positionierung & Messaging</span>
                    </div>
                </div>

                {/* Card 2 - UX & Produktdesign */}
                <div className='bg-neutral-950 text-neutral-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden h-full col-span-4'>
                    <p>
                        <span className='text-neutral-50 font-medium'>UX & Produktdesign, </span>
                        <span className='text-neutral-400'>Wir übersetzen Erkenntnis in markante Strukturen, klare Abläufe und intuitive Interfaces.</span>
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                        {/* <img src="/your-image.svg" alt="" className="w-full h-full object-contain" /> */}
                    </div>
                    <div className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400 relative z-10'>
                        <span>• UX-Konzepte</span>
                        <span>• Prototypen & Tests</span>
                        <span>• Conversion- und Onboarding</span>
                    </div>
                </div>

                {/* Card 3 - Automatisierung & Skalierung */}
                <div className='bg-neutral-950 text-neutral-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden col-span-4'>
                    <p>
                        <span className='text-neutral-50 font-medium'>Automatisierung & Skalierung, </span>
                        <span className='text-neutral-400'>Wir automatisieren Prozesse und schaffen Strukturen, die Wachstum ermöglichen, statt es zu bremsen.</span>
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                        {/* <img src="/your-image.svg" alt="" className="w-full h-full object-contain" /> */}
                    </div>
                    <div className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400 relative z-10'>
                        <span>• User Flows & Informationsarchitektur</span>
                        <span>• Monitoring & Optimierung</span>
                    </div>
                </div>

                {/* Card 4 - Entwicklung */}
                <div className='bg-neutral-950 text-neutral-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden col-span-6'>
                    <p>
                        <span className='text-neutral-50 font-medium'>Entwicklung, </span>
                        <span className='text-neutral-400'>Wir entwickeln saubere, Skalierbare Systeme, die sich flexibel anpassen lassen. So bleibt euer Produkt stabil, während es wächst.</span>
                    </p>
                    {/* Image placeholder - absolute so it doesn't affect layout */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                        {/* <img src="/your-image.svg" alt="" className="w-full h-full object-contain" /> */}
                    </div>
                    <div className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400 relative z-10'>
                        <span>• Web- & Web-App-Entwicklung</span>
                        <span>• Frontend & Backend</span>
                        <span>• API- & System-Integrationen</span>
                        <span>• Architektur & Infrastruktur</span>
                    </div>
                </div>

            </div>

            

    <MagicBento
        
        enableStars={false}
         enableTilt
         enableMagnetism />
     </section>
    );
}