import React from 'react';
export function Footer() {
  return <footer className="bg-gray-800 text-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
    
          <p className="text-sm text-gray-400 mb-6">
            Disclaimer: This site is a free service to assist homeowners in connecting with local service providers.
            All contractors/providers are independent and this site does not warrant or guarantee any work performed. 
            It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license 
            and insurance required for the work being performed. All persons depicted in a photo or video are actors or models 
            and not contractors listed on this site.
          </p>
            <p className="mb-2 text-sm text-gray-400">
            © Copyright Reserved - 2025 pest.usaservicehub.com
            </p>
          
          {/* <div className="mt-6 space-x-2 md:space-x-4 flex flex-wrap justify-center">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm py-1">
              Terms and Conditions
            </a>
            <span className="text-gray-600 hidden md:inline">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm py-1">
              Privacy Policy & Cookies
            </a>
            <span className="text-gray-600 hidden md:inline">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm py-1">
              Join Our Affiliate Program
            </a>
            <span className="text-gray-600 hidden md:inline">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm py-1">
              Are You An Exterminator?
            </a>
          </div> */}
        </div>
      </div>
    </footer>;
}
