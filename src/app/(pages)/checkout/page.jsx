// "use client"

// import { useState } from "react"
// import { ShoppingBag, Lock, ChevronDown, Info } from "lucide-react"
// import Image from "next/image"

// export default function CheckoutPage() {
//   const [hasConfirmedDelivery, setHasConfirmedDelivery] = useState(false)
//   const [activeTab, setActiveTab] = useState("delivery")

//   // Initial delivery selection state
//   const [country, setCountry] = useState("")
//   const [postalCode, setPostalCode] = useState("")
//   const [selectedCity, setSelectedCity] = useState("")
//   const [customCity, setCustomCity] = useState("")
//   const [showCityInput, setShowCityInput] = useState(false)

//   // Cities based on postal code
//   const citiesByPostalCode = {
//     "1111": ["Muhammad Adil", "Other"],
//     "33333": ["Tallinn", "Tartu", "Other"],
//   }

//   const availableCities = citiesByPostalCode[postalCode] || []

//   const handleCityChange = (city) => {
//     setSelectedCity(city)
//     if (city === "Other") {
//       setShowCityInput(true)
//       setCustomCity("")
//     } else {
//       setShowCityInput(false)
//       setCustomCity("")
//     }
//   }

//   // Form state for Addresses tab
//   const [formData, setFormData] = useState({
//     country: "Estonia",
//     name: "",
//     surname: "",
//     town: "",
//     street: "",
//     floor: "",
//     province: "",
//     countryCode: "+372",
//     phone: "",
//     projectRef: "",
//     differentBilling: false,
//   })

//   const [selectedDelivery, setSelectedDelivery] = useState("home-standard")
//   const [expandMoreOptions, setExpandMoreOptions] = useState(false)
//   const [sendLater, setSendLater] = useState(false)

//   const cartItems = [
//     {
//       id: 1,
//       name: "Laira 3-seater sofa bed with right chaise longue in ecru chenille 246cm FSC Mix Credit",
//       sku: "S00037LG39",
//       price: "2,035 €",
//       image:
//         "https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_4:5,f_auto/v1740482374/products/S00037LG39_1V01.jpg",
//       units: 1,
//     },
//     {
//       id: 2,
//       name: "Veliro green velvet 3-seater sofa with black steel legs 240cm FSC Mix Credit",
//       sku: "S81330ZF06",
//       price: "1,695 €",
//       image:
//         "https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_4:5,f_auto/v1753360650/products/S81330ZF06_1V01.jpg",
//       units: 1,
//     },
//   ]

//   const handleFormChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   // const handleConfirmDelivery = () => {
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     country: country,
//   //     town: showCityInput ? customCity : selectedCity,
//   //   }))
//   //   setHasConfirmedDelivery(true)
//   //   setActiveTab("delivery")
//   // }
//   const handleConfirmDelivery = () => {
//     setFormData((prev) => ({
//       ...prev,
//       country: country,
//       town: showCityInput ? customCity : selectedCity,
//     }))
//     setHasConfirmedDelivery(true)
//     setActiveTab("addresses") // ← this moves to the next tab
//   }


//   const handleNextTab = () => {
//     if (activeTab === "delivery") setActiveTab("addresses")
//     else if (activeTab === "addresses") setActiveTab("payment")
//   }

//   const handlePrevTab = () => {
//     if (activeTab === "addresses") setActiveTab("delivery")
//     else if (activeTab === "payment") setActiveTab("addresses")
//   }

//   if (!hasConfirmedDelivery) {
//     return (
//       <>

//         <header className=" md:items-center md:bg-white md:p-[24px] justify-between flex ">
//           <a href="/en/en" className="inline-flex">
//             <Image
//               src="/images/kavhome-logoo.png"
//               width={150}
//               height={150}
//               alt="Kave Home logo"
//               className="object-contain"
//             />
//           </a>
//           <div className="flex items-center gap-2 text-xs font-kave-haffertext font-light text-neutral-600">
//             <div class="w-6 h-6 text-gray-500">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 stroke="currentColor"
//                 stroke-width="1.5"
//               >
//                 <path
//                   d="M15.05 9.11L10.84 13.3L8.94998 11.43M18.17 16.25C18.71 15.78 19.02 15.09 19.02 14.37V4.63L11.99 3L4.97998 4.63V14.38C4.97998 15.1 5.28998 15.78 5.82998 16.25L11.99 21L18.17 16.25Z"
//                   stroke-linecap="round"
//                 />
//               </svg>
//             </div>
//             <span>Secure payment</span>
//           </div>
//         </header>
//         <main className="md:grid  md:grid-cols-[60%_40%] md:m-auto m-0 md:max-w-[1460px] min-h-[600px] bg-white">
//           {/* Header */}

