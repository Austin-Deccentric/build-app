import {
  FaChalkboardTeacher,
  FaLayerGroup,
  FaUserFriends,
  FaPhoneAlt,
  FaSignal,
} from "react-icons/fa";

const attendees = [
  {
    name: "Every Howard",
    role: "Instructor",
    position:
      "top-4 left-[11%] h-44 w-[32%] sm:h-48",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Tamara Clarke",
    position:
      "top-4 left-[57%] h-28 w-[20%] sm:h-32",
    image:
      "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Adam Levin",
    position:
      "right-[4%] top-0 h-28 w-[22%] sm:h-32",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Humbert Holland",
    position:
      "bottom-11 left-[57%] h-28 w-[20%] sm:h-32",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Patricia Mendoza",
    position:
      "bottom-[-12px] right-[2%] h-40 w-[29%] sm:h-44",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
  },
];

const features = [
  {
    icon: FaChalkboardTeacher,
    color: "text-indigo-900",
    text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
  },
  {
    icon: FaLayerGroup,
    color: "text-amber-500",
    text: "TA’s and presenters can be moved to the front of the class.",
  },
  {
    icon: FaUserFriends,
    color: "text-indigo-900",
    text: "Teachers can easily see all students and class data at one time.",
  },
];

export default function ClassroomFeature() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24 w-full">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-extrabold text-indigo-950 sm:text-4xl">
            Our <span className="text-teal-400">Features</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
            This very extraordinary feature can make learning activities more
            efficient.
          </p>
        </header>

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="relative mx-auto min-h-[340px] w-full max-w-2xl pt-12 sm:min-h-[440px] sm:pt-16">
            {/* Decorative shapes */}
            <div className="absolute left-8 top-0 h-20 w-20 rounded-full bg-emerald-400 sm:left-12 sm:h-28 sm:w-28" />

            <div className="absolute left-36 top-2 h-5 w-5 rounded-full bg-cyan-400 sm:left-44 sm:h-6 sm:w-6" />

            <div className="absolute bottom-16 right-28 h-5 w-5 rounded-full bg-red-400 sm:bottom-20 sm:right-36 sm:h-6 sm:w-6" />

            <div className="absolute bottom-0 right-0 h-36 w-36 rounded-b-full bg-indigo-500 sm:h-48 sm:w-48" />

            {/* Browser UI */}
            <div className="relative z-10 min-h-[265px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(36,43,115,0.14)] backdrop-blur sm:min-h-[330px]">
              <div className="flex h-7 items-center gap-2 bg-slate-100 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="relative min-h-[238px] bg-gradient-to-br from-slate-50 to-indigo-50 sm:min-h-[303px]">
                {attendees.map((attendee) => (
                  <article
                    key={attendee.name}
                    className={`absolute overflow-hidden rounded-xl bg-slate-200 shadow-lg ${attendee.position}`}
                  >
                    <img
                      src={attendee.image}
                      alt={attendee.name}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-x-2 bottom-2 flex items-center gap-1 text-[7px] text-white drop-shadow sm:text-[9px]">
                      <FaSignal className="text-[7px] sm:text-[9px]" />

                      {attendee.role && (
                        <span className="rounded bg-sky-400 px-1 py-0.5 text-[6px] font-bold uppercase sm:text-[7px]">
                          {attendee.role}
                        </span>
                      )}

                      <span>{attendee.name}</span>
                    </div>
                  </article>
                ))}

                <div className="absolute bottom-4 left-4 flex gap-2 sm:bottom-5 sm:left-10 sm:gap-4">
                  <button
                    type="button"
                    className="min-w-[84px] rounded-full bg-gradient-to-br from-blue-500 to-blue-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 sm:min-w-[108px] sm:px-5 sm:text-sm"
                  >
                    Present
                  </button>

                  <button
                    type="button"
                    className="flex min-w-[84px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-pink-500/30 transition hover:-translate-y-1 sm:min-w-[108px] sm:px-5 sm:text-sm"
                  >
                    <FaPhoneAlt />
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <h3 className="text-3xl font-extrabold leading-tight text-indigo-950 sm:text-4xl lg:text-5xl">
              A <span className="text-teal-400">user interface</span> designed
              for the classroom
            </h3>

            <div className="mt-10 space-y-7">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.text}
                    className="grid grid-cols-[48px_1fr] items-center gap-5"
                  >
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-full bg-white text-xl shadow-[0_8px_18px_rgba(44,48,108,0.12)] ${feature.color}`}
                    >
                      <Icon />
                    </div>

                    <p className="text-base leading-7 text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
