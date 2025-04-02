
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold">Prayam Classes</div>
            <p className="text-white/80 mt-1">Transform Weaknesses into Strengths</p>
          </div>
          
          <div className="text-white/80 text-sm">
            © {currentYear} <span><a className='font-bold' href='https://github.com/SubhChintak'>SubhChintak</a></span>. All rights reserved.
            <br></br>
            <span className="text-white/80 text-sm">Built with ❤ for our beloved Teachers.</span>
          </div>
          {/* <div className="text-white/80 text-sm">Built with ❤ for our beloved Teachers</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