//           {/* LEFT: Initial Delivery Selection */}
//           <div className="md:p-[48px]  md:row-start-1 border-r  border-[#f0efeb]">
//             <nav className="mb-8 flex items-center gap-2 text-xs text-neutral-600">
//               <span className="text-neutral-900 font-medium">Delivery</span>
//               <span>›</span>
//               <span className="text-neutral-400">Addresses</span>
//               <span>›</span>
//               <span className="text-neutral-400">Payment</span>
//             </nav>

//             <div className="space-y-6">
//               <div>
//                 <p className="text-sm text-neutral-600 mb-4">
//                   Send to: <span className="font-medium text-neutral-900">International</span>
//                 </p>
//                 <p className="text-xs text-neutral-600 mb-6">
//                   Type in your post code to show the delivery methods available in your area.
//                 </p>
//               </div>

//               {/* Country Dropdown */}
//               <div>
//                 <label className="block text-sm font-medium text-neutral-900 mb-2">Country</label>
//                 <select
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                   className="w-full px-4 py-3 border border-neutral-300 rounded text-sm text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                 >
//                   <option value="">Select a country</option>
//                   <option value="Denmark">Denmark</option>
//                   <option value="Estonia">Estonia</option>
//                   <option value="Czech Republic">Czech Republic</option>
//                 </select>
//               </div>

//               {/* Postal Code Input */}
//               <div>
//                 <label className="block text-sm font-medium text-neutral-900 mb-2">Postal code</label>
//                 <input
//                   type="text"
//                   value={postalCode}
//                   onChange={(e) => setPostalCode(e.target.value)}
//                   placeholder="1111"
//                   className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                 />
//               </div>

//               {/* City Dropdown - Only show if postal code is entered */}
//               {postalCode && availableCities.length > 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-neutral-900 mb-2">Select town or city</label>
//                   <select
//                     value={selectedCity}
//                     onChange={(e) => handleCityChange(e.target.value)}
//                     className={`w-full px-4 py-3 border rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 ${selectedCity === "Other" ? "border-neutral-900 border-2" : "border-neutral-300"
//                       }`}
//                   >
//                     <option value="">Select a city</option>
//                     {availableCities.map((city) => (
//                       <option key={city} value={city}>
//                         {city}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               {/* Custom City Input - Only show if "Other" is selected */}
//               {showCityInput && (
//                 <div>
//                   <label className="block text-sm font-medium text-neutral-900 mb-2">City</label>
//                   <input
//                     type="text"
//                     value={customCity}
//                     onChange={(e) => setCustomCity(e.target.value)}
//                     placeholder="Enter city name"
//                     className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                   />
//                 </div>
//               )}

//               {/* Action Buttons */}
//               <div className="flex gap-4 pt-4">
//                 <button className="px-6 py-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors underline hover:no-underline">
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleConfirmDelivery}
//                   disabled={!country || !postalCode || !selectedCity}
//                   className="px-8 py-2 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>

//           <aside className="md:bg-white h-[fit-content] left-auto p-[48px] sticky right-auto top-0">
//             {/* Sidebar Header */}
//             <div className="mb-6 pb-4 border-b border-neutral-200">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <ShoppingBag size={20} className="text-neutral-900" />
//                   <span className="text-sm font-medium text-neutral-900">Shopping bag (2)</span>
//                 </div>
//                 <a href="#" className="text-xs font-medium text-neutral-900 underline hover:no-underline">
//                   Edit
//                 </a>
//               </div>
//               <div className="text-right">
//                 <div className="text-2xl font-light text-neutral-900">3,730 €</div>
//               </div>
//             </div>

//             {/* Cart Items */}
//             <div className="mb-6 space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex gap-3 pb-4 border-b border-neutral-200">
//                   <div className="w-20 h-24 flex-shrink-0 bg-neutral-100 rounded overflow-hidden">
//                     <img
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xs font-medium text-neutral-900 line-clamp-2 mb-1">{item.name}</h3>
//                       <p className="text-xs text-neutral-600 mb-1">{item.sku}</p>
//                       <p className="text-xs text-neutral-900">
//                         <strong>{item.price}/u.</strong>
//                       </p>
//                       <p className="text-xs text-neutral-600 mt-1">
//                         <strong>Units: {item.units}</strong>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right flex-shrink-0">
//                     <p className="text-sm font-medium text-neutral-900">{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* More Details Link */}
//             <div className="mb-6">
//               <a href="#" className="text-xs font-medium text-neutral-900 underline hover:no-underline">
//                 More details
//               </a>
//             </div>

//             {/* Shipping Costs */}
//             <div className="mb-4 pb-4 border-b border-neutral-200 flex justify-between items-center">
//               <span className="text-sm text-neutral-600">Shipping costs</span>
//               <span className="text-sm font-medium text-neutral-900">--</span>
//             </div>

//             {/* Total */}
//             <div className="mb-6 pb-6 border-b border-neutral-200">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-sm font-medium text-neutral-900">Total</p>
//                   <p className="text-xs text-neutral-600">Taxes included</p>
//                 </div>
//                 <p className="text-2xl font-light text-neutral-900">3,730 €</p>
//               </div>
//             </div>

