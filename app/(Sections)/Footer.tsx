import Link from 'next/link';

const Footer = () => {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 pt-16 sm:pt-24 lg:pt-32">
        {/* Hero Text */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <h3 className="text-neutral-600 max-w-full sm:max-w-[85%] lg:max-w-[70%]">
            Was wir bauen, wirkt — nicht, weil wir Glück haben, 
            <div className=" inline text-neutral-900 font-semibold"> sondern weil wir verstehen, was die Menschen wirklich bewegt.</div>
          </h3>
        </div>
      </div>

      {/* Full-width border */}
      <div className="border-t border-neutral-300/50"></div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20">
        {/* Main Footer Content */}
        <div className="pt-8 sm:pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-8">
            {/* Logo and Company Section */}
            <div className="col-span-2 sm:col-span-6 lg:col-span-4">
              <div className="flex items-center gap-4 mb-8">
                {/* Simplified Logo */}
                <div className=""> <img src="../images/Logo-80x80.svg" alt="Logo" /> </div>
                <span className="">Interact <br/> Emotionen Digitalisieren</span>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="col-span-1 sm:col-span-2">
              <h5 className="text-neutral-900 mb-4">Marktforschung</h5>
              <div className="flex flex-col gap-3">
                <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Leistungen</a>
                <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Arbeiten</a>
                <a href="/Kontakt" className="text-neutral-600 hover:text-neutral-900 transition-colors">Kontakt</a>
                <a href="#ablauf" className="text-neutral-600 hover:text-neutral-900 transition-colors">Ablauf</a>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Blog</a>
                <a href="#faq" className="text-neutral-600 hover:text-neutral-900 transition-colors">FAQ</a>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <h5 className="text-neutral-900 mb-4">Web-Entwicklung</h5>
              <div className="flex flex-col gap-3">
                <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Leistungen</a>
                <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Arbeiten</a>
                <a href="/Kontakt" className="text-neutral-600 hover:text-neutral-900 transition-colors">Kontakt</a>
                <a href="#ablauf" className="text-neutral-600 hover:text-neutral-900 transition-colors">Ablauf</a>
                <a href="#techstack" className="text-neutral-600 hover:text-neutral-900 transition-colors">Blog</a>
                <a href="#faq" className="text-neutral-600 hover:text-neutral-900 transition-colors">FAQ</a>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <h5 className="text-neutral-900 mb-4">UX-Design</h5>
              <div className="flex flex-col gap-3">
                <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Leistungen</a>
                <a href="#services" className="text-neutral-600 hover:text-neutral-900 transition-colors">Arbeiten</a>
                <a href="/Kontakt" className="text-neutral-600 hover:text-neutral-900 transition-colors">Kontakt</a>
                <a href="#ablauf" className="text-neutral-600 hover:text-neutral-900 transition-colors">Ablauf</a>
                <a href="#techstack" className="text-neutral-600 hover:text-neutral-900 transition-colors">Blog</a>
                <a href="#faq" className="text-neutral-600 hover:text-neutral-900 transition-colors">FAQ</a>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="mb-8">
                <h5 className="text-neutral-900 mb-4">Rechtliches</h5>
                <div className="flex flex-col gap-3">
                  <Link href="/Datenschutz" className="text-neutral-600 hover:text-neutral-900 transition-colors">Datenschutz</Link>
                  <Link href="/Impressum" className="text-neutral-600 hover:text-neutral-900 transition-colors">Impressum</Link>
                </div>
              </div>
              
              <div>
                <h5 className="text-neutral-900 mb-4">Socials</h5>
                <a href="https://www.linkedin.com/in/eric-karusseit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="inline-flex items-center justify-center w-10 h-10 bg-neutral-600 hover:bg-neutral-900 rounded transition-colors ">
                  <div className=" text-white items-center justify-center"  >
                    <span className="text-white font-bold">in</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width copyright border */}
      <div className="border-t border-neutral-300/50 mt-12"></div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20 pb-16 sm:pb-24 lg:pb-32">
        {/* Copyright Section */}
        <div className="pt-6">
          <p className="text-neutral-600">© 2025 Interact. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;