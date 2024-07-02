const Cart = () => {
  return (
    <section className="bg-gray-900 text-white relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-600">
              <h2 className="font-bold text-3xl leading-10">Shopping Cart</h2>
              <h2 className="font-bold text-xl leading-8 text-gray-400">
                4 Items
              </h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-600">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Product Details
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Quantity
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 1 */}
            <div className="flex flex-col md:flex-row items-center gap-5 py-6 border-b border-gray-600 group">
              <div className="w-full md:max-w-[126px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col items-center gap-3">
                    <h6 className="font-semibold text-base leading-7">
                      Rose Petals Divine
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-400">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-between md:col-span-2 mt-3 md:mt-0">
                  <div className="flex items-center">
                    <button className="group rounded-l-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-600 outline-none text-white font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-400 py-[15px] text-center bg-transparent"
                      placeholder="1"
                    />
                    <button className="group rounded-r-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-end mt-3 md:mt-0">
                    <p className="font-bold text-lg leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="flex flex-col md:flex-row items-center gap-5 py-6 border-b border-gray-600 group">
              <div className="w-full md:max-w-[126px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col items-center gap-3">
                    <h6 className="font-semibold text-base leading-7">
                      Gardenia Bliss
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-400">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $90.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-between md:col-span-2 mt-3 md:mt-0">
                  <div className="flex items-center">
                    <button className="group rounded-l-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-600 outline-none text-white font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-400 py-[15px] text-center bg-transparent"
                      placeholder="1"
                    />
                    <button className="group rounded-r-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-end mt-3 md:mt-0">
                    <p className="font-bold text-lg leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $90.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="flex flex-col md:flex-row items-center gap-5 py-6 border-b border-gray-600 group">
              <div className="w-full md:max-w-[126px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col items-center gap-3">
                    <h6 className="font-semibold text-base leading-7">
                      Ocean Breeze
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-400">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $85.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-between md:col-span-2 mt-3 md:mt-0">
                  <div className="flex items-center">
                    <button className="group rounded-l-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-600 outline-none text-white font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-400 py-[15px] text-center bg-transparent"
                      placeholder="1"
                    />
                    <button className="group rounded-r-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-end mt-3 md:mt-0">
                    <p className="font-bold text-lg leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $85.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="flex flex-col md:flex-row items-center gap-5 py-6 border-b border-gray-600 group">
              <div className="w-full md:max-w-[126px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col items-center gap-3">
                    <h6 className="font-semibold text-base leading-7">
                      Lavender Dream
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-400">
                      Perfumes
                    </h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $95.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-between md:col-span-2 mt-3 md:mt-0">
                  <div className="flex items-center">
                    <button className="group rounded-l-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-600 outline-none text-white font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-400 py-[15px] text-center bg-transparent"
                      placeholder="1"
                    />
                    <button className="group rounded-r-xl px-5 py-2 border border-gray-600 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-600 hover:border-gray-700 hover:shadow-gray-700 focus:outline-gray-700">
                      <svg
                        className="stroke-current text-white transition-all duration-500 group-hover:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 5.5V16.5M16.5 11H5.5"
                          stroke=""
                          strokeOpacity="0.2"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-end mt-3 md:mt-0">
                    <p className="font-bold text-lg leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $95.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of products */}
          </div>
          <div className="col-span-12 xl:col-span-4 bg-gray-800 text-white w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-bold text-3xl leading-10 pb-8 border-b border-gray-600">
              Order Summary
            </h2>
            {/* Order summary content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
