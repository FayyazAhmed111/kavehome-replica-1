"use client"

import { useState, useEffect } from "react"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

function XIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

function PlusIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}

function MinusIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    )
}

const filterSections = [
    { id: "measurements", label: "MEASUREMENTS" },
    { id: "3dview", label: "3D VIEW" },
    { id: "productType", label: "PRODUCT TYPE" },
    { id: "colour", label: "COLOUR" },
    { id: "material", label: "MATERIAL" },
    { id: "styles", label: "STYLES" },
    { id: "areas", label: "AREAS" },
    { id: "price", label: "PRICE" },
]

export function FilterDrawer({ children }) {
    const [sortBy, setSortBy] = useState("relevancy")
    const [inStock, setInStock] = useState(false)
    const [openSections, setOpenSections] = useState({
        sortBy: true,
    })
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            // Get current scroll position
            const scrollY = window.scrollY

            // Lock body scroll
            document.body.style.position = "fixed"
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = "100%"
            document.body.style.overflow = "hidden"
        } else {
            // Get the scroll position
            const scrollY = document.body.style.top

            // Restore body scroll
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.width = ""
            document.body.style.overflow = ""

            // Restore scroll position
            if (scrollY) {
                window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
            }
        }

        return () => {
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.width = ""
            document.body.style.overflow = ""
        }
    }, [isOpen])

    const toggleSection = (id) => {
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent className="right-0 top-0 z-[1000] fixed h-full w-full min-w-[720px] rounded-none border-l bg-white shadow-xl p-0">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-[120px] pt-[64px] pb-4">
                        <h2 className="text-base font-kave-haffertext tracking-tight">Filters</h2>
                        <DrawerClose className="rounded-sm opacity-70 transition-opacity hover:opacity-100">
                            <XIcon />
                            <span className="sr-only">Close</span>
                        </DrawerClose>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="px-[120px]">
                            <div className="border-b py-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-xs font-semibold uppercase tracking-wider">SORT BY</h3>
                                    <button
                                        onClick={() => toggleSection("sortBy")}
                                        className="text-neutral-500 transition-colors hover:text-neutral-900"
                                    >
                                        {openSections.sortBy ? <MinusIcon /> : <PlusIcon />}
                                    </button>
                                </div>
                                {openSections.sortBy && (
                                    <RadioGroup value={sortBy} onValueChange={setSortBy} className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="relevancy" id="relevancy" />
                                            <Label htmlFor="relevancy" className="cursor-pointer text-sm font-normal">
                                                Relevancy
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="price-high" id="price-high" />
                                            <Label htmlFor="price-high" className="cursor-pointer text-sm font-normal">
                                                Price high to low
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="price-low" id="price-low" />
                                            <Label htmlFor="price-low" className="cursor-pointer text-sm font-normal">
                                                Price low to high
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="newest" id="newest" />
                                            <Label htmlFor="newest" className="cursor-pointer text-sm font-normal">
                                                Newest
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="bestsellers" id="bestsellers" />
                                            <Label htmlFor="bestsellers" className="cursor-pointer text-sm font-normal">
                                                Bestsellers
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="discount" id="discount" />
                                            <Label htmlFor="discount" className="cursor-pointer text-sm font-normal">
                                                Discount highest to lowest
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                )}
                            </div>

                            {filterSections.map((section) => (
                                <Collapsible
                                    key={section.id}
                                    open={openSections[section.id]}
                                    onOpenChange={() => toggleSection(section.id)}
                                >
                                    <div className="border-b py-6">
                                        <CollapsibleTrigger className="flex w-full items-center justify-between">
                                            <h3 className="text-xs font-semibold uppercase tracking-wider">{section.label}</h3>
                                            <span className="text-neutral-500 transition-colors hover:text-neutral-900">
                                                {openSections[section.id] ? <MinusIcon /> : <PlusIcon />}
                                            </span>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="pt-4">
                                            <div className="text-sm text-neutral-600">Filter options for {section.label.toLowerCase()}</div>
                                        </CollapsibleContent>
                                    </div>
                                </Collapsible>
                            ))}

                            <div className="py-6">
                                <div className="flex items-center space-x-3">
                                    <Checkbox id="in-stock" checked={inStock} onCheckedChange={(checked) => setInStock(!!checked)} />
                                    <Label htmlFor="in-stock" className="cursor-pointer text-sm font-normal">
                                        In stock
                                    </Label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t px-[120px] py-[32px]">
                        <div className="flex gap-3">
                            <button className="flex-1 rounded border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50">
                                Clear filters
                            </button>
                            <button className="flex-1 rounded bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
                                See results (543)
                            </button>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
