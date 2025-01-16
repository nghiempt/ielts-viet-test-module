import React from 'react';

const StatisticItem = ({ number, label }: any) => (
    <div className="flex-1 text-center text-white">
        <div className="text-4xl md:text-5xl font-bold mb-2">{number}+</div>
        <div className="text-lg md:text-xl">{label}</div>
    </div>
);

const StatisticsBar = () => {

    const stats = [
        {
            number: "985",
            label: "Student Enrolled"
        },
        {
            number: "25",
            label: "Winning Award"
        },
        {
            number: "35",
            label: "Event Organized"
        },
        {
            number: "355",
            label: "Expert Mentor"
        }
    ];

    return (
        <div className="w-full bg-[rgb(var(--primary-rgb))] relative">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)`,
                    backgroundSize: '4px 4px'
                }}
            />
            <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <StatisticItem
                            key={index}
                            number={stat.number}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticsBar;