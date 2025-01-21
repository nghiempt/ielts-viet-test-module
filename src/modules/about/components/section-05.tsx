'use client'

import Image from "next/image";

interface Teacher {
    id: string;
    name: string;
    role: string;
    image: string;
    backgroundColor: string;
}

const teachers: Teacher[] = [
    {
        id: '1',
        name: 'Trương Hoàng Hậu',
        role: 'Giám Đốc',
        image: 'https://res.cloudinary.com/farmcode/image/upload/v1737442875/ielts-viet/ppyvsdvahm6b2ljji1jx.png',
        backgroundColor: 'bg-pink-100'
    },
    {
        id: '1',
        name: 'Trương Hoàng Hậu',
        role: 'Giám Đốc',
        image: 'https://res.cloudinary.com/farmcode/image/upload/v1737442875/ielts-viet/ppyvsdvahm6b2ljji1jx.png',
        backgroundColor: 'bg-pink-100'
    },
    {
        id: '1',
        name: 'Trương Hoàng Hậu',
        role: 'Giám Đốc',
        image: 'https://res.cloudinary.com/farmcode/image/upload/v1737442875/ielts-viet/ppyvsdvahm6b2ljji1jx.png',
        backgroundColor: 'bg-pink-100'
    },
    {
        id: '1',
        name: 'Trương Hoàng Hậu',
        role: 'Giám Đốc',
        image: 'https://res.cloudinary.com/farmcode/image/upload/v1737442875/ielts-viet/ppyvsdvahm6b2ljji1jx.png',
        backgroundColor: 'bg-pink-100'
    },
    // {
    //     id: 'dianne',
    //     name: 'Dianne Russell',
    //     role: 'UX Designer',
    //     image: 'https://imgcdn.stablediffusionweb.com/2024/10/20/ae553048-1ea4-4d91-8199-7fd46dae6882.jpg',
    //     backgroundColor: 'bg-cyan-100'
    // },
    // {
    //     id: 'courtney',
    //     name: 'Courtney Henry',
    //     role: 'Senior Marketer',
    //     image: 'https://imgcdn.stablediffusionweb.com/2024/10/20/ae553048-1ea4-4d91-8199-7fd46dae6882.jpg',
    //     backgroundColor: 'bg-sky-100'
    // },
    // {
    //     id: 'annette',
    //     name: 'Annette Black',
    //     role: 'Web Developer',
    //     image: 'https://imgcdn.stablediffusionweb.com/2024/10/20/ae553048-1ea4-4d91-8199-7fd46dae6882.jpg',
    //     backgroundColor: 'bg-yellow-100'
    // }
];

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
    <div className="relative group cursor-pointer">
        <div className={`rounded-[40px] p-6 transition-all duration-300 group-hover:-translate-y-2`}>
            <div className="aspect-square overflow-hidden mb-4">
                <Image
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-full"
                    width={1000} height={0} />
            </div>
            <div className="text-center space-y-1">
                <h3 className="text-2xl font-bold">{teacher.name}</h3>
                <p className="text-[rgb(var(--secondary-rgb))] font-medium">{teacher.role}</p>
            </div>
        </div>
    </div>
);

const Section05 = () => {
    return (
        <div className="w-full lg:w-5/6 lg:mx-auto">
            <div className="text-center mb-16">
                <p className="text-[rgb(var(--secondary-rgb))] text-lg font-semibold mb-3">
                    Giảng Viên
                </p>
                <div className="relative inline-block">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Đội Ngũ Chuyên Gia
                    </h2>
                    <div className="absolute top-1/2 right-4 lg:right-0 w-20 lg:w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    );
};

export default Section05;