const Hero = () => {
  return (
    <section className="condensed-section px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="font-heading text-4xl md:text-5xl text-[#2F4156] mb-3">
              Albert Huang
            </h1>
            <p className="text-lg text-[#666666] mb-4">
              Fullstack Software Engineer | M.C.S @ University of Virginia
            </p>
            <div className="space-y-4">
              <p className="text-base text-[#666666] leading-relaxed">
                Hey I'm Albert, a student currently at the University of
                Virginia and an{" "}
                <span className="font-medium">
                  aspiring full-stack software engineer!
                </span>
              </p>

              <p className="text-base text-[#666666] leading-relaxed">
                I work across the stack, from backend systems to frontend
                interfaces, and I'm always looking for new things to learn and
                ways to make things{" "}
                <span className="font-medium">
                  cleaner, smarter, and more fun to use.
                </span>
              </p>

              <p className="text-base text-[#666666] leading-relaxed">
                When I'm not coding, you will probably find me out playing
                volleyball or watching shows with friends.
              </p>

              <p className="text-base text-[#666666] font-medium leading-relaxed">
                Check out my projects and reach out if you'd like to connect!
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-center">
            <div className="w-60 h-60 rounded-full overflow-hidden">
              <img
                src="/Profile.jpeg"
                alt="Albert Huang"
                className="w-full h-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