//             {/* Security Badge */}
//             <div className=" border-neutral-200 rounded p-4 flex justify-center text-center">
//               {/* <div className="flex gap-3"> */}
//               {/* <div class="w-6 h-6 text-gray-500">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     stroke="currentColor"
//                     stroke-width="1.5"
//                   >
//                     <path
//                       d="M15.05 9.11L10.84 13.3L8.94998 11.43M18.17 16.25C18.71 15.78 19.02 15.09 19.02 14.37V4.63L11.99 3L4.97998 4.63V14.38C4.97998 15.1 5.28998 15.78 5.82998 16.25L11.99 21L18.17 16.25Z"
//                       stroke-linecap="round"
//                     />
//                   </svg>
//                 </div> */}
//               <div>
//                 <div className="flex justify-center gap-1 items-center">
//                   <div class="w-5 h-5 text-gray-500">
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       stroke="currentColor"
//                       stroke-width="1.5"
//                     >
//                       <path
//                         d="M15.05 9.11L10.84 13.3L8.94998 11.43M18.17 16.25C18.71 15.78 19.02 15.09 19.02 14.37V4.63L11.99 3L4.97998 4.63V14.38C4.97998 15.1 5.28998 15.78 5.82998 16.25L11.99 21L18.17 16.25Z"
//                         stroke-linecap="round"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-xs font-semibold text-neutral-900 mb-1">
//                     PAYMENT 100% SECURE AND EASY
//                   </p>
//                 </div>
//                 <p className="text-xs text-neutral-600">
//                   Your payment will be processed through a connection protected by an SSL certificate.
//                 </p>
//               </div>
//             </div>
//           </aside>
//         </main>
//       </>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className=" md:items-center md:bg-white md:p-[24px] justify-between flex ">
//         <a href="/en/en" className="inline-flex">
//           <Image
//             src="/images/kavhome-logoo.png"
//             width={150}
//             height={150}
//             alt="Kave Home logo"
//             className="object-contain"
//           />
//         </a>
//         <div className="flex items-center gap-2 text-xs font-kave-haffertext font-light text-neutral-600">
//           <div class="w-6 h-6 text-gray-500">
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               stroke="currentColor"
//               stroke-width="1.5"
//             >
//               <path
//                 d="M15.05 9.11L10.84 13.3L8.94998 11.43M18.17 16.25C18.71 15.78 19.02 15.09 19.02 14.37V4.63L11.99 3L4.97998 4.63V14.38C4.97998 15.1 5.28998 15.78 5.82998 16.25L11.99 21L18.17 16.25Z"
//                 stroke-linecap="round"
//               />
//             </svg>
//           </div>
//           <span>Secure payment</span>
//         </div>
//       </header>

//       {/* Tab Navigation */}

//       <div className="flex flex-col lg:flex-row gap-8 px-4 py-8 md:px-6 lg:px-10 max-w-7xl mx-auto">
//         {/* LEFT: Checkout Form */}
//         <div className="flex-1 lg:max-w-2xl">
//           {/* Breadcrumb */}
//           <nav className="mb-8 flex items-center gap-2 text-xs text-neutral-600">
//             <button
//               onClick={() => setActiveTab("delivery")}
//               disabled={activeTab === "delivery"}
//               className={`transition-colors ${activeTab === "delivery" ? "text-neutral-900 font-medium" : ""} ${activeTab !== "delivery" ? "hover:text-neutral-900 cursor-pointer" : "cursor-not-allowed opacity-60"}`}
//             >
//               Delivery
//             </button>
//             <span>›</span>
//             <button
//               onClick={() => activeTab !== "delivery" && setActiveTab("addresses")}
//               disabled={activeTab === "delivery"}
//               className={`transition-colors ${activeTab === "addresses" ? "text-neutral-900 font-medium" : ""} ${activeTab !== "delivery" ? "hover:text-neutral-900 cursor-pointer" : "cursor-not-allowed opacity-60"}`}
//             >
//               Addresses
//             </button>
//             <span>›</span>
//             <button
//               onClick={() => activeTab !== "delivery" && setActiveTab("payment")}
//               disabled={activeTab === "delivery"}
//               className={`transition-colors ${activeTab === "payment" ? "text-neutral-900 font-medium" : ""} ${activeTab !== "delivery" ? "hover:text-neutral-900 cursor-pointer" : "cursor-not-allowed opacity-60"}`}
//             >
//               Payment
//             </button>
//           </nav>

//           {/* DELIVERY TAB */}
//           {activeTab === "delivery" && (
//             <div className="space-y-6">
//               <div>
//                 <p className="text-sm text-neutral-600 mb-4">
//                   Send to: <span className="font-medium text-neutral-900">International</span>
//                 </p>
//                 <p className="text-xs text-neutral-600 mb-6">
//                   Type in your post code to show the delivery methods available in your area.
//                 </p>
//               </div>

