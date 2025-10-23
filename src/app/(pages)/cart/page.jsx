export default function Cart() {
  return (
    <main className="container mx-auto px-4 mt-24 mb-12">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
        <h1 className="text-3xl font-semibold">Shopping bag</h1>
        <h2 className="text-lg text-gray-500">1 Product</h2>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {/* Left: Products Section */}
        <div className="flex-1 max-w-3xl flex flex-col">
          {/* Empty and Save buttons */}
          <div className="flex justify-between items-center pb-2 text-sm">
            <button className="text-gray-700 underline hover:text-black">
              Empty Shopping bag
            </button>
            <button className="text-gray-700 underline hover:text-black">
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

              {/* Product Info */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base underline">
                    Set of 3 Nadua hangers in solid wood with a natural, green beech finish.
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">AA6229M19</p>
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

        {/* Right: Summary Section */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          <button className="flex justify-between w-full text-gray-700 border-b pb-2 hover:text-black">
            Apply discount code
            <span>▼</span>
          </button>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-gray-700 text-sm">
              <span>Shipping</span>
              <span>--</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <div>
                Total <span className="text-sm text-gray-500">(Taxes included)</span>
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

          {/* Payment Info */}
          <div className="border-t pt-4 text-center">
            <h4 className="font-medium text-sm">PAYMENT 100% SECURE AND EASY</h4>
            <p className="text-xs text-gray-500 mt-1">
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
        </div>
      </div>
    </main>
  );
}
