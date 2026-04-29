'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 100;

const ParticleBackground = () => {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const particles = root.querySelectorAll<HTMLElement>('[data-particle]');

        const ctx = gsap.context(() => {
            particles.forEach((particle) => {
                const w = window.innerWidth;
                const h = window.innerHeight;
                gsap.set(particle, {
                    width: Math.random() * 3 + 1,
                    height: Math.random() * 3 + 1,
                    opacity: Math.random(),
                    left: Math.random() * w,
                    top: Math.random() * (h + 1),
                });

                gsap.to(particle, {
                    y: h,
                    duration: Math.random() * 10 + 10,
                    opacity: 0,
                    repeat: -1,
                    ease: 'none',
                });
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={rootRef} className="fixed inset-0 z-0 pointer-events-none">
            {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
                <div
                    key={i}
                    data-particle
                    className="absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
