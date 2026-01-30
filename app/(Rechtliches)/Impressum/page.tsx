import React from 'react';
import Navbar from "@/app/(componenten)/Navbar";
import Footer from '../../(Sections)/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-neutral-50">
      
      
      <div className="max-w-[1440px] mx-auto px-20 py-24">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12 mt-12">Impressum</h2>
        
        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <p><span className="font-semibold text-neutral-900">Angaben gemäß § 5 TMG</span><br />
          Eric Karusseit<br />
          Kastanienallee 66<br />
          13158 Berlin<br />
          Deutschland</p>

          <p><span className="font-semibold text-neutral-900">Kontakt</span><br />
          <span className="font-medium">Telefon:</span> 0176 53931456<br />
          <span className="font-medium">E-Mail:</span> eric.karusseit@interact-connects.de</p>

          <p><span className="font-semibold text-neutral-900">Vertreten durch</span><br />
          Eric Lothar Karusseit</p>

          <p><span className="font-semibold text-neutral-900">Registereintrag</span><br />
          Eintragung im Handelsregister<br />
          Registergericht:<br />
          Registernummer:<br />
          Umsatzsteuer:</p>

          <p><span className="font-semibold text-neutral-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</span><br />
          Interact<br />
          Kastanienallee 66<br />
          13158 Berlin</p>

          <p><span className="font-semibold text-neutral-900">Streitschlichtung</span><br />
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <p><span className="font-semibold text-neutral-900">Haftung für Inhalte</span><br />
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br /><br />
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

          <p><span className="font-semibold text-neutral-900">Haftung für Links</span><br />
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.<br /><br />
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br /><br />
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}