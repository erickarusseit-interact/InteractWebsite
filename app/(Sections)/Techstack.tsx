
import React from 'react';

type TechRow = {
  key: string;
  label: string;
  description: string;
  icons: React.ReactNode;
};

function IconBadge({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Techstack() {
  const rows: TechRow[] = [
    {
      key: 'ts-js',
      label: 'Java & Type-/script',
      description:
        'Schützt vor Fehlern, bevor sie entstehen.\nSorgt dafür, dass Anwendungen stabil, wartbar und langfristig sicher bleiben.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-[#F7DF1E] text-black text-xs font-semibold'>JS</IconBadge>
          <IconBadge className='bg-[#007ACC] text-white text-xs font-semibold'>TS</IconBadge>
          
        </div>
      ),
    },
    {
      key: 'react-next',
      label: 'React & Next.js',
      description:
        'Sorgt dafür, dass eure Website schnell lädt, stabil läuft und von Google gut gefunden wird.\nBesucher bekommen Inhalte sofort, statt zu warten und können sofort interagieren.',
      icons: (
        <div className='flex items-center gap-2'>
        
          <IconBadge className='bg-black text-[#61DAFB] text-base font-semibold'>✳</IconBadge>
          <IconBadge className='bg-black text-white text-sm font-semibold '>N</IconBadge>
        </div>
      ),
    },
    {
      key: 'railway',
      label: 'Railway',
      description:
        'Bringt Anwendungen schnell, sicher und ohne technischen Aufwand online.\nServer, Datenbanken und Updates laufen automatisch im Hintergrund – euer Produkt ist jederzeit bereit.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-black text-white text-base font-semibold'>⟡</IconBadge>
          <IconBadge className='bg-black text-white text-base font-semibold invisible'>⟡</IconBadge>

        </div>
      ),
    },
    {
      key: 'aws-vercel',
      label: 'Vercel',
      description:
        'Stellt eure Anwendung online und sorgt dafür, dass sie überall maximal performant läuft.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-black text-white text-sm font-semibold'>▲</IconBadge>
          <IconBadge className='bg-black text-white text-sm font-semibold invisible'>▲</IconBadge>
        </div>
      ),
    },
    {



      key: 'supabase',
      label: 'Superbase',
      description:
        'Unsere sichere Datenzentrale.\nSpeichert Nutzer, Inhalte und Daten strukturiert, schnell und DSGVO-konform.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-black text-[#3ECF8E] text-lg font-semibold'>⚡</IconBadge>
          <IconBadge className='bg-black text-[#3ECF8E] text-lg font-semibold invisible '>⚡</IconBadge>
        </div>
      ),
    },
    {
      key: 'webflow',
      label: 'Webflow',
      description:
        'Für simple und schnelle Websites.\nStellt eure Anwendung automatisch online und sorgt dafür, dass sie überall maximal performant läuft.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-black text-[#146EF5] text-base font-semibold'>w</IconBadge>
          <IconBadge className='bg-black text-[#146EF5] text-base font-semibold invisible'>w</IconBadge>
        </div>
      ),
    },
    {
      key: 'cloudflare',
      label: 'Cloudflare',
      description:
        'Schützt eure Website und macht sie spürbar schneller.\nSichert Daten, blockiert Angriffe und sorgt dafür, dass eure Inhalte weltweit zuverlässig, schnell verfügbar sind.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-white border border-neutral-200 text-[#F38020] text-base font-semibold'>☁</IconBadge>
          <IconBadge className='bg-white border border-neutral-200 text-[#F38020] text-base font-semibold invisible'>☁</IconBadge>
        </div>
      ),
    },
  ];

  return (
    <section className='bg-neutral-50 text-neutral-900'>
      <div className='mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 py-16 flex flex-col gap-8'>
        <h2 className='text-neutral-900'>Techstack</h2>

        <div className='w-full max-w-[1280px]'>
          {rows.map((row, idx) => (
            <div
                key={row.key}
              className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-10 py-6 ${
                idx === rows.length - 1 ? '' : 'border-b border-neutral-200/70'
              }`}
            >
              <div className='flex items-center gap-4 min-w-0 sm:w-[280px] lg:w-[440px]'>
                {row.icons}
                <div className='font-medium text-neutral-900'><h5>{row.label} </h5></div>
              </div>

              <div className='min-w-0 flex-1 sm:max-w-[720px] whitespace-pre-line'>
               <p>{row.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


