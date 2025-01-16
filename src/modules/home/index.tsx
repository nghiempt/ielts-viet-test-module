'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import HomeContent from './main';

export default function HomeClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full mt-12 mb-20">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}