'use client';

import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';

export default function Template({ children }: { children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Swipe overlay animation
            tl.fromTo(
                overlayRef.current,
                { scaleX: 1, transformOrigin: 'left' },
                { scaleX: 0, transformOrigin: 'right', duration: 0.6, ease: 'power3.inOut' }
            );

            // Content reveal
            tl.fromTo(
                containerRef.current,
                { opacity: 0, y: 30, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.3'
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Swipe overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[9999] bg-black pointer-events-none"
                style={{ transformOrigin: 'right' }}
            />
            {/* Page content */}
            <div ref={containerRef}>
                {children}
            </div>
        </>
    );
}