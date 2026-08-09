import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ClassManagementCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white min-h-[500px] w-full font-sans overflow-hidden">
      
      {/* Left Column: Text Content */}
      <div className="flex-1 px-8 py-12 md:pl-24 md:pr-10 max-w-2xl z-10">
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 tracking-wide">
          <span className="text-[#00C49F]">Class Management</span>
          <br />
          <span className="text-[#302C70]">Tools for Educators</span>
        </h2>
        
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed max-w-lg mt-4">
          Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
        </p>
      </div>

      {/* Right Column: Graphic wrapped in Next.js Link */}
      <div className="flex-1 relative w-full h-full min-h-[400px] flex justify-center md:justify-end items-center p-8">
        <Link href="/features/class-management" aria-label="Learn more about class management tools">
          <Image 
            src="/images/student_stats.png" 
            alt="Gradebook interface showing student scores and avatars" 
            width={700} 
            height={700}
            className="object-contain max-w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      
    </div>
  );
};

export default ClassManagementCard;