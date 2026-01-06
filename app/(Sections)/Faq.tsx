
 'use client';

 import React, { useMemo, useState } from 'react';

 type FaqItem = {
   question: string;
   answer: string;
 };

 function Chevron({ open }: { open: boolean }) {
   return (
     <svg
       width='32'
       height='32'
       viewBox='0 0 32 32'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
       className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
       aria-hidden='true'
     >
       <path
         d='M10 13L16 19L22 13'
         stroke={open ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.4)'}
         strokeWidth='2.5'
         strokeLinecap='round'
         strokeLinejoin='round'
       />
     </svg>
   );
 }

 export default function Faq() {
   const items: FaqItem[] = useMemo(
     () => [
       {
         question: 'Kann ich meine Website später eigenständig aktualisieren?',
         answer:
           'Ja. Wir bauen eure Website so, dass Inhalte und Seiten später leicht anpassbar sind. Auf Wunsch bekommt ihr eine kurze Einweisung und klare Übergabe.',
       },
       {
         question: 'Wie handhaben wir die Wartung und Updates nach dem Launch ?',
         answer:
           'Nach dem Launch bieten wir verschiedene Wartungs- und Updateoptionen an, sodass ihr immer auf dem neuesten Stand bleibt.',
       },
       {
         question: 'Wie wird die Kommunikation während des Projektes gehandhabt?',
         answer:
           'Wir arbeiten mit klaren Checkpoints, kurzen Feedbackschleifen und einem festen Ansprechpartner. Ihr wisst jederzeit, was der nächste Schritt ist.',
       },
       {
         question: 'Wie lange dauert ein typisches Projekt?',
         answer:
           'Das hängt vom Umfang ab. Kleine Websites dauern oft wenige Wochen, komplexere Web-Apps eher mehrere Wochen bis Monate. Nach einem kurzen Kickoff können wir es genau einschätzen.',
       },
       
     ],
     []
   );

   const [openIndex, setOpenIndex] = useState<number>(1);

   return (
     <section className='bg-neutral-50 text-neutral-900'>
       <div className='mx-auto max-w-[1440px] px-[80px] py-[64px] flex flex-col gap-6'>
         <h2 className='text-[42px] leading-[115%] tracking-[-0.03em] font-semibold text-black'>
           Häufig gestellte Fragen
         </h2>

         <div className='w-full max-w-[1280px] rounded-[12px]'>
           {items.map((item, idx) => {
             const open = openIndex === idx;

             return (
               <div
                 key={item.question}
                 className={`w-full ${idx === items.length - 1 ? '' : 'border-b border-[#D9D9D9]'}`}
               >
                 <button
                   type='button'
                   className='w-full flex items-center justify-center py-3 gap-[6px] text-left transition-transform duration-150 ease-[cubic-bezier(0.2,0.9,0.2,1)]'
                   onClick={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
                   aria-expanded={open}
                 >
                   <div className='flex-1 text-neutral-950 max-h-full'>
                    <span> {item.question}</span>
                   </div>
                   <Chevron open={open} />
                 </button>

                 <div
                   className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.2,0.9,0.2,1)] motion-reduce:transition-none ${
                     open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                   }`}
                 >
                   <div className='min-h-0 overflow-hidden'>
                     <div className='pb-3'>
                       <div className='text-neutral-900 max-w-full'>
                         <p>{item.answer}</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     </section>
   );
 }

