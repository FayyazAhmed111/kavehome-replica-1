export default function Cart() {
  return (
    <main className="w-full mx-auto px-4 mt-24 mb-12">
      <div className="px-4 pt-12">
 
        <div className="flex flex-col  mb-12 text-center md:text-left">
          <h1 className="md:text-[46px] text-center text-[28px] tracking-tighter font-kave-haffertext font-normal">Shopping bag</h1>
          <h2 className="text-[12px] md:text-[14px] text-center font-poppins text-gray-500">1 product</h2>
      </div>
 
      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {/* Left: Products Section */}
          <div className="flex-1 max-w-[800px] flex flex-col">
            <div className="flex justify-between items-center pb-2 text-sm">
              <button className="text-gray-700 text-[12px] font-kave-haffertext hover:text-black 
              flex gap-2 items-center justify-center">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4.5 h-4.5"
                  >
                    <path
                      d="M3 5.49H21M5.65 5.49V20.99C5.65 20.99 6.05 20.99 6.55 20.99H17.45C17.95 20.99 18.35 20.99 18.35 20.99V5.49M15.18 5.49V3.9C15.18 3.4 14.78 3 14.28 3H9.72C9.22 3 8.82 3.4 8.82 3.9V5.49M9.56 9.06V17.44M14.44 9.06V17.44"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
 
                </span> 
              Empty Shopping bag
            </button>
              <button className="text-gray-600 text-[12px] font-kave-haffertext hover:text-black 
              flex gap-2 items-center justify-center">                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3.37783 12.0533L12.005 21L20.6322 12.0533C21.5912 11.0587 22.13 9.70982 22.13 8.3033C22.13 5.37437 19.8404 3 17.0161 3C15.6598 3 14.3591 3.55874 13.4 4.5533L12.005 6L10.61 4.5533C9.65093 3.55874 8.35019 3 6.9939 3C4.16957 3 1.88 5.37437 1.88 8.3033C1.88 9.70982 2.41879 11.0587 3.37783 12.0533Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
 
                </span>
              Save for later
              </button>
 
          </div>
 
          {/* Product Card */}
          <div className="border-b border-gray-200 py-6 flex flex-col gap-4">
              <div className="flex gap-6">
 
              {/* Image */}
              <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                <img
                  src="https://d.media.kavehome.com/image/upload/w_388,h_485,c_pad/v1709553449/products/AA6229M19_1V01.jpg"
                  alt="Set of 3 Nadua hangers"
                  className="object-cover w-full h-full"
                />
              </div>
 
              <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="font-semibold font-poppins text-gray-800 text-[12px] md:text-[14px] ">
                    Set of 3 Nadua hangers in solid wood with a natural, green beech finish.
                  </h3>
                    <p className="text-gray-500 text-[12px] font-poppins mt-1">AA6229M19</p>
                </div>
 
                <div className="flex justify-between items-center mt-2">
                  <select className="border border-gray-300 rounded-md p-1 text-sm">
                    <option>1</option>
                  </select>
                  <span className="font-semibold text-gray-800">33.99 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
 
          {/* Summary Section */}
          <div className="flex flex-col ">
            <div className="flex flex-col p-6 gap-6 justify-between md:w-[360px] w-[300px] bg-neutral-10 ">
              <div className="border-b border-neutral-30 pb-6 items-end flex flex-col">
                <button className="w-fit flex gap-1 items-center text-[14px] font-kave-haffertext font-normal relative p-0 outline-0 ">
                  Apply discount code
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M6.35355 8.64645C6.15829 8.45118 5.84171 8.45118 5.64645 8.64645C5.45118 8.84171 5.45118 9.15829 5.64645 9.35355L6.35355 8.64645ZM12 15L11.6464 15.3536L12 15.7071L12.3536 15.3536L12 15ZM18.3536 9.35355C18.5488 9.15829 18.5488 8.84171 18.3536 8.64645C18.1583 8.45118 17.8417 8.45118 17.6464 8.64645L18.3536 9.35355ZM5.64645 9.35355L11.6464 15.3536L12.3536 14.6464L6.35355 8.64645L5.64645 9.35355ZM12.3536 15.3536L18.3536 9.35355L17.6464 8.64645L11.6464 14.6464L12.3536 15.3536Z"
                        fill="currentColor"
                      />
                    </svg>
 
                  </span>
                </button>
              </div>
 
              <div className="flex p-2 flex-col gap-2">
                <div className="flex justify-between items-center flex-row text-gray-700 text-sm">
                  <span className="text-[12px]">Shipping</span>
              <span>--</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
                  <div className="text-[12px]">
                    Total <span className="text-[12px] text-gray-500">(Taxes included)</span>
              </div>
              <span>33.99 €</span>
            </div>
          </div>
 
          <button className="bg-black text-white py-3 rounded-md w-full font-medium hover:bg-gray-900">
            Continue to checkout
          </button>
 
          <a href="#" className="text-center underline text-gray-700 hover:text-black">
            Continue shopping
              </a>
 
            </div>
 
            <div className="border-t pt-4 text-center md:w-[360px] w-[300px] font-kave-haffertext">
              <h4 className="font-medium  text-[12px]">PAYMENT 100% SECURE AND EASY</h4>
              <p className="text-[12px] text-gray-500 mt-1">
                Your payment will be processed through a connection protected by an SSL certificate.
              </p>
 
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                <img
                  src="https://d.media.kavehome.com/image/fetch/w_120,f_auto/https://media.kavehome.com/media/images/payments/Mastercard.png"
                  alt="Mastercard"
                  className="h-5"
                />
                <img
                  src="https://d.media.kavehome.com/image/fetch/w_120,f_auto/https://media.kavehome.com/media/images/payments/Visa.png"
                  alt="Visa"
                  className="h-5"
                />
                <img
                  src="https://d.media.kavehome.com/image/fetch/w_120,f_auto/https://media.kavehome.com/media/images/payments/AExpress.png"
                  alt="Amex"
                  className="h-5"
                />
                <img
                  src="https://d.media.kavehome.com/image/fetch/w_120,f_auto/https://media.kavehome.com/media/images/payments/MicrosoftTeams-image_8.png"
                  alt="Apple Pay"
                  className="h-5"
                />
                <img
                  src="https://d.media.kavehome.com/image/fetch/w_120,f_auto/https://media.kavehome.com/media/images/payments/MicrosoftTeams-image_7.png"
                  alt="Google Pay"
                  className="h-5"
                />
                <img
                  src="https://d.media.kavehome.com/image/fetch/w_120,f_auto/https://media.kavehome.com/media/images/payments/givex.png"
                  alt="Gift Card"
                  className="h-5"
                />
              </div>
            </div>
            {/* Payment Info */}
 
 
          </div>
        </div>
 
      </div>
 
    </main>
  );
}