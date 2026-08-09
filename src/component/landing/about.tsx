import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

type CloudFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBackground: string;
};

const cloudFeatures: CloudFeature[] = [
  {
    title: "Online Billing, Invoicing, Contracts",
    description:
      "Simple and secure tools to manage payments, invoices, contracts, and other essential learning-platform tasks.",
    icon: <FaFileAlt />,
    iconBackground: "bg-[#5B72EE]",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Plan classes, manage attendance, and keep every learning activity organised in one convenient place.",
    icon: <FaCalendarAlt />,
    iconBackground: "bg-[#00CBB8]",
  },
  {
    title: "Customer Tracking",
    description:
      "Understand your learners better and follow their progress throughout their learning experience.",
    icon: <PiUsersThreeFill />,
    iconBackground: "bg-[#2F9CC1]",
  },
];

const About = () => {
  return (
    <>
      {/* All-In-One Cloud Software */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 w-full">
        <div className="mx-auto w-full ">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#010514] sm:text-4xl lg:text-5xl">
              All-In-One Cloud Software
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
              TOTC is one powerful online software suite that combines all the
              tools you need to run a successful school or office.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
            {cloudFeatures.map((feature) => (
              <article
                key={feature.title}
                className="flex min-h-[285px] flex-col items-center rounded-2xl bg-white px-6 py-9 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 sm:px-8 sm:py-10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white sm:h-16 sm:w-16 sm:text-3xl ${feature.iconBackground}`}
                >
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#2D2D3A] sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What is TOTC */}
<section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
  <div className="mx-auto">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-bold text-[#010514] sm:text-4xl lg:text-5xl">
        What is <span className="text-[#49BBBD]">TOTC?</span>
      </h2>

      <p className="mt-5 text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
        TOTC is a cloud-based teaching and learning platform designed to make
        online education more interactive, accessible, and effective.
      </p>
    </div>

    <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:gap-8">
      {/* Instructor card */}
      <article className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/9]">
        <Image
          src="/images/instructor.png"
          alt="Instructor teaching an online class"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h3 className="text-lg font-bold text-white sm:text-2xl">
            FOR INSTRUCTORS
          </h3>

          <Link
            href="/"
            className="mt-5 rounded-full border border-white px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-slate-900 sm:mt-6 sm:px-7 sm:py-3 sm:text-sm"
          >
            Start a class today
          </Link>
        </div>
      </article>

      {/* Student card */}
      <article className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[16/9]">
        <Image
          src="/images/for_students.png"
          alt="Student learning online"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h3 className="text-lg font-bold text-white sm:text-2xl">
            FOR STUDENTS
          </h3>

          <Link
            href="/"
            className="mt-5 rounded-full bg-[#23BDEB] px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1aa8d2] sm:mt-6 sm:px-7 sm:py-3 sm:text-sm"
          >
            Enter access code
          </Link>
        </div>
      </article>
    </div>
  </div>
</section>


      {/* Physical classroom experience */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28 w-full">
        <div className="mx-auto grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="max-w-xl text-2xl font-bold leading-tight text-[#010514] sm:text-4xl lg:text-5xl">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#49BBBD]">you can do with TOTC</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
              TOTC gives teachers and learners the tools to create a rich,
              interactive learning experience from anywhere. Share lessons,
              communicate clearly, and keep your classroom connected.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block text-sm font-semibold text-[#49BBBD] underline decoration-2 underline-offset-4 transition-colors hover:text-[#258f91]"
            >
              Learn more
            </Link>
          </div>

          <div className="relative mx-auto w-full">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-3xl border-l-8 border-t-8 border-[#49BBBD] sm:-left-5 sm:-top-5 sm:h-28 sm:w-28" />

            <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-3xl border-b-8 border-r-8 border-[#49BBBD] sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/lecture_room.png"
                alt="Students and teacher learning in a classroom"
                fill
                className="object-cover"
                sizes="(max-w-600px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
