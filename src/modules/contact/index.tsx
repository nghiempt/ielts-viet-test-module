'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import ContactContent from './main';

export default function ContactClient() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <div className="w-full mb-20">
                <ContactContent />
            </div>
            <Footer />
        </div>
    );
}