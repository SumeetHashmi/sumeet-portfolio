'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0, opacity: 1 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section
            className="relative overflow-hidden max-md:overflow-visible"
            id="banner"
        >
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:h-auto max-md:min-h-[100svh] max-md:pb-10 max-md:pt-[max(6rem,env(safe-area-inset-top)+4.5rem)] flex justify-between items-center max-md:flex-col max-md:items-stretch"
                ref={containerRef}
            >
                <div className="flex flex-col items-start max-w-[624px] max-md:shrink-0">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br /> <span className="ml-4">ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Sumeet Hashmi  
                        </span>
                        .Frontend Engineer with 4+ years of experience building scalable web apps with React.js, Next.js, and TypeScript. I deliver end-to-end products with pixel-perfect UIs, smooth animations, and AI-driven automation integrations, focusing on performance, clean code, and seamless user experience.                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Get in touch
                    </Button>
                </div>

                <div className="max-md:mt-12 md:absolute md:bottom-[10%] md:right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4
                        </h5>
                        <p className="text-muted-foreground">
                            Highlight projects
                        </p>
                    </div>
                    {/* <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3
                        </h5>
                        <p className="text-muted-foreground">Engineering roles</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