//               {/* Country Dropdown */}
//               <div>
//                 <label className="block text-sm font-medium text-neutral-900 mb-2">Country</label>
//                 <select
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                   className="w-full px-4 py-3 border border-neutral-300 rounded text-sm text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                 >
//                   <option value="">Select a country</option>
//                   <option value="Denmark">Denmark</option>
//                   <option value="Estonia">Estonia</option>
//                   <option value="Czech Republic">Czech Republic</option>
//                 </select>
//               </div>

//               {/* Postal Code Input */}
//               <div>
//                 <label className="block text-sm font-medium text-neutral-900 mb-2">Postal code</label>
//                 <input
//                   type="text"
//                   value={postalCode}
//                   onChange={(e) => setPostalCode(e.target.value)}
//                   placeholder="1111"
//                   className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                 />
//               </div>

//               {/* City Dropdown - Only show if postal code is entered */}
//               {postalCode && availableCities.length > 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-neutral-900 mb-2">Select town or city</label>
//                   <select
//                     value={selectedCity}
//                     onChange={(e) => handleCityChange(e.target.value)}
//                     className={`w-full px-4 py-3 border rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 ${selectedCity === "Other" ? "border-neutral-900 border-2" : "border-neutral-300"
//                       }`}
//                   >
//                     <option value="">Select a city</option>
//                     {availableCities.map((city) => (
//                       <option key={city} value={city}>
//                         {city}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               {/* Custom City Input - Only show if "Other" is selected */}
//               {showCityInput && (
//                 <div>
//                   <label className="block text-sm font-medium text-neutral-900 mb-2">City</label>
//                   <input
//                     type="text"
//                     value={customCity}
//                     onChange={(e) => setCustomCity(e.target.value)}
//                     placeholder="Enter city name"
//                     className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                   />
//                 </div>
//               )}

//               {/* Action Buttons */}
//               <div className="flex gap-4 pt-4">
//                 <button className="px-6 py-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors underline hover:no-underline">
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleConfirmDelivery}
//                   disabled={!country || !postalCode || !selectedCity}
//                   className="px-8 py-2 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* ADDRESSES TAB */}
//           {activeTab === "addresses" && (
//             <div className="space-y-6">
//               {/* My Details */}
//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-5 h-5 bg-neutral-200 rounded"></div>
//                   <h3 className="text-sm font-medium text-neutral-900">My details</h3>
//                 </div>
//                 <p className="text-xs text-neutral-600">thecifilledstore</p>
//                 <p className="text-xs text-neutral-600">thecifilledstore@gmail.com</p>
//               </div>

//               {/* Shipping Section */}
//               <div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-5 h-5 bg-neutral-200 rounded"></div>
//                   <h3 className="text-sm font-semibold text-neutral-900">SHIPPING</h3>
//                 </div>

//                 <div className="space-y-4">
//                   {/* Country */}
//                   <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">Country</label>
//                     <select
//                       value={formData.country}
//                       onChange={(e) => handleFormChange("country", e.target.value)}
//                       className="w-full px-4 py-3 border border-neutral-300 rounded text-sm text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                     >
//                       <option>Estonia</option>
//                       <option>Czech Republic</option>
//                       <option>Slovakia</option>
//                     </select>
//                   </div>

//                   {/* Name and Surname */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-neutral-900 mb-2">Name</label>
//                       <input
//                         type="text"
//                         value={formData.name}
//                         onChange={(e) => handleFormChange("name", e.target.value)}
//                         className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-neutral-900 mb-2">Surname</label>
//                       <input
//                         type="text"
//                         value={formData.surname}
//                         onChange={(e) => handleFormChange("surname", e.target.value)}
//                         className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                       />
//                     </div>
//                   </div>

//                   {/* Town/City */}
//                   <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">Town / City:</label>
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-neutral-900">{formData.town}</span>
//                       <button
//                         onClick={() => setActiveTab("delivery")}
//                         className="text-xs font-medium text-neutral-900 underline hover:no-underline"
//                       >
//                         Change
//                       </button>
//                     </div>
//                   </div>

//                   {/* Street and number */}
//                   <div>
//                     <label className="block text-sm font-medium text-neutral-900 mb-2">Street and number</label>
//                     <input
//                       type="text"
//                       value={formData.street}
//                       onChange={(e) => handleFormChange("street", e.target.value)}
//                       className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                     />
//                   </div>

//                   {/* Floor, door, block, company */}
//                   <div>
//                     <div className="flex items-center justify-between mb-2">
//                       <label className="text-sm font-medium text-neutral-900">Floor, door, block, company</label>
//                       <span className="text-xs text-neutral-600">Optional</span>
//                     </div>
//                     <input
//                       type="text"
//                       value={formData.floor}
//                       onChange={(e) => handleFormChange("floor", e.target.value)}
//                       className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                     />
//                   </div>

