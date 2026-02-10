import React from 'react';

import Link from 'next/link';
import Button from './(componenten)/button';
import LeistungenBento from './(Sections)/Leistungen';
import Zeitplan from './(Sections)/Zeitplan';
import Techstack from './(Sections)/Techstack';
import Faq from './(Sections)/Faq';
import Footer from './(Sections)/Footer'; 
import Preise from './(Sections)/Preise';
import Herosection from './(Sections)/Hero';
import HeroUsp from './(Sections)/Hero-usp';
import Facts from './(Sections)/Facts';

export default function Home() {
  
  return <div className= "bg-black min-h-screen">
    
    <div id="hero"><Herosection /></div>
    <div id="leistungen"><HeroUsp /></div>
    <div id="services"><LeistungenBento /></div>
    <div id="ablauf"><Zeitplan /></div>
    <div id="techstack"><Techstack/></div>
    <div id="facts"><Facts /></div>
    <div id="faq"><Faq /></div>
    <Footer />
  </div>
}

