import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <p className="leading-none text-muted-foreground">
                        <a
                            href={GENERAL_INFO.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-white"
                        >
                            Sumeet Hashmi
                        </a>
                        <span className="text-muted-foreground">
                            {' '}
                            · {GENERAL_INFO.location}
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
