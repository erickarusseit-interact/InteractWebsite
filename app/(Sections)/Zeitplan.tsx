import React from 'react';

 type Stage = {
   title: string;
   description: string;
 };

 const STAGES: Stage[] = [
   {
     title: 'Plan',
     description:
       'Bevor wir gestalten oder entwickeln, klären wir die entscheidenden Fragen. Zielgruppe, Motive, Erwartungen und Entscheidungsbarrieren werden systematisch analysiert.',
   },
   {
     title: 'Build',
     description:
       'Auf Basis der Erkenntnisse entstehen Struktur, UX und technische Architektur. Design und Entwicklung greifen dabei direkt ineinander, statt getrennt zu arbeiten.',
   },
   {
     title: 'Ship',
     description:
       'Der Launch ist kein Abschluss, sondern ein kontrollierter Schritt nach vorne. Performance, Verhalten und Nutzung werden bewusst beobachtet.',
   },
   {
     title: 'Feedback',
     description:
       'Wir sammeln nicht beliebiges Feedback, sondern relevante Signale. Nutzerverhalten, Conversion-Daten und qualitative Rückmeldungen fließen strukturiert zurück.',
   },
 ];

 export default function Zeitplan() {
   return (
    <section className='bg-neutral-50'>
      <div className='mx-auto max-w-[1440px] px-20 py-32 flex flex-col gap-12'>
        <h2 className='text-neutral-900'>Arbeitsweise</h2>

        <div className='bg-neutral-300 w-full h-32 rounded-4xl p-2.5 shadow-inner'>
          <div className='bg-neutral-50 w-full h-full rounded-3xl overflow-hidden' />
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

