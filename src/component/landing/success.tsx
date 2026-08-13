type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "15K+", label: "Students" },
  { value: "75%", label: "Total success" },
  { value: "35", label: "Main questions" },
  { value: "26", label: "Chief experts" },
  { value: "16", label: "Years of experience" },
];

const Success = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 lg:px-32 lg:py-28 w-full">
      <div className="mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#010514] sm:text-4xl lg:text-5xl">
          Our Success
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#2D2D3A] sm:mt-5 sm:text-lg lg:text-xl">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-3 gap-x-2 gap-y-8 sm:mt-16 sm:gap-x-6 sm:gap-y-10 lg:mt-20 lg:grid-cols-5 lg:gap-6">
        {stats.map((stat) => {
       
          return (
            <div
              key={stat.label}
              className={[
                "text-center",
              ].join(" ")}
            >
              <p className="text-3xl font-light leading-none tracking-tight text-[#2F9CC1] sm:text-5xl lg:text-7xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-medium leading-tight text-[#2D2D3A] sm:mt-3 sm:text-lg lg:text-[1.5rem]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Success;
