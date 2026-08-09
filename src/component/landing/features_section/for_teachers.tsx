import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeachingToolsCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white min-h-[500px] w-full font-sans overflow-hidden">
      
      {/* Left Column: Text Content */}
      <div className="flex-1 px-8 py-12 md:pl-24 md:pr-10 max-w-2xl z-10">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 tracking-wide">
          <span className="text-[#00C49F]">Tools</span>
          <span className="text-[#302C70]"> For Teachers</span>
          <br />
          <span className="text-[#302C70]">And Learners</span>
        </h1>
        
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed max-w-lg mt-4">
          Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
        </p>
      </div>

      {/* Right Column: Hero Graphic wrapped in Next.js Link */}
      <div className="flex-1 relative w-full h-full min-h-[400px] flex justify-center md:justify-end items-center p-8">
        <Link href="/features/teaching-tools" aria-label="Learn more about teaching tools">
          {/* Using Next.js optimized Image component. Note: width/height are required for string src */}
          <Image 
            src="/images/girl_w_bg.png" 
            alt="Student looking thoughtfully alongside educational tools" 
            width={700} 
            height={700}
            priority
            className="object-contain max-w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
    </div>
  );
};

export default TeachingToolsCard;