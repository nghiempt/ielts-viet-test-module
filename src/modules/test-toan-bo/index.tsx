'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import TipsContent from './main';

export default function TipsClient() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <div className="w-full mb-20">
                <TipsContent />
            </div>
            <Footer />
        </div>
    );
}