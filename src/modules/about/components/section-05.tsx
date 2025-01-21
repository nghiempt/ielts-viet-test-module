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
        name: 'Thầy Trương Hoàng Hậu',
        role: 'Giám Đốc',
        image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        backgroundColor: 'bg-pink-100'
    },
    {
        id: '1',
        name: 'Thầy Lâm Tiến Thành',
        role: 'Giảng viên',
        image: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        backgroundColor: 'bg-pink-100'
    },
    {
        id: '1',
        name: 'Cô Thạch Ngọc Trân',
        role: 'Giảng viên',
        image: 'https://media.istockphoto.com/id/1074273082/pt/vetorial/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=51rbqtBAgkF-qcwei4zVO7KBGlL6UOldnbUbxRvBHUE=',
        backgroundColor: 'bg-pink-100'
    },
    {
        id: '1',
        name: 'Cô Lê Đức Anh Thư',
        role: 'Giảng viên',
        image: 'https://media.istockphoto.com/id/1074273082/pt/vetorial/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=51rbqtBAgkF-qcwei4zVO7KBGlL6UOldnbUbxRvBHUE=',
        backgroundColor: 'bg-pink-100'
    },
    {
        id: '1',
        name: 'Cô Võ Minh Thư',
        role: 'Giảng viên',
        image: 'https://media.istockphoto.com/id/1074273082/pt/vetorial/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=51rbqtBAgkF-qcwei4zVO7KBGlL6UOldnbUbxRvBHUE=',
        backgroundColor: 'bg-cyan-100'
    },
    {
        id: 'courtney',
        name: 'Cô Phương Trinh',
        role: 'Giảng viên',
        image: 'https://media.istockphoto.com/id/1074273082/pt/vetorial/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=51rbqtBAgkF-qcwei4zVO7KBGlL6UOldnbUbxRvBHUE=',
        backgroundColor: 'bg-sky-100'
    },
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
                <div className="relative inline-block">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Đội Ngũ Giảng Viên
                    </h2>
                    <div className="hidden lg:absolute top-1/2 right-4 lg:right-0 w-20 lg:w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    );
};

export default Section05;