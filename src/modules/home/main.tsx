"use client";

import Section02 from "./components/section-02-latest";
import Section03 from "./components/section-03-reading";
import Section04 from "./components/section-04-listening";
import Section05 from "./components/section-05-writing";
import Section06 from "./components/section-06-full-test";
import SectionBanner from "./components/section-banner";
import SectionFooter from "./components/section-footer";

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-16">
      <section className="lg:w-3/4">
        <SectionBanner />
      </section>
      {/* <section className="lg:w-3/4">
        <Section02 />
      </section> */}
      <section className="lg:w-3/4">
        <Section03 />
      </section>
      <section className="lg:w-3/4">
        <Section04 />
      </section>
      <section className="lg:w-3/4">
        <Section05 />
      </section>
      <section className="lg:w-3/4">
        <Section06 />
      </section>
      <section className="w-full lg:w-3/4">
        <SectionFooter />
      </section>
    </main>
  );
}
