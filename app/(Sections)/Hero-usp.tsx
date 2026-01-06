import React from 'react';

export default function HeroUsp() {
    return <section className="bg-neutral-950 px-20 py-16 pb-32 items-center space-y-12 h-fit">
    <h2 className='text-neutral-100'>Warum Interact</h2>
    <div className='flex flex-col md:flex-row w-full gap-10 items-start'>

        <div className="flex-1 flex flex-row gap-4 min-w-0 items-center">
            <div className='size-16 shrink-0 bg-neutral-500 rounded-xl'></div>
            <p className='text-neutral-300 min-w-0'>
              <span className='text-neutral-50'>Wir fangen dort an wo andere aufhören.</span>{' '}
              bei der entscheidenden Frage: Was will eure Zielgruppe wirklich – und warum? (Motive, Erwartungen, Entscheidungsbarrieren) 
            </p>
        </div>

        <div className="flex-1 flex flex-row gap-4 items-center min-w-0">
            <div className='size-16 shrink-0 bg-neutral-500 rounded-xl'></div>
            <p className='text-neutral-300 min-w-0'>
              <span className='text-neutral-50'>Klare Maßnahmen auf Fakten und Wissenschaft nicht Bauchgefühl.</span>{' '}
             Unser Design folgt Daten, nicht Trends oder dem hübschen aussehen, mit dem Ziel Ergebnisse zu liefern.
            </p>
        </div>

        <div className="flex-1 flex flex-row gap-4 items-center min-w-0">
            <div className='size-16 shrink-0 bg-neutral-500 rounded-xl'></div>
            <p className='text-neutral-300 min-w-0'>
              <span className='text-neutral-50'>Planung die kosteneffizient arbeitet</span>{' '}
              Unsere Produkte sind effizient gebaut, flexibel erweiterbar und automatisieren das, was Zeit und Ressourcen frisst.
            </p>
        </div>

     </div>
    
</section>
    
}