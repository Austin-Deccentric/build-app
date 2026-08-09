import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AssessmentsCard = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-white min-h-[500px] w-full font-sans overflow-hidden">
    
      {/* Right Column: Text Content */}
      <div className="flex-1 px-8 py-12 md:pl-24 md:pr-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 tracking-wide">
          <span className="text-[#302C70]">Assessments,</span>
          <br />
          <span className="text-[#00C49F]">Quizzes,</span>
          <span className="text-[#302C70]"> Tests</span>
        </h2>
        
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed max-w-lg mt-4">
          Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
        </p>
      </div>

       {/* Left Column: Interactive Graphic wrapped in Next.js Link */}
      <div className="flex-1 relative w-full h-full min-h-[400px] flex justify-center md:justify-start items-center p-8 z-10">
        <Link href="/features/assessments" aria-label="Learn more about assessments, quizzes, and tests">
          <Image 
            src="/images/building.png" 
            alt="Interactive quiz interface showing a question about Italy" 
            width={700} 
            height={700}
            className="object-contain max-w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
    </div>
  );
};

export default AssessmentsCard;