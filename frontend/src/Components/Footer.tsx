const Footer = () => {
  return (
    <div className="w-full mt-20 border-t border-gray-300 flex items-center justify-center text-lg bg-black text-white">
      <div className="w-2/3 px-4 py-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="text-4xl font-bold">
            <h1>How can we help you? Get in touch</h1>
          </div>
          <div className="flex mt-8 md:mt-0 md:ml-auto">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md mr-4 hover:bg-blue-600 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
        {/* Rest of your content */}
      </div>
    </div>
  );
};

export default Footer;
