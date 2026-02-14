'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import FaultyTerminal from '../(componenten)/FaultyTerminal';
import ButtonCTA from '../(componenten)/button';
import AnimatedDropdown from '../(componenten)/AnimatedDropdown';
import Faq from '../(Sections)/Faq';
import Link from 'next/link';
import FOOTER from '../(Sections)/Footer';

// Supabase wird jetzt server-seitig über /api/contact aufgerufen

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  howFound: string;
  files: File[];
}

function useResponsiveScale() {
  const [scale, setScale] = useState(3);
  
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScale(2);
      } else if (width < 1024) {
        setScale(3);
      } else if (width < 1536) {
        setScale(4);
      } else {
        setScale(5);
      }
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);
  
  return scale;
}

const TerminalBackground = React.memo(function TerminalBackground({ scale }: { scale: number }) {
  return (
    <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
      <FaultyTerminal
        scale={scale}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={1}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0.1}
        tint="#7c21f9"
        mouseReact
        mouseStrength={0.5}
        pageLoadAnimation
        brightness={0.2}
      />
    </div>
  );
});

export default function Kontaktformular() {
  const responsiveScale = useResponsiveScale();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    howFound: '',
    files: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [budgetRange, setBudgetRange] = useState({ min: 5000, max: 40000 });
  const [hoveredSlider, setHoveredSlider] = useState<'min' | 'max' | null>(null);
  const [activeSlider, setActiveSlider] = useState<'min' | 'max' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouchedFields(prev => new Set(prev).add(name));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: Array.from(e.target.files || []) }));
    }
  };

  const validateForm = (): string[] => {
    const newErrors: string[] = [];
    
    if (!formData.name.trim()) {
      newErrors.push('name');
    }
    if (!formData.email.trim()) {
      newErrors.push('email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push('email');
    }
    if (!formData.projectType) {
      newErrors.push('projectType');
    }
    if (!formData.description.trim()) {
      newErrors.push('description');
    }
    
    return newErrors;
  };

  /**
   * getErrorMessage - Gibt die passende Fehlermeldung für ein Feld zurück
   * @param field - Der Name des Feldes (z.B. 'name', 'email')
   * @returns Die deutsche Fehlermeldung als String
   */
  const getErrorMessage = (field: string): string => {
    switch (field) {
      case 'name': return 'Bitte geben Sie Ihren Namen ein';
      case 'email': return 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      case 'projectType': return 'Bitte wählen Sie eine Projektart';
      case 'description': return 'Bitte beschreiben Sie Ihr Projekt';
      default: return 'Dieses Feld ist erforderlich';
    }
  };

  /**
   * hasError - Prüft ob ein bestimmtes Feld einen Fehler hat
   * @param field - Der Name des Feldes
   * @returns true wenn das Feld in der errors-Liste ist, sonst false
   */
  const hasError = (field: string): boolean => errors.includes(field);

  /**
   * handleSubmit - Wird aufgerufen wenn das Formular abgeschickt wird
   * 
   * Ablauf:
   * 1. Verhindert das Standard-Browser-Verhalten (Seite neu laden)
   * 2. Validiert alle Pflichtfelder
   * 3. Wenn Fehler: Zeigt Fehlermeldungen an und stoppt
   * 4. Wenn OK: Sendet die Daten an Supabase
   * 5. Bei Erfolg: Zeigt die Erfolgsseite
   * 6. Bei Fehler: Zeigt eine Fehlermeldung
   */
  const handleSubmit = async (e: React.FormEvent) => {
    // Schritt 1: Verhindere dass die Seite neu lädt
    e.preventDefault();
    
    // Schritt 2: Prüfe ob alle Pflichtfelder ausgefüllt sind
    const validationErrors = validateForm();
    
    // Schritt 3: Wenn Fehler gefunden wurden, zeige sie an und stoppe
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setTouchedFields(new Set(validationErrors));
      return; // Hier wird die Funktion beendet, nichts wird gesendet
    }
    
    // Schritt 4: Zeige dem Nutzer dass wir senden (Ladeanimation)
    setIsSubmitting(true);
    
    try {
      // Schritt 5: Sende die Daten an die server-seitige API Route
      // /api/contact validiert, prüft Rate Limit und speichert in Supabase
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          projectType: formData.projectType,
          budgetMin: budgetRange.min,
          budgetMax: budgetRange.max,
          timeline: formData.timeline,
          description: formData.description,
        }),
      });

      // Schritt 6: Prüfe ob die API einen Fehler zurückgegeben hat
      if (!res.ok) {
        const data = await res.json();
        console.error('API Fehler:', data.error);
        if (res.status === 429) {
          setErrors(['rateLimit']);
        } else {
          setErrors(['submit']);
        }
        return;
      }
      
      // Schritt 7: Erfolg! Zeige die Dankesseite
      setSubmitted(true);
      
    } catch (err) {
      // Falls etwas Unerwartetes passiert (z.B. Netzwerkfehler)
      console.error('Unerwarteter Fehler:', err);
      setErrors(['submit']);
    } finally {
      // Wird IMMER ausgeführt, egal ob Erfolg oder Fehler
      // Beendet die Ladeanimation
      setIsSubmitting(false);
    }
  };

  // ============================================
  // ERFOLGSSEITE - Wird angezeigt nach dem Absenden
  // ============================================
  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
        <TerminalBackground scale={responsiveScale} />
        
        <div className="max-w-md w-full text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500/30 to-violet-600/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 backdrop-blur-sm">
            <svg className="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-white mb-3">Vielen Dank!</h2>
          <p className="text-neutral-400 text-lg">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
          <Link href="/" className="text-purple-50 font-bold hover:text-violet-600 transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-black to-neutral-50 flex items-center justify-center  pt-42 relative overflow-hidden flex-col">

      <div>
      <TerminalBackground scale={responsiveScale} />
      
      <div className="w-full max-w-md relative z-10">
        {/* Header - Apple style minimal */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-white tracking-tight">
            Projekt starten
          </h2>
          <p className="text-neutral-400 mt-3 text-lg">
            Erzählen Sie uns von Ihrem Vorhaben.
          </p>
        </div>

        {/* Form Card - Clean Apple glass */}
        <form onSubmit={handleSubmit} noValidate className="relative">
          <div 
            className="rounded-t-xl px-8 py-7 border border-white/10 backdrop-blur-lg bg-neutral-50/80 "
            style={{ backgroundColor: 'rgba(250, 250, 250, 0.15 )' }}
          >
            {/* Form Fields */}
            <div className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block  font-medium mb-2 ${hasError('name') ? 'text-red-400' : 'text-neutral-600'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    className={`w-full bg-white/[0.03] border rounded-md px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:text-neutral-50 focus:ring-2 focus:ring-purple-500/80 transition-all ${hasError('name') ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                  />
                </div>
                <div>
                  <label className={`block font-medium mb-2 ${hasError('email') ? 'text-red-400' : 'text-neutral-600'}`}>
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@beispiel.de"
                    className={`w-full bg-white/[0.03] border rounded-md px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500/80 transition-all ${hasError('email') ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                  />
                </div>
              </div>

              {/* Company & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block  font-medium mb-2 text-neutral-600">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Firma GmbH"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500/80 transition-all"
                  />
                </div>
                <div>
                  <label className="block  font-medium mb-2 text-neutral-600">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456789"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-md px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500/80 transition-all"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className={`block  font-medium mb-2 ${hasError('projectType') ? 'text-red-400' : 'text-neutral-600'}`}>
                  Projektart
                </label>
                <AnimatedDropdown
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  placeholder="Bitte wählen"
                  hasError={hasError('projectType')}
                />
              </div>

              {/* Budget Range Slider - Apple Style */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className=" font-medium text-neutral-600">Budget</label>
                  <span className="font-medium text-neutral-200 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                    {budgetRange.min.toLocaleString('de-DE')} € – {budgetRange.max.toLocaleString('de-DE')} €
                  </span>
                </div>
                <div className="relative h-8 flex items-center">
                  {/* Track Background */}
                  <div className="absolute w-full h-[6px] bg-white/10 rounded-full" />
                  {/* Active Track */}
                  <div 
                    className="absolute h-[6px] bg-gradient-to-r from-violet-500 to-violet-400 rounded-full"
                    style={{
                      left: `${((budgetRange.min - 5000) / 75000) * 100}%`,
                      right: `${100 - ((budgetRange.max - 5000) / 75000) * 100}%`
                    }}
                  />
                  {/* Min Thumb */}
                  <input
                    type="range"
                    min="5000"
                    max="80000"
                    step="1000"
                    value={budgetRange.min}
                    onChange={(e) => {
                      const value = Math.min(Number(e.target.value), budgetRange.max - 5000);
                      setBudgetRange(prev => ({ ...prev, min: value }));
                      if (navigator.vibrate) navigator.vibrate(10);
                    }}
                    onMouseEnter={() => setHoveredSlider('min')}
                    onMouseLeave={() => setHoveredSlider(null)}
                    onMouseDown={() => setActiveSlider('min')}
                    onMouseUp={() => setActiveSlider(null)}
                    onTouchStart={() => setActiveSlider('min')}
                    onTouchEnd={() => setActiveSlider(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        const newValue = Math.max(5000, budgetRange.min - 1000);
                        setBudgetRange(prev => ({ ...prev, min: Math.min(newValue, prev.max - 5000) }));
                      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        const newValue = Math.min(80000, budgetRange.min + 1000);
                        setBudgetRange(prev => ({ ...prev, min: Math.min(newValue, prev.max - 5000) }));
                      }
                    }}
                    className="absolute w-full h-8 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.3)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-[0_4px_12px_rgba(139,92,246,0.4)] [&::-webkit-slider-thumb]:active:scale-95 [&::-webkit-slider-thumb]:active:shadow-[0_2px_8px_rgba(139,92,246,0.6)] [&::-webkit-slider-thumb]:active:bg-violet-50 [&::-moz-range-thumb]:w-[24px] [&::-moz-range-thumb]:h-[24px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.3)] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto"
                    style={{ 
                      zIndex: activeSlider === 'min' ? 40 : hoveredSlider === 'min' ? 35 : 25
                    }}
                  />
                  {/* Max Thumb */}
                  <input
                    type="range"
                    min="5000"
                    max="80000"
                    step="1000"
                    value={budgetRange.max}
                    onChange={(e) => {
                      const value = Math.max(Number(e.target.value), budgetRange.min + 5000);
                      setBudgetRange(prev => ({ ...prev, max: value }));
                      if (navigator.vibrate) navigator.vibrate(10);
                    }}
                    onMouseEnter={() => setHoveredSlider('max')}
                    onMouseLeave={() => setHoveredSlider(null)}
                    onMouseDown={() => setActiveSlider('max')}
                    onMouseUp={() => setActiveSlider(null)}
                    onTouchStart={() => setActiveSlider('max')}
                    onTouchEnd={() => setActiveSlider(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        const newValue = Math.max(5000, budgetRange.max - 1000);
                        setBudgetRange(prev => ({ ...prev, max: Math.max(newValue, prev.min + 5000) }));
                      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        const newValue = Math.min(80000, budgetRange.max + 1000);
                        setBudgetRange(prev => ({ ...prev, max: Math.max(newValue, prev.min + 5000) }));
                      }
                    }}
                    className="absolute w-full h-8 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.3)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-[0_4px_12px_rgba(139,92,246,0.4)] [&::-webkit-slider-thumb]:active:scale-95 [&::-webkit-slider-thumb]:active:shadow-[0_2px_8px_rgba(139,92,246,0.6)] [&::-webkit-slider-thumb]:active:bg-violet-50 [&::-moz-range-thumb]:w-[24px] [&::-moz-range-thumb]:h-[24px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.3)] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto"
                    style={{ 
                      zIndex: activeSlider === 'max' ? 40 : hoveredSlider === 'max' ? 35 : 25
                    }}
                  />
                </div>
                <div className="flex justify-between text-neutral-500 mt-3">
                  <span>5.000 €</span>
                  <span>80.000 €</span>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block font-medium mb-3 text-neutral-600">Zeitrahmen</label>
                <div className="grid grid-cols-4 gap-2">
                  {['< 1 Monat', '1-3 Monate', '3-6 Monate', 'Flexibel'].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center justify-center px-2 py-2.5 rounded-xl border cursor-pointer transition-all text-[12px] ${
                        formData.timeline === option
                          ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                          : 'bg-white/[0.02] border-white/[0.08] text-neutral-500 hover:border-white/20 hover:text-neutral-400'
                      }`}
                    >
                      <input type="radio" name="timeline" value={option} checked={formData.timeline === option} onChange={handleChange} className="sr-only" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className={`block  font-medium mb-2 ${hasError('description') ? 'text-red-400' : 'text-neutral-600'}`}>
                  Projektbeschreibung
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Beschreiben Sie kurz Ihr Projekt..."
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500/80 transition-all resize-none ${hasError('description') ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                />
              </div>
            </div>

            {/* Error Message - Inline subtle */}
            {errors.length > 0 && (
              <div className="mt-6 flex items-center gap-2 text-red-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.includes('rateLimit') ? 'Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.' : 'Bitte füllen Sie alle Pflichtfelder aus'}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <ButtonCTA 
                type="submit"
                disabled={isSubmitting}
                fullWidth
                text={isSubmitting ? 'Wird gesendet...' : 'Absenden'}
              />
            </div>

            <p className="text-[11px] text-neutral-500 text-center mt-5">
            <Link href="/Datenschutz">               
              Mit dem Absenden stimmen Sie unserer <span className="text-neutral-400 hover:text-white cursor-pointer transition-colors">Datenschutzerklärung</span> zu.
              </Link>
            </p>
           
          </div>
        </form>
      </div>
      </div>
      <div>
          <div
              className="rounded-b-xl  px-16 py-4 border border-white/10 backdrop-blur-lg bg-neutral-50/80 flex text-white gap-5 "
              style={{ backgroundColor: 'rgba(250, 250, 250, 0.05)' }}
          >
              <div className="h-14 w-14 min-h-14 min-w-14 aspect-square rounded-full overflow-hidden border-2 border-green-500/80 flex items-center justify-center">
                  <img src="/images/EricKarusseit.Foto.png" alt="Eric Karusseit" className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex flex-col">
              <span>auch gerne per E-Mail:</span>
              <a href="mailto:eric.karusseit@interact-connects.de" className="hover:underline text-neutral-300 hover:text-blue-600">eric.karusseit@interact-connects.de</a>
              </div>
          </div>
      </div>
          <div className="z-20 bg-neutral-50 w-full h-full mt-32">
        <FOOTER/>
          </div>
    </div>
    
    
  );
}