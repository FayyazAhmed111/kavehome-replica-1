"use client";
import React from "react";
import LangSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();
  const isAuthPage = pathname.includes("/accounts/login") || pathname.includes("/accounts/register");
  return (



    <footer
      id="footer"
      className="site-footer  text-[var(--color-neutral-100)]"
    >
      {/* Banner */}
      {
        isAuthPage ? (
          <div></div>

        ) : (
            <div
              className="
         border-t mt-[24px] font-notosans
          bg-[var(--color-neutral-20)] 
          flex flex-col items-center justify-center
          text-[var(--color-primary)]
          md:px-20 md:py-10 
          lg:flex-row lg:items-end lg:justify-center lg:py-14 
        "
            >
              {/* Text */}
              <div
                className="
            flex flex-col flex-wrap content-end 
            border-b border-[var(--color-neutral-40)] 
            m-[0_24px] 
            py-8 pb-12 
            md:pb-0 md:pt-0 md:m-0 
            lg:border-b-0 lg:border-r lg:border-[var(--color-neutral-40)] 
            lg:pr-[90px] lg:pl-[140px] 
            xl:pr-[60px] xl:pl-[96px] 
            2xl:pr-[200px] 2xl:pl-[30px]
            lg:max-w-[720px]
            flex-[1_1_50%]
          "
              >
                <p className="font-kave-haffertext text-[22px]  leading-[22px] mb-2 tracking-tight max-w-[480px]">
                  Our commitment to responsible practices.
                </p>
                <a
                  href="/en/en/kave-cares/"
                  className="underline text-[14px] mt-[8px] inline-block hover:opacity-80 font-poppins"
                >
                  Discover the project
                </a>
              </div>

              {/* Logos */}
              <div
                className="
            flex items-center gap-12 overflow-x-scroll scrollbar-hide
            px-6 py-8 pb-10 md:px-0 md:py-0 md:pb-0
            lg:overflow-x-visible lg:justify-end lg:px-[60px] lg:pr-[90px]
            xl:px-[60px] xl:pr-[96px]
            2xl:px-[60px] 2xl:pr-[96px]
            lg:max-w-[720px]
            flex-[1_1_50%]
          "
              >
                <div className="shrink-0">
                  <img src="/images/climate-partner.svg" alt="Climate Partner" className="h-[65px] w-auto" />
                </div>
                <div className="shrink-0">
                  <img src="/images/sustainable_development_goals_1.avif" alt="Sustainable Dev Logo" className="h-[50px] w-auto" />
                </div>
                <div className="shrink-0">
                  <img src="/images/ghg.avif" alt="DNV Logo" className="h-[56px] w-auto" />
                </div>
                <div className="shrink-0 pr-[24px] md:pr-0">
                  <img src="/images/fsv.png" alt="FSC Logo" className="h-[65px] w-auto" />
                </div>
              </div>
            </div>
        )}


      {/* Footer Nav */}
      <nav
        className="footer-nav grid grid-cols-1 px-[32px] pt-[56px] pb-[24px] gap-y-0
                    md:grid-cols-2 md:gap-y-0 md:px-[80px] md:py-[56px]
                    lg:grid-cols-5
                    xl:px-[96px] xl:py-[64px]   border-t border-neutral-30"
      >

        {/* Links Container */}
        <ul
          className="links-container grid grid-cols-1 items-center gap-[16px] mb-[48px]
                     md:[grid-area:1/1/1/5] md:mb-[40px] md:items-start md:grid-cols-4 md:row-gap-[48px]
                     lg:mb-0"
        >
          {/* ABOUT US */}
          <li className="links-item flex flex-col items-center text-center gap-[4px] md:items-start md:text-left">
            <span className="uppercase font-poppins font-semibold text-[14px]">
              ABOUT US
            </span>
            <nav className=" text-[12px]  links mt-[16px] flex flex-col gap-[12px] text-center md:text-left font-poppins">
              <a href="/en/en/e/about-us/">About us</a>
              <a href="/en/en/kave-cares/">Responsible practices</a>
              <a href="/en/en/stores/finder/">Find your store</a>
              <a href="/en/en/jobs/">Work with us</a>
            </nav>
          </li>

          {/* CONTACT & HELP */}
          <li className="links-item flex flex-col items-center text-center gap-[4px] md:items-start md:text-left">
            <span className="uppercase font-poppins font-semibold text-[14px]">
              CONTACT &amp; HELP
            </span>
            <nav className=" text-[12px]  links mt-[16px] flex flex-col gap-[12px] text-center md:text-left font-poppins">
              <a href="https://kavehomehelp.zendesk.com/hc/en-gb/">FAQ</a>
              <a href="https://kavehomehelp.zendesk.com/hc/en-gb/sections/9882597375005">Returns and faults</a>
              <a href="/en/en/find-order/">Check my order status</a>
              <a href="https://help.kavehome.com/hc/en-gb/sections/10492291755677-Customer-Service">Contact us</a>
            </nav>
          </li>

          {/* LET'S WORK TOGETHER */}
          <li className="links-item flex flex-col items-center text-center gap-[4px] md:items-start md:text-left">
            <span className="uppercase font-poppins font-semibold text-[14px]">
              LET&apos;S WORK TOGETHER
            </span>
            <nav className=" text-[12px]  links mt-[16px] flex flex-col gap-[12px] text-center md:text-left font-poppins">
              <a href="/en/en/lets-collaborate/">Press, Ambassadors, Expansion</a>
              <a href="/en/en/e/professionals">Professionals</a>
              <a href="/en/en/affiliate/">Affiliate programme</a>
              <a href="/en/en/formulario-proveedor/">Are you a supplier?</a>
            </nav>
          </li>

          {/* YOUR ACCOUNT */}
          <li className="links-item flex flex-col items-center text-center gap-[4px] md:items-start md:text-left">
            <span className="uppercase font-poppins font-semibold text-[14px]">
              YOUR ACCOUNT
            </span>
            <nav className=" text-[12px]  links mt-[16px] flex flex-col gap-[12px] text-center md:text-left font-poppins">
              <a href="/en/en/newsletter/">Subscribe to our newsletter</a>
              <a href="/en/en/gift-card/">Gift Card</a>
              <a href="/en/en/accounts/register/">Register</a>
              <a href="/en/en/accounts/login/">Log in</a>
            </nav>
          </li>


        </ul>
        <LangSelector />

        {/* Newsletter */}
        <div className="newsletter pl-5 flex flex-col items-center text-center gap-[16px] mb-[64px]
                        lg:mb-0 lg:items-start lg:text-left lg:max-w-[296px] lg:[grid-area:1/5/1/6] lg:ml-auto">
          <span className="newsletter__title uppercase font-poppins font-semibold text-[14px] leading-[22px]">
            Subscribe to our newsletter
          </span>
          <a
            title="Subscribe now"
            className="font-kave-haffertext text-[14px]  border border-[var(--color-neutral-100)] text-[var(--color-neutral-100)] px-7 py-[10px]  hover:bg-[var(--color-neutral-20)] transition w-full max-w-[300px] text-center"
            href="/en/en/newsletter"
          >
            Subscribe now
          </a>


        </div>

      </nav>

      {/* Social + Payments */}
      <div
        className="social-payments grid grid-cols-1 items-center gap-[24px] px-[32px] pt-[32px] pb-[24px] border-y border-neutral-30/60
                    md:grid-cols-2 md:px-[80px] md:py-[24px]
                    xl:flex xl:flex-wrap xl:justify-end xl:gap-[40px] xl:px-[96px] xl:py-[16px]"
      >
        <nav className="flex gap-4 justify-center md:justify-start">
          {[
            ["Instagram", "https://www.instagram.com/kavehome/"],
            ["Pinterest", "https://www.pinterest.it/KaveHomeEN/_saved/"],
            ["Facebook", "https://www.facebook.com/kavehomeES/"],
            ["Linkedin", "https://www.linkedin.com/company/kave-home"],
            ["Twitter", "https://twitter.com/KaveHome"],
          ].map(([name, href]) => (
            <a key={name} href={href} title={name}>
              <img
                alt={name}
                width="24"
                height="24"
                src={`https://d.media.kavehome.com/image/fetch/https://media.kavehome.com/media/menu_items/${name.toLowerCase()}-kavehome.png?w=48&q=75`}
              />
            </a>
          ))}
        </nav>

        <div className="payments flex justify-center items-center gap-[12px] h-[20px] md:justify-end">
          {["Mastercard", "Visa", "AExpress", "MicrosoftTeams-image_8", "MicrosoftTeams-image_7", "givex"].map((p) => (
            <img
              key={p}
              alt={p}
              className="h-[20px] w-auto"
              src={`https://d.media.kavehome.com/image/fetch/https://media.kavehome.com/media/images/payments/${p}.png`}
            />
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div
        className=" flex flex-col justify-between  
                    px-[32px] md:px-[80px] xl:px-[96px] py-[16px] gap-3 
                    text-[12px] leading-[18px] text-[var(--color-neutral-70)] font-poppins"
      >
        <ul className="links flex flex-wrap gap-3 text-[var(--color-neutral-80)] py-2 font-poppins text-[12px] font-[500]">
          {[
            ["Sustainability reports", "/en/en/e/sustainability-reports"],
            ["FSC® Policy", "/en/en/e/fsc-policy/"],
            ["Ethics Channel", "https://kavehome.integrityline.com/?lang=en"],
            [
              "Code of Ethics",
              "https://d.media.kavehome.com/image/upload/v1757072532/codigo-etico/2025-02-26_KAVE_HOME_-_Co%CC%81digo_E%CC%81tico_v.f_enGB.pdf",
            ],
            ["Terms & conditions", "/en/en/e/terms-conditions/"],
            ["Legal notice", "/en/en/e/legal-notice/"],
            ["Privacy policy", "/en/en/e/privacy-policy/"],
            ["Cookies policy", "/en/en/e/cookies-policy"],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} className="hover:opacity-80">
                {label}
              </a>
            </li>
          ))}
          <li>
            <button type="button" className="hover:opacity-80">
              Cookies settings
            </button>
          </li>

        </ul>
        <div className="copyright font-medium md:text-left text-center  flex-col md:items-end leading-tight text-[var(--color-neutral-70)] font-poppins text-[10px]">
          <span>© Copyright 2025 Kave Home, S.L.U. - kavehome.com</span>
          <span>
            "Kave Home®", "Kave®" and all its logos are registered trademarks of Kave Home, S.L.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
