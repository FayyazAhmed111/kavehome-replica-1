// components/LangSelector.jsx
"use client"
import { useEffect, useRef, useState } from "react"

export default function LangSelector({
    countryName = "International",
    currentLang = "English",
    inFooter = false,
}) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const onDoc = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener("mousedown", onDoc)
        return () => document.removeEventListener("mousedown", onDoc)
    }, [])

    const wrapper =
        `
      flex ${inFooter ? "justify-center" : "justify-start"}
      md:justify-end items-center gap-4 py-2 md:py-0
      relative
      lg:[grid-area:1/5/1/6] lg:[height:min-content] lg:mt-[130px] pe-20
      text-neutral-900
    `.replace(/\s+/g, " ").trim()

    const languages = [
        { label: "English", href: "/en/en" },

    ]

    return (
        <div className={wrapper} ref={ref} >
            {/* globe */}
            <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="shrink-0"
            >
                <path
                    d="M14 8C14 11.3137 11.3137 14 8 14M14 8C14 4.68629 11.3137 2 8 2M14 8H2M8 14C4.68629 14 2 11.3137 2 8M8 14C8 14 10.6667 12 10.6667 8C10.6667 4 8 2 8 2M8 14C8 14 5.33333 12 5.33333 8C5.33333 4 8 2 8 2M2 8C2 4.68629 4.68629 2 8 2"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                />
            </svg>

            {/* country */}
            <span className="text-[12px] leading-[18px]">{countryName}</span>

            {/* current language + chevron */}
            <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex  items-center gap-2 text-[12px] leading-[18px] hover:text-neutral-700"
            >
                <span>{currentLang}</span>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                >
                    <path
                        d="M6.35355 8.64645a.5.5 0 0 0-.7071.7071L12 15.7071l6.3536-6.35355a.5.5 0 1 0-.7072-.7071L12 14.2929 6.35355 8.64645Z"
                        fill="currentColor"
                    />
                </svg>
            </button>

            {/* dropdown */}
            {open && (
                <ul
                    role="listbox"
                    className="
            absolute right-0 top-full mt-2 min-w-[200px]
            rounded-md border border-neutral-200 bg-white shadow-lg
            overflow-hidden
          "
                >
                    {languages.map((x) => (
                        <li key={x.href}>
                            <a
                                href={x.href}
                                role="option"
                                className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-100"
                                onClick={() => setOpen(false)}
                            >
                                {x.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
