'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import AboutContent from './main';

export default function AboutClient() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <div className="w-full mb-20">
                <AboutContent />
            </div>
            <Footer />
        </div>
    );
}