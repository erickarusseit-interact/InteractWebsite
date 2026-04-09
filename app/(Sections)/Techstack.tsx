
import React from 'react';
import Image from 'next/image';

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
      label: 'JavaScript & TypeScript',
      description:
        'Schützt vor Fehlern, bevor sie entstehen. Sorgt dafür, dass Anwendungen stabil, wartbar und langfristig sicher bleiben.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-[#F7DF1E]'>
            <svg className='w-5 h-5' viewBox='0 0 24 24' fill='#000'><path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'/></svg>
          </IconBadge>
          <IconBadge className='bg-[#3178C6]'>
            <svg className='w-5 h-5' viewBox='0 0 24 24' fill='#fff'><path d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z'/></svg>
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'refine',
      label: 'Refine',
      description:
        'Das Backend und Dashboard für Firmenkunden. Ermöglicht eine leistungsstarke Verwaltungsoberfläche mit minimalem Aufwand – für schnelle, sichere und skalierbare Admin-Panels.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-neutral-100'>
              <Image
                  src="/refine.logo.png"
                  alt="Better Auth logo"
                  width={100}
                  height={100}
                  className="object-fill rounded-l-xl object-center"
              />
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'nextjs-react',
      label: 'Next.js & React',
      description:
        'Das Frontend und der Funnel für die Endnutzer. Sorgt dafür, dass eure Website schnell lädt, stabil läuft und von Google gut gefunden wird.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-black'>
            <svg className='w-6 h-6' viewBox='0 0 24 24' fill='#fff'><path d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z'/></svg>
          </IconBadge>
          <IconBadge className='bg-[#20232A]'>
            <svg className='w-6 h-6' viewBox='0 0 24 24' fill='#61DAFB'><path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a22.952 22.952 0 0 0-3.107-.534 23.487 23.487 0 0 0-2.035-2.447c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a22.018 22.018 0 0 1-2.21.098c-.74 0-1.477-.035-2.202-.093a26.34 26.34 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868A21.09 21.09 0 0 1 12 8.1zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174a20.19 20.19 0 0 1-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174a28.63 28.63 0 0 0-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a18.21 18.21 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z'/></svg>
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'framer-motion',
      label: 'Framer Motion',
      description:
        'Flüssige, reaktive Animationen direkt im Browser. Framer Motion liefert ein lebendiges Nutzererlebnis mit minimaler Komplexität.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-[#0055FF]'>
            <svg className='w-5 h-5' viewBox='0 0 24 24' fill='#fff'><path d='M4 0h16v8H12l8 8H12l-8-8V0zm0 8l8 8v8l-8-8V8z'/></svg>
          </IconBadge>
          <IconBadge className='bg-[#0055FF] invisible'>
            <svg className='w-5 h-5' viewBox='0 0 24 24' fill='#fff'><path d='M4 0h16v8H12l8 8H12l-8-8V0z'/></svg>
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'sanity',
      label: 'Sanity',
      description:
        'Das Content-Management-System für die Texte im Funnel. Inhalte lassen sich flexibel pflegen und in Echtzeit aktualisieren – ohne Entwickleraufwand.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-neutral-100'>
            <Image
                src="/sanity-logo.png"
                alt="Better Auth logo"
                width={100}
                height={100}
                className="object-fill rounded-xl object-center"

            />
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'better-auth',
      label: 'Better Auth',
      description:
        'Sichere Authentifizierung für Nutzer und Firmenkunden. Better Auth bietet flexible, moderne Login-Flows – einfach zu integrieren und DSGVO-konform.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className=''>
            <Image
              src="/auth-logo.png"
              alt="Better Auth logo"
              width={100}
              height={100}
              className="object-fillr rounded-2xl object-center"
            />
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'postgres-drizzle',
      label: 'My SQL & Drizzle',
      description:
        'Die Datenbank für die Leads. PostgreSQL liefert eine zuverlässige, DSGVO-konforme Datenhaltung – Drizzle sorgt für typsichere und performante Datenbankzugriffe.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-neutral-100'>
            <img
              src="/mysql-logo.png"
              alt="MySQL logo"
              className="object-fill rounded-xl object-center"
            />
          </IconBadge>
          <IconBadge className= "">
            <img
              src="/drizzle-orm.png"
              alt="Drizzle logo"
              className="w-full h-full rounded-xl object-contain"
            />
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'railway-vercel',
      label: 'Railway & Vercel',
      description:
        'Die Infrastruktur hinter allem. Railway hostet die Datenbank zuverlässig und skalierbar – Vercel bringt das Frontend blitzschnell ans Netz.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className= "">
              <Image
                  src="/railway-logo.svg"
                  alt="Better Auth logo"
                  width={100}
                  height={100}
                  className="object-fill rounded-l-xl object-center bg-neutral-100"
              />
          </IconBadge>
          <IconBadge className='bg-black'>
            <svg className='w-6 h-6' viewBox='0 0 24 24' fill='#fff'><path d='M24 22.525H0l12-21.05 12 21.05z'/></svg>
          </IconBadge>
        </div>
      ),
    },
    {
      key: 'rive',
      label: 'Rive',
      description:
        'Interaktive Animationen, die begeistern. Rive ermöglicht flüssige, reaktive Animationen direkt im Browser – für ein lebendiges Nutzererlebnis.',
      icons: (
        <div className='flex items-center gap-2'>
          <IconBadge className='bg-neutral-100'>
              <Image
                  src="/rive-logo.webp"
                  alt="Better Auth logo"
                  width={30}
                  height={30}
                  className="object-contain  object-center"
              />
          </IconBadge>

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
              <div className='flex items-center gap-6 min-w-0 sm:w-[280px] lg:w-[440px]'>
                <div className='min-w-[88px]'>{row.icons}</div>
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


