import React from 'react';
import tailwindcss from 'tailwindcss';
import Link from 'next/link';
import Button from './(componenten)/button';
import LeistungenBento from './(Sections)/Leistungen';
import Zeitplan from './(Sections)/Zeitplan';
import Techstack from './(Sections)/Techstack';
import Faq from './(Sections)/Faq';

import Herosection from './(Sections)/Hero';
import HeroUsp from './(Sections)/Hero-usp';


export default function Home() {
  
  return <div className="bg-neutral">
    
    <Herosection />
    <HeroUsp />
    <LeistungenBento />
    <Zeitplan />
    <Techstack/>
    <Faq />
  </div>
}

