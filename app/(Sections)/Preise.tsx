'use client'
import React, { useEffect, useRef } from 'react';
import CardSwap, { Card } from '../(componenten)/CardSwap'




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

export default function Preise() {

   return (
    <section className='bg-neutral-50 w-full h-fit mx-auto px-6 sm:px-12 lg:px-20 py-16 flex flex-col gap-8 items-center'>
      <div className='w-full max-w-[1440px] flex flex-col sm:flex-row gap-10'>
        <div className='w-full sm:w-[60%] min-w-0'>
            <h2 className='text-neutral-900'>Preise</h2>
            
            <div className='w-full grid gap-10 mt-6'>
              {STAGES.map((s) => (
                <div key={s.title} className='flex flex-col gap-2'>
                  <h3 className='text-neutral-900'>{s.title}</h3>
                  <p className='text-neutral-900'>{s.description}</p>
                </div>
              ))}
            </div>
        </div>

        <div className='w-full sm:w-[40%] min-w-0 h-[400px] sm:h-[500px] lg:h-[600px] relative flex items-center justify-center'>          
          <CardSwap
            cardDistance={30}
            verticalDistance={60}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3>Test</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>

        
      </div>
    </section>
  );

}
