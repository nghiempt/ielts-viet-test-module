'use client'

import Section02 from "./components/section-02";
import Section03 from "./components/section-03";
import Section04 from "./components/section-04";
import Section05 from "./components/section-05";
import Section06 from "./components/section-06";
import Section07 from "./components/section-07";
import SectionBanner from "./components/section-banner";
import SectionFooter from "./components/section-footer";
import Marquee from "./components/section-marquee";

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-16">
      <section className="lg:w-3/4">
        <SectionBanner />
      </section>
      <section className="w-full">
        <Marquee />
      </section>
      <section className="lg:w-3/4">
        <Section02 />
      </section>
      <section className="bg-[rgb(var(--secondary-rgb))] lg:w-full flex justify-center items-center">
        <Section03 />
      </section>
      <section className="lg:w-3/4 -translate-y-3">
        <Section04 />
      </section>
      <section className="bg-[rgb(var(--secondary-rgb))] lg:w-full flex justify-center items-center">
        <Section05 />
      </section>
      <section className="lg:w-3/4 -translate-y-3">
        <Section06 />
      </section>
      <section className="bg-[rgb(var(--secondary-rgb))] lg:w-full flex justify-center items-center">
        <Section07 />
      </section>
      <section className="lg:w-3/4">
        <SectionFooter />
      </section>
    </main>
  );
}