//                   {/* Province */}
//                   <div>
//                     <div className="flex items-center justify-between mb-2">
//                       <label className="text-sm font-medium text-neutral-900">Province</label>
//                       <span className="text-xs text-neutral-600">Optional</span>
//                     </div>
//                     <input
//                       type="text"
//                       value={formData.province}
//                       onChange={(e) => handleFormChange("province", e.target.value)}
//                       className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                     />
//                   </div>

//                   {/* Country calling code and Phone */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-neutral-900 mb-2">Country calling code</label>
//                       <select
//                         value={formData.countryCode}
//                         onChange={(e) => handleFormChange("countryCode", e.target.value)}
//                         className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                       >
//                         <option>+372</option>
//                         <option>+420</option>
//                         <option>+421</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-neutral-900 mb-2">Phone</label>
//                       <input
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) => handleFormChange("phone", e.target.value)}
//                         className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                       />
//                     </div>
//                   </div>
//                   <p className="text-xs text-neutral-600">
//                     We'll only contact you if it's necessary during the delivery.
//                   </p>
//                 </div>
//               </div>

//               {/* Billing Section */}
//               <div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-5 h-5 bg-neutral-200 rounded"></div>
//                   <h3 className="text-sm font-semibold text-neutral-900">BILLING</h3>
//                 </div>
//                 <label className="flex items-center gap-2 text-sm text-neutral-900">
//                   <input
//                     type="checkbox"
//                     checked={formData.differentBilling}
//                     onChange={(e) => handleFormChange("differentBilling", e.target.checked)}
//                     className="w-4 h-4 border border-neutral-300 rounded"
//                   />
//                   I want to enter a different billing address.
//                 </label>
//               </div>

//               {/* Project ref */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <label className="text-sm font-medium text-neutral-900">Project ref.</label>
//                   <span className="text-xs text-neutral-600">Optional</span>
//                 </div>
//                 <input
//                   type="text"
//                   value={formData.projectRef}
//                   onChange={(e) => handleFormChange("projectRef", e.target.value)}
//                   className="w-full px-4 py-3 border border-neutral-300 rounded text-sm hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
//                 />
//                 <p className="text-xs text-neutral-600 mt-2">
//                   This information will appear in your invoice. Maximum 35 characters
//                 </p>
//               </div>

//               {/* Terms and Conditions */}
//               <div>
//                 <label className="flex items-start gap-2 text-xs text-neutral-900">
//                   <input type="checkbox" className="w-4 h-4 border border-neutral-300 rounded mt-0.5" />
//                   <span>
//                     I've read and accepted the{" "}
//                     <a href="#" className="underline hover:no-underline">
//                       Privacy Policy
//                     </a>{" "}
//                     and{" "}
//                     <a href="#" className="underline hover:no-underline">
//                       Terms & Conditions
//                     </a>
//                   </span>
//                 </label>
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex gap-4 pt-4">
//                 <button
//                   onClick={handlePrevTab}
//                   className="px-6 py-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors underline hover:no-underline"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleNextTab}
//                   className="px-8 py-2 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* PAYMENT TAB */}
//           {activeTab === "payment" && (
//             <div className="space-y-6">
//               {/* Send To */}
//               <div>
//                 <p className="text-sm font-medium text-neutral-900 mb-2">Send to:</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-neutral-900">11111 abc, Estonia</span>
//                   <button className="text-xs font-medium text-neutral-900 underline hover:no-underline">Change</button>
//                 </div>
//               </div>

//               {/* Delivery Method */}
//               <div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-5 h-5 bg-neutral-200 rounded"></div>
//                   <h3 className="text-sm font-semibold text-neutral-900">DELIVERY METHOD</h3>
//                 </div>

//                 {/* Info Alert */}
//                 <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4 flex gap-3">
//                   <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="text-xs font-medium text-blue-900 mb-1">
//                       This order contains one or more bulky products.
//                     </p>
//                     <p className="text-xs text-blue-800 mb-1">
//                       For optimal delivery, we suggest you check the dimensions of the packages.
//                     </p>
//                     <a href="#" className="text-xs font-medium text-blue-600 underline hover:no-underline">
//                       See details
//                     </a>
//                   </div>
//                 </div>

//                 {/* Delivery Options */}
//                 <div className="space-y-4">
//                   {/* Home Standard */}
//                   <label className="flex items-start gap-3 p-4 border border-neutral-300 rounded cursor-pointer hover:border-neutral-400 transition-colors">
//                     <input
//                       type="radio"
//                       name="delivery"
//                       value="home-standard"
//                       checked={selectedDelivery === "home-standard"}
//                       onChange={(e) => setSelectedDelivery(e.target.value)}
//                       className="w-4 h-4 mt-1"
//                     />
//                     <div className="flex-1">
//                       <p className="text-sm font-medium text-neutral-900 mb-1">
//                         Home Standard. Delivery at street level without appointment.
//                       </p>
//                       <p className="text-xs text-neutral-600 mb-2">
//                         Delivery expected approximately between 05/11 and 07/11
//                       </p>
//                       <p className="text-xs text-neutral-600 mb-2">
//                         Assembly and dismantling not included. Delivery from Monday to Friday.
//                       </p>
//                       <button
//                         onClick={() => setExpandMoreOptions(!expandMoreOptions)}
//                         className="text-xs font-medium text-neutral-900 underline hover:no-underline"
//                       >
//                         {expandMoreOptions ? "Show less" : "Show more"}
//                       </button>
//                     </div>
//                     <span className="text-sm font-medium text-neutral-900 flex-shrink-0">30 €</span>
//                   </label>
//                 </div>

