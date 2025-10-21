"use client";
import React from "react";

export default function AboutPage() {
  return (
    <main id="kavehome-body" className="bg-[#F2F1E7] w-full mt-0  grow-1">
      {/* =========================
          HERO (EXACT 100vh)
      ========================== */}

      <div className="relative flex flex-col items-center justify-center  overflow-hidden">
        <div className=" absolute z-[1]  flex items-center flex-col w-full max-w-full">
          <h1
            className="
              text-white font-normal text-center
              font-kave-haffertext
              [line-height:82px] md:text-[82px]
              sm:text-[58px] sm:[line-height:62px]
              text-[58px] 
            "
          >
            About us
          </h1>
        </div>
        {/* background image (desktop/mobile) */}
        <picture className="flex w-full ">
          <source
            srcSet="https://d.media.kavehome.com/image/upload/v1756376090/cms/landing-about-us-img-01.jpg"
            media="(min-width:768px)"
          />
          <source
            srcSet="https://d.media.kavehome.com/image/upload/v1756376113/cms/landing-about-us-img-01-m.jpg"
            media="(min-width:414px)"
          />
          <img
            src="https://d.media.kavehome.com/image/upload/v1756376113/cms/landing-about-us-img-01-m.jpg"
            alt="About hero"
            loading="lazy"
            className="w-full h-full object-cover select-none"
          />
        </picture>


      </div>

      {/* =========================
          OUR STORY (Left block)
          paddings: top 100 / bottom 80 / left 64 (md+) / right 20 (mobile)
      ========================== */}
      <section
        className="
          bg-[#F2F1E7]
          pt-[60px] md:pt-[100px]
          pb-[80px]
          pl-[20px] md:pl-[64px]
          pr-[20px]
        "
      >
        <div className="max-w-[800px]">
          <h2 className="font-kave-haffertext text-black font-normal md:text-[60px] text-[48px] md:[line-height:82px] [line-height:50px] mb-[12px]">
            Our story
          </h2>
          <p className=" text-[22px] [line-height:26px]">
            Kave started long before it had a name or a brand.
          </p>
        </div>
      </section>

      {/* Paragraph Left – max width 1004, right padding 52 on tablet+, bottom mobile 40 */}
      <section
        className="
          bg-[#F2F1E7]
          pl-[20px] md:pl-[64px]
          pr-[20px] md:pr-[52px]
          pb-[94px] md:pb-[94px] sm:pb-[94px] 
        "
      >
        <div className="max-w-[1004px]">
          <p className="font-kave-haffertext text-black md:text-[38px] text-[28px] md:[line-height:40px] [line-height:30px]">
            The project emerged from a way of understanding work, relationships
            and commitment. It all started in a small warehouse in Sils, where
            mattresses were distributed to hotels along the Costa Brava. There
            may have been hardly any resources, but there was an unwavering
            commitment to doing things well, working rigorously and flexibly,
            with attention to detail.
          </p>
        </div>
      </section>

      {/* Paragraph Right – max width 562, right padding 52, bottom 94/60 */}
      <section
        className="
          bg-[#F2F1E7]
          pr-[20px] md:pr-[52px]
          pl-[20px]
          pb-[60px] md:pb-[94px]
          flex md:justify-end
        "
      >
        <div className="max-w-[562px]">
          <p className="font-[Martina] text-black text-[14px] md:[line-height:17px] [line-height:16px]">
            What began as a local project spearheaded by Francesc Julià took
            shape thanks to the constant work and effort of all of the people
            who got involved, contributing their time, skills and a shared
            desire to improve every day. And so a culture based on trust,
            curiosity and the desire to leave a long-term mark began to take
            shape. Today, this continues to be the foundation guiding everything
            that we do.
          </p>
        </div>
      </section>

      {/* =========================
          TWO IMAGES — 45% / 55%
          left: mobile px 20 & pb 60
          right: precise inner paddings (R 200/L 220 desktop, R 100/L 120 tablet, R/L 64 mobile)
      ========================== */}
      <section className="w-full bg-[#F2F1E7] md:flex">
        {/* left 45% */}
        <div className="md:w-[45%] w-full px-[20px] md:px-0 pb-[60px] md:pb-0">
          <picture className="block">
            <source
              srcSet="https://d.media.kavehome.com/image/upload/v1756378553/cms/landing-about-us-img-02.jpg"
              media="(min-width:768px)"
            />
            <img
              src="https://d.media.kavehome.com/image/upload/v1756378553/cms/landing-about-us-img-02.jpg"
              alt=""
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>

        {/* right 55% */}
        <div
          className="
            md:w-[55%] w-full
            pr-[64px] pl-[64px]
            md:pr-[100px] md:pl-[120px]
            lg:pr-[200px] lg:pl-[220px]
          "
        >
          <picture className="block">
            <source
              srcSet="https://d.media.kavehome.com/image/upload/v1756378578/cms/landing-about-us-img-03.jpg"
              media="(min-width:768px)"
            />
            <img
              src="https://d.media.kavehome.com/image/upload/v1756378578/cms/landing-about-us-img-03.jpg"
              alt=""
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
      </section>

      {/* =========================
          OUR POINT OF VIEW (center)
          top 140 / 80 mobile
      ========================== */}
      <section className="bg-[#F2F1E7] pt-[80px] md:pt-[140px] pb-0 text-center">
        <div className="max-w-[835px] mx-auto">
          <h2 className="font-kave-haffertext font-normal md:text-[60px] text-[48px] md:[line-height:82px] [line-height:50px]">
            Our point of view
          </h2>
        </div>
      </section>

      {/* subtitle + paragraph (center) – exact widths & spacings */}
      <section className="bg-[#F2F1E7] pt-[12px] md:pt-[12px] pb-[60px] md:pb-[108px] text-center">
        <div className="max-w-[450px] mx-auto">
          <p className="font-[Martina] text-[22px] [line-height:26px] mb-[32px]">
            Through objects, we build bonds between people and spaces.
          </p>
          <p className="font-[Martina] text-[14px] [line-height:16px]">
            In a world where constant change and speed are the order of the day,
            at Kave we believe that a true home is created through connection
            and experiences that are built bit by bit. That's why we create
            objects and furniture designed to accompany you throughout your life
            and, over time, become part of you.
          </p>
        </div>
      </section>

      {/* =========================
          FULL WIDTH IMAGE
      ========================== */}
      <section className="bg-white">
        <picture className="block">
          <source
            srcSet="https://d.media.kavehome.com/image/upload/v1756805469/cms/landing-about-us-img-04.jpg"
            media="(min-width:768px)"
          />
          <source
            srcSet="https://d.media.kavehome.com/image/upload/v1756805494/cms/landing-about-us-img-04-m.jpg"
            media="(min-width:414px)"
          />
          <img
            src="https://d.media.kavehome.com/image/upload/v1756805494/cms/landing-about-us-img-04-m.jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </picture>
      </section>

      {/* =========================
          VALUE PROPOSITION STRIP
          left-aligned, clay background
          top 80 / left 65 (md+), 20 (mobile)
      ========================== */}
      <section className="bg-[#BDAFA0] pt-[60px] md:pt-[80px] pb-0 pl-[20px] md:pl-[65px]">
        <div className="max-w-full">
          <p className="font-kave-haffertext md:text-[60px] text-[48px] md:[line-height:82px] [line-height:50px] mb-[14px]">
            Our value proposition
          </p>
          <p className="font-[Martina] md:text-[26px] text-[22px] md:[line-height:30px] [line-height:26px]">
            Here to Stay
          </p>
        </div>
      </section>

      {/* IMAGE + TEXT (clay bg) */}
      <section className="bg-[#BDAFA0] md:flex">
        {/* left image block (50%) with exact paddings */}
        <div
          className="
            md:w-1/2 w-full
            pt-[36px]
            pl-[65px] md:pl-[65px]
            pr-[20px]
            pb-[75px] md:pb-[85px]
          "
        >
          <div className="max-w-[395px]">
            <picture className="block">
              <source
                srcSet="https://d.media.kavehome.com/image/upload/v1756805575/cms/landing-about-us-img-08.jpg"
                media="(min-width:768px)"
              />
              <img
                src="https://d.media.kavehome.com/image/upload/v1756805575/cms/landing-about-us-img-08.jpg"
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>
        </div>

        {/* right text block (50%) with exact vertical paddings */}
        <div
          className="
            md:w-1/2 w-full
            px-[20px] md:px-0
            pb-[55px] md:pb-[85px] pt-10 md:pt-10 justify-center flex
          "
        >
          <div className="max-w-[336px] md:mx-0  ">
            <p className="font-[Martina] text-[16px] font-semibold [line-height:18px]">
              A way of understanding the home.
            </p>
            <p className="font-[Martina] text-[14px] [line-height:16px] mt-[12px] mb-[32px]">
              A home is not built in a single day, nor does it change with every
              season. It is built piece by piece, with objects that will endure
              and experiences that we collect.
            </p>

            <p className="font-[Martina] text-[16px] font-semibold [line-height:18px]">
              A way of designing furniture.
            </p>
            <p className="font-[Martina] text-[14px] [line-height:16px] mt-[12px] mb-[32px]">
              We build furniture designed to endure, share space and evolve with
              you. Far from fleeting trends, we strive for timelessness,
              versatility and character.
            </p>

            <p className="font-[Martina] text-[16px] font-semibold [line-height:18px]">
              A way of being as a brand.
            </p>
            <p className="font-[Martina] text-[14px] [line-height:16px] mt-[12px] mb-[32px]">
              We want to leave our mark on spaces and on people's lives. To be
              present when life happens and to be a part of what will continue
              to endure.
            </p>

            <p className="font-[Martina] text-[16px] font-semibold [line-height:18px]">
              A way of working together.
            </p>
            <p className="font-[Martina] text-[14px] [line-height:16px] mt-[12px] mb-[32px]">
              Being there for each other and building something together that is
              worth sticking around for. A relationship between people, and
              between people and the company, with the aim of fostering a
              lasting bond.
            </p>

            <p className="font-[Martina] text-[16px] font-semibold [line-height:18px]">
              A way of seeing the world.
            </p>
            <p className="font-[Martina] text-[14px] [line-height:16px] mt-[12px]">
              We are proud of our Mediterranean spirit and our roots. We aim to
              continue growing without losing sight of what defines us.
            </p>
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE (second) */}
      <section className="bg-white">
        <picture className="block">
          <source
            srcSet="https://d.media.kavehome.com/image/upload/v1756805638/cms/landing-about-us-img-05.jpg"
            media="(min-width:768px)"
          />
          <source
            srcSet="https://d.media.kavehome.com/image/upload/v1756805664/cms/landing-about-us-img-05-m.jpg"
            media="(min-width:414px)"
          />
          <img
            src="https://d.media.kavehome.com/image/upload/v1756805664/cms/landing-about-us-img-05-m.jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </picture>
      </section>

      {/* =========================
          OUR COMMITMENT (center)
      ========================== */}
      <section className="bg-[#F2F1E7] pt-[60px] md:pt-[140px] pb-[20px] text-center">
        <div className="max-w-full mx-auto">
          <p className="font-kave-haffertext md:text-[60px] text-[48px] md:[line-height:82px] [line-height:50px]">
            Our commitment
          </p>
        </div>
      </section>

      <section className="bg-[#F2F1E7] pt-0 pb-[80px] md:pb-[90px] text-center">
        <div className="max-w-[392px] mx-auto">
          <p className="font-[Martina] text-[14px] [line-height:16px] mb-[16px]">
            Our concept and understanding of the home is also born out of a
            different way of looking at the future.
          </p>
          <a
            className="inline-block"
            target="_self"
            href="/en/en/kave-cares/"
          >
            <button
              type="button"
              className="font-[Martina] underline text-[14px] leading-[16px]"
            >
              See how we do it
            </button>
          </a>
        </div>
      </section>

      {/* =========================
          LAST TWO IMAGES — 55% / 45%
          left paddings R/L: 220/200 desktop, 120/100 tablet, 60/60 mobile
          right paddings R/L: 20/20 mobile
      ========================== */}
      <section className="bg-[#F2F1E7] md:flex">
        {/* left 55% */}
        <div
          className="
            md:w-[55%] w-full
            pr-[60px] pl-[60px]
            md:pr-[120px] md:pl-[100px]
            lg:pr-[220px] lg:pl-[200px]
            pb-[60px] md:pb-[60px]
          "
        >
          <picture className="block">
            <source
              srcSet="https://d.media.kavehome.com/image/upload/v1756378407/cms/landing-about-us-img-06.jpg"
              media="(min-width:768px)"
            />
            <img
              src="https://d.media.kavehome.com/image/upload/v1756378407/cms/landing-about-us-img-06.jpg"
              alt=""
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>

        {/* right 45% */}
        <div className="md:w-[45%] w-full px-[20px]">
          <picture className="block">
            <source
              srcSet="https://d.media.kavehome.com/image/upload/v1756460597/cms/landing-about-us-img-07.jpg"
              media="(min-width:768px)"
            />
            <img
              src="https://d.media.kavehome.com/image/upload/v1756460597/cms/landing-about-us-img-07.jpg"
              alt=""
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
      </section>
    </main>
  );
}
 