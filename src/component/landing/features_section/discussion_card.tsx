import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DiscussionsCard = () => {
  return (
    <div className="flex flex-col items-center bg-white w-full font-sans py-12">
      {/* Main Card Content */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full min-h-[450px]">
        

        {/* Right Column: Text Content */}
        <div className="flex-1 px-8 py-12 md:pl-24 md:pr-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 tracking-wide">
            <span className="text-[#302C70]">One-on-One</span>
            <br />
            <span className="text-[#00C49F]">Discussions</span>
          </h2>
          
          <p className="text-[#696984] text-base md:text-lg leading-relaxed max-w-lg mt-4">
            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
          </p>
        </div>

        {/* Left Column: Graphic wrapped in Next.js Link */}
        <div className="flex-1 relative w-full h-full min-h-[400px] flex justify-center md:justify-start items-center p-8 z-10">
          <Link href="/features/one-on-one-discussions" aria-label="Learn more about One-on-One Discussions">
            <Image 
              src="/images/discussion_img.png" 
              alt="One-on-one private discussion video interface mockup" 
              width={750} 
              height={550}
              className="object-contain max-w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

      </div>

      {/* Section Footer: See more features button */}
      <div className="mt-12 flex justify-center w-full">
        <Link 
          href="/features" 
          className="px-8 py-3 rounded-full border border-[#00C49F] text-[#00C49F] text-lg font-medium hover:bg-[#00C49F] hover:text-white transition-colors duration-300"
        >
          See more features
        </Link>
      </div>
    </div>
  );
};

export default DiscussionsCard;