import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
declare global {
    interface Window {
        Odometer: any;
    }
}

const StatisticItem = ({ number, label }: { number: number; label: string }) => {
    const odometerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname()
    const [check, setCheck] = useState(1);

    useEffect(() => {
        const hasReloaded = sessionStorage.getItem('hasReloaded');

        if (pathname === '/ve-chung-toi' && check === 1 && !hasReloaded) {
            sessionStorage.setItem('hasReloaded', 'true');
            window.location.reload();
            setCheck(2);
        }
    }, [pathname, check]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Odometer) {
            const currentRef = odometerRef.current;
            const odometer = new window.Odometer({
                el: odometerRef.current,
                value: 0,
                format: '(,ddd)',
            });
            let hasRun = false;
            const options = {
                threshold: [0, 0.9],
            };
            const callback = (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!hasRun) {
                            odometer.update(number);
                            hasRun = true;
                        }
                    }
                });
            };
            const observer = new IntersectionObserver(callback, options);
            if (currentRef) {
                observer.observe(currentRef);
            }
            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        }
    }, [number]);

    return (
        <div className="flex-1 text-center text-white">
            <div className='flex flex-row justify-center'>
                <div ref={odometerRef} className="text-4xl md:text-5xl font-bold mb-2">0</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">+</div>
            </div>
            <div className="text-lg md:text-xl">{label}</div>
        </div>
    );
};

const StatisticsBar = () => {
    const stats = [
        { number: 985, label: 'Student Enrolled' },
        { number: 25, label: 'Winning Award' },
        { number: 35, label: 'Event Organized' },
        { number: 355, label: 'Expert Mentor' },
    ];

    return (
        <div className="w-full bg-[rgb(var(--primary-rgb))] relative">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.5/odometer.min.js" integrity="sha512-W/5PVFcV7i2BF+W7oc1dkJk2J7HGEXCYyvPoVVUyM4QT9wJHqRQ60vG5TieVJlaxpqFPPwfGU7aXW+sKk4ufaA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.5/themes/odometer-theme-default.min.css" />
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)`,
                    backgroundSize: '4px 4px',
                }} />
            <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <StatisticItem key={index} number={stat.number} label={stat.label} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticsBar;
