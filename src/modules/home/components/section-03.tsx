'use client'

import { Baby, Blinds, Component, FolderCode, Target, TvMinimal } from "lucide-react";

interface CourseCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    backgroundColor: string;
}

const categories: CourseCategory[] = [
    {
        id: 'uiux',
        title: 'Luyện thi IELTS các cấp độ từ FOUNDATION - BAND 7.5',
        description: 'Luyện thi IELTS các cấp độ từ FOUNDATION - BAND 7.5',
        icon: (
            <div className="bg-yellow-400 p-4 rounded-full">
                <div className="text-white font-bold"><Component /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'marketing',
        title: 'Luyện thi chứng chỉ quốc tế TOEIC',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-emerald-500 p-4 rounded-full">
                <div className="text-white"><TvMinimal /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'development',
        title: 'Giao tiếp quốc tế',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-blue-600 p-4 rounded-full">
                <div className="text-white"><FolderCode /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'improvement',
        title: 'Tiếng anh bám sát chương trình phổ thông',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-pink-500 p-4 rounded-full">
                <div className="text-white"><Target /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'improvement',
        title: 'Tiếng anh trẻ em',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-[#006066] p-4 rounded-full">
                <div className="text-white"><Baby /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'improvement',
        title: 'Lớp đặc biệt',
        description: 'Rút ngắn tối đa thời gian học Cam kết điểm đẩu ra IELTS 7.0+ Học IELTS linh hoạt theo lịch rảnh Sỉ số lớp chỉ từ 4-8 HV.',
        icon: (
            <div className="bg-[#801E1E] p-4 rounded-full">
                <div className="text-white"><Blinds /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    }
];

const Section03 = () => {
    return (
        <div className="w-full lg:w-3/4 px-6 lg:px-0 pb-20 pt-12">
            <div className="text-center mb-12">
                <div className="text-center">
                    <h2 className="text-4xl mx-2 lg:text-5xl font-bold text-[rgb(var(--quaternary-rgb))]">
                        Các Khoá Học Tại IELTS VIET
                    </h2>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`${category.backgroundColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                            <div className="flex flex-col items-start gap-4">
                                {category.icon}
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section03;