//                 {/* More Delivery Options */}
//                 <button
//                   onClick={() => setExpandMoreOptions(!expandMoreOptions)}
//                   className="mt-4 flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors"
//                 >
//                   More delivery options
//                   <ChevronDown size={16} className={`transition-transform ${expandMoreOptions ? "rotate-180" : ""}`} />
//                 </button>

//                 {/* Send Later Option */}
//                 <div className="mt-6">
//                   <label className="flex items-center gap-2 text-sm text-neutral-900">
//                     <input
//                       type="checkbox"
//                       checked={sendLater}
//                       onChange={(e) => setSendLater(e.target.checked)}
//                       className="w-4 h-4 border border-neutral-300 rounded"
//                     />
//                     I want my order to be sent later.
//                   </label>
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex gap-4 pt-4">
//                 <button
//                   onClick={handlePrevTab}
//                   className="px-6 py-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors underline hover:no-underline"
//                 >
//                   Back
//                 </button>
//                 <button className="px-8 py-2 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors">
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* RIGHT: Shopping Bag Sidebar */}
//         <div className="w-full lg:w-96 lg:sticky lg:top-8 lg:h-fit">
//           {/* Sidebar Header */}
//           <div className="mb-6 pb-4 border-b border-neutral-200">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-2">
//                 <ShoppingBag size={20} className="text-neutral-900" />
//                 <span className="text-sm font-medium text-neutral-900">
//                   Shopping bag ({activeTab === "payment" ? "1" : "2"})
//                 </span>
//               </div>
//               <a href="#" className="text-xs font-medium text-neutral-900 underline hover:no-underline">
//                 Edit
//               </a>
//             </div>
//             <div className="text-right">
//               <div className="text-2xl font-light text-neutral-900">
//                 {activeTab === "payment" ? "2,065 €" : "3,730 €"}
//               </div>
//             </div>
//           </div>

//           {/* Cart Items */}
//           <div className="mb-6 space-y-4">
//             {cartItems.map((item, idx) => {
//               if (activeTab === "payment" && idx === 1) return null
//               return (
//                 <div key={item.id} className="flex gap-3 pb-4 border-b border-neutral-200">
//                   <div className="w-20 h-24 flex-shrink-0 bg-neutral-100 rounded overflow-hidden">
//                     <img
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xs font-medium text-neutral-900 line-clamp-2 mb-1">{item.name}</h3>
//                       <p className="text-xs text-neutral-600 mb-1">{item.sku}</p>
//                       <p className="text-xs text-neutral-900">
//                         <strong>{item.price}/u.</strong>
//                       </p>
//                       <p className="text-xs text-neutral-600 mt-1">
//                         <strong>Units: {item.units}</strong>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right flex-shrink-0">
//                     <p className="text-sm font-medium text-neutral-900">{item.price}</p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* More Details Link */}
//           <div className="mb-6">
//             <a href="#" className="text-xs font-medium text-neutral-900 underline hover:no-underline">
//               More details
//             </a>
//           </div>

//           {/* Shipping Costs */}
//           <div className="mb-4 pb-4 border-b border-neutral-200 flex justify-between items-center">
//             <span className="text-sm text-neutral-600">Shipping costs</span>
//             <span className="text-sm font-medium text-neutral-900">{activeTab === "payment" ? "30 €" : "--"}</span>
//           </div>

//           {/* Total */}
//           <div className="mb-6 pb-6 border-b border-neutral-200">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm font-medium text-neutral-900">Total</p>
//                 <p className="text-xs text-neutral-600">Taxes included</p>
//               </div>
//               <p className="text-2xl font-light text-neutral-900">{activeTab === "payment" ? "2,065 €" : "3,730 €"}</p>
//             </div>
//           </div>

//           {/* Security Badge */}
//           <div className="bg-neutral-50 border border-neutral-200 rounded p-4">
//             <div className="flex gap-3">
//               <Lock size={20} className="text-neutral-700 flex-shrink-0 mt-0.5" />
//               <div>
//                 <p className="text-xs font-semibold text-neutral-900 mb-1">PAYMENT 100% SECURE AND EASY</p>
//                 <p className="text-xs text-neutral-600">
//                   Your payment will be processed through a connection protected by an SSL certificate.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




"use client"

import { useState } from "react"
import { ShoppingBag, Lock } from "lucide-react"
import Image from "next/image"

export default function CheckoutPage() {
  const [country, setCountry] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [customCity, setCustomCity] = useState("")
  const [showCityInput, setShowCityInput] = useState(false)

  const citiesByPostalCode = {
    "1111": ["Faisalabad", "Other"],
    "33333": ["Tallinn", "Tartu", "Other"],
  }

  const availableCities = citiesByPostalCode[postalCode] || []
  const handleCityChange = (city) => {
    setSelectedCity(city)
    setShowCityInput(city === "Other")
    if (city !== "Other") setCustomCity("")
  }

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    street: "",
    floor: "",
    province: "",
    countryCode: "+92",
    phone: "",
    projectRef: "",
  })

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const cartItems = [
    {
      id: 1,
      name: "Laira 3-seater sofa bed with chaise",
      sku: "S00037LG39",
      price: "2,035 €",
      units: 1,
      image:
        "https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_4:5,f_auto/v1740482374/products/S00037LG39_1V01.jpg",
    },
    // {
    //   id: 2,
    //   name: "Veliro green velvet 3-seater sofa",
    //   sku: "S81330ZF06",
    //   price: "1,695 €",
    //   units: 1,
    //   image:
    //     "https://d.media.kavehome.com/image/upload/w_120,c_pad,ar_4:5,f_auto/v1753360650/products/S81330ZF06_1V01.jpg",
    // },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="flex justify-between items-center p-5">
        <a href="/" className="inline-flex">
          <Image
            src="/images/kavhome-logoo.png"
            width={150}
            height={80}
            alt="Logo"
            className="object-contain"
          />
        </a>

        <div className="flex items-center gap-2 text-xs font-light text-neutral-600">
          <Lock size={18} />
          Secure payment
        </div>
      </header>

      {/* MAIN */}
      <div className="flex flex-col gap-10 max-w-7xl mx-auto p-6">

        {/* ORDER SUMMARY */}
        <div className="border rounded-lg p-4 w-full">
          <div className="border-b pb-2 grid grid-cols-12 text-sm font-medium text-neutral-700">
            <div className="text-lg font-semibold mb-3 col-span-6">Order Summary</div>
            <div className="col-span-2 hidden md:block text-center">Quantity</div>
            <div className="col-span-2 hidden md:block  text-center">Price</div>
            <div className="col-span-2 hidden md:block  text-right">Total</div>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-12 items-center py-4 border-b last:border-0">

              {/* Image */}
              <div className="col-span-4 md:col-span-2">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
              </div>

              {/* Product Info */}
              <div className="col-span-8 md:col-span-4 text-sm">
                <p className="font-medium">{item.name}</p>
                <p className="text-neutral-600">Color: Brown</p>
                <p className="text-neutral-600">Size: M</p>

                {/* Mobile price & qty */}
                <p className="md:hidden text-xs text-neutral-700 mt-1">
                  Qty: {item.units} • Rs {item.price.replace("€", "").replace(",", "")}
                </p>
              </div>

              {/* Desktop Qty */}
              <div className="hidden md:flex col-span-2 justify-center">
                <span className="text-sm">{item.units}</span>
              </div>

              {/* Desktop Price */}
              <div className="hidden md:block col-span-2 text-center text-sm">
                Rs {item.price.replace("€", "").replace(",", "")}
              </div>

              {/* Desktop Total */}
              <div className="hidden md:block col-span-2 text-right font-medium text-sm">
                Rs {item.price.replace("€", "").replace(",", "")}
              </div>
            </div>
          ))}

        </div>


        <div className="grid grid-cols-12 gap-10 max-w-7xl ">

          {/* SHIPPING ADDRESS */}
          <div className="space-y-4 md:col-span-6 col-span-12 border-b pb-8">
            <h2 className="text-lg font-semibold text-neutral-900">Shipping Address</h2>

            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name *"
                value={formData.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
                className="px-4 py-3 border border-neutral-300 rounded text-sm w-full"
              />

              <input
                placeholder="Last Name *"
                value={formData.surname}
                onChange={(e) => handleFormChange("surname", e.target.value)}
                className="px-4 py-3 border border-neutral-300 rounded text-sm w-full"
              />
            </div>

            {/* Email */}
            <input
              placeholder="Email *"
              type="email"
              value={formData.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
            />

            {/* Country */}
            <div>
              <label className="text-xs text-neutral-600">Country *</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
              >
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Estonia">Estonia</option>
                <option value="Czech Republic">Czech Republic</option>
              </select>
            </div>

            {/* Address Line 1 */}
            <input
              placeholder="Address Line 1 *"
              value={formData.street}
              onChange={(e) => handleFormChange("street", e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
            />

            {/* Address Line 2 */}
            <input
              placeholder="Address Line 2"
              value={formData.floor}
              onChange={(e) => handleFormChange("floor", e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
            />

            {/* City */}
            <input
              placeholder="City / Suburb *"
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
            />

            <input
              placeholder="Zip / Postcode *"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
            />

            {/* Phone */}
            <div>
              <input
                placeholder="Mobile Phone *"
                value={formData.phone}
                onChange={(e) => handleFormChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
              />
            </div>
          </div>

          {/* DELIVERY */}
          <div className="space-y-4 border-b pb-8 md:col-span-6 col-span-12">
            <h2 className="text-lg font-semibold text-neutral-900">Delivery Address</h2>

            {/* Radio Options */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="deliveryType"
                  checked={!showCityInput && country === "" && postalCode === ""}
                  onChange={() => {
                    setShowCityInput(false);
                    setCountry("");
                    setPostalCode("");
                    setSelectedCity("");
                  }}
                  className="w-4 h-4"
                />
                Default (same as billing address)
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="deliveryType"
                  checked={country !== "" || postalCode !== "" || selectedCity !== ""}
                  onChange={() => {
                    setCountry("Pakistan");
                  }}
                  className="w-4 h-4"
                />
                Add an alternative delivery address
              </label>
            </div>

            {(country !== "" || postalCode !== "" || selectedCity !== "") && (
              <div className="mt-4 space-y-4">

                <input
                  placeholder="First Name *"
                  className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                />

                <input
                  placeholder="Last Name *"
                  className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                />

                <div>
                  <label className="text-xs text-neutral-600">Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                  >
                    <option value="">Select a country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Czech Republic">Czech Republic</option>
                  </select>
                </div>

                <input
                  placeholder="Address Line 1 *"
                  className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                />

                <input
                  placeholder="Address Line 2"
                  className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                />

                <input
                  placeholder="City / Suburb *"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                />

                <input
                  placeholder="Zip / Postcode *"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                />

                <input
                  placeholder="Mobile Phone *"
                  className="w-full px-4 py-3 border border-neutral-300 rounded text-sm"
                />
              </div>
            )}
          </div>

        </div>


        {/* PAYMENT */}
        <div className="grid grid-cols-12 gap-10">
          <div className="space-y-6 md:col-span-6 col-span-12 order-2 border-b pb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-neutral-900">Payment</h2>
              <p className="text-[11px] uppercase text-neutral-600">Secure encrypted</p>
            </div>

            {/* Payment Method Buttons */}
            <div className="flex gap-3">
              <button className="p-3 border border-neutral-300 rounded hover:border-neutral-900 flex items-center gap-1">
                <img src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/visa.svg" className="h-6" />
                <img src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/mc.svg" className="h-6" />
              </button>

              <button className="p-3 border border-neutral-300 rounded hover:border-neutral-900">
                <img src="/payment/paypal.png" className="h-6" />
              </button>

              <button className="p-3 border border-neutral-300 rounded hover:border-neutral-900">
                <img src="/payment/unionpay.png" className="h-6" />
              </button>
            </div>

            {/* Logos Row */}
            <div className="flex gap-4 opacity-70">
              <img src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/visa.svg" className="h-6" />
              <img src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/mc.svg" className="h-6" />
              <img src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/amex.svg" className="h-6" />
            </div>

            {/* Card Inputs */}
            <div>
              <label className="text-sm font-medium mb-1 block">Card number *</label>
              <input placeholder="Enter card number" className="w-full px-4 py-3 border border-neutral-300 rounded text-sm" />
              <p className="text-xs text-red-500 mt-1 flex gap-1 items-center">
                ⚠️ Please enter a valid card number.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Month *</label>
                <select className="w-full px-3 py-2 border border-neutral-300 rounded text-sm">
                  <option>Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>{String(i + 1).padStart(2, "0")}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Year *</label>
                <select className="w-full px-3 py-2 border border-neutral-300 rounded text-sm">
                  <option>Year</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{new Date().getFullYear() + i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">CVV *</label>
                <input maxLength="4" placeholder="CVV" className="px-3 py-2 border border-neutral-300 rounded text-sm w-full" />
              </div>
            </div>

            <p className="text-[11px] text-neutral-600">
              Your payment will be securely processed.
            </p>
            {/* Place Order */}
            <button className="w-full py-3 bg-black text-white rounded text-sm font-semibold uppercase tracking-wide hover:bg-neutral-800">
              Pay & Place Order
            </button>
          </div>

          {/* Billing Summary */}
          <div className="space-y-6 md:col-span-6 col-span-12 border-b pb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-neutral-900">Billing Summary</h2>
            </div>

            {/* Coupon Field */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Please enter coupon code"
                className="w-full px-3 py-2 border border-neutral-300 rounded text-sm"
              />
              <button className="px-4 bg-black text-white text-sm font-semibold rounded hover:bg-neutral-800">
                APPLY
              </button>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-700">Items total</span>
                <span className="font-medium">Rs 34300</span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-700">Shipping</span>
                <span className="font-medium">Rs 4799</span>
              </div>
            </div>

            {/* Total */}
            <div className="pt-3">
              <div className="flex justify-between font-semibold text-base">
                <span>Total For Your Order</span>
                <span>Rs 39099</span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                Local taxes, duties or customs clearance fees may apply
              </p>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}
