const Timeline = () => {
  const timelineData = [
    {
      title: "Master's of Computer Science",
      company: "University of Virginia | 4.0 GPA",
      date: "Aug 2025 - May 2026",
      description: "Concentration in machine learning and distributed systems.",
      type: "education",
      logo: "/uva.png",
    },
    {
      title: "Software Engineer Intern",
      company: "Cisco",
      date: "Jun 2025 - Aug 2025",
      description:
        "Designed an agentic case-closing assistant that generated and executed action plans to reduce manual effort for support agents. Additionally migrated knowlege articles by ingesting and pipelining data from existing systems into both vector and graph stores to improve question answering.",
      type: "internship",
      logo: "/cisco.png",
    },
    {
      title: "Software Developer Fellow",
      company: "Palantir",
      date: "Dec 2024 - Jan 2025",
      description:
        "Delivered full-stack project that served a minimalistic news platform offering users recommendations based on different topics and read-times along with utilities like translations and audio transcriptions. \n Awards: 1 of 4 finalists selected from ~500 applicants to present project to Palantir engineers.",
      type: "internship",
      logo: "/palantir.png",
    },
    {
      title: "Teaching Assistant",
      company: "UVA Data Science School",
      date: "Aug 2024 - Dec 2024",
      description:
        "Assisted in teaching Data Science Systems (DS 2002), supporting students with topics like data ingestion and pipelining along with how to use data effectively.",
      type: "work",
      logo: "/uva.png",
    },
    {
      title: "Software Engineer Intern",
      company: "Capital One",
      date: "Jun 2024 - Aug 2024",
      description:
        "Designed and scaled a secure package analysis pipeline using AWS Batch to evaluate 1000+ open-source libraries daily, safeguarding development environments against malicious code and vulnerabilities.",
      type: "internship",
      logo: "/capitalone.jpg",
    },
    {
      title: "Research Assistant",
      company: "UVA CS Department",
      date: "Jan 2023 - Present",
      description:
        "Previously contributed towards research concerning attacking and defending graph neural networks and exploring novel techniques to better model graph behaviors. Currently assisting with research concerning hypothesis generation and new adversarial learning techniques.\n Awards: Dean Summer Undergraduate Research Fellow\n Recent Publication: IdeaBench: Benchmarking Large Language Models for Research Idea Generation",
      type: "work",
      logo: "/uva.png",
    },
    {
      title: "Software Engineer Intern",
      company: "WEX, Inc.",
      date: "May 2023 - Aug 2023",
      description:
        "Spearheaded a project concerning the development of an agentic universal automated IVR callflow to streamline customer interactions, enable adaptive dialogue management, and lay the groundwork for next-generation voice-driven service systems.",
      type: "internship",
      logo: "/wex.png",
    },
    {
      title: "Bachelor's of Science in Computer Science",
      company: "University of Virginia | 3.97 GPA",
      date: "Aug 2022 - May 2025",
      description:
        "Minored in Data Science and graduated with highest honors.\nCoursework: Operating Systems, Database Systems, Compilers, Programming Languages, Machine Learning, Reinforcement Learning, Computer Systems and Organization 2, Advanced Software Dev. Essentials",
      type: "education",
      logo: "/uva.png",
    },
  ];

  return (
    <section className="condensed-section px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-left mb-6">
          <h2 className="font-heading text-3xl text-[#2F4156] mb-2">
            My Journey
          </h2>
          <span className="text-sm font-bold tracking-wider uppercase text-[#666666]">
            Career & Education
          </span>
        </div>

        <div className="mb-8 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#2F4156] rounded-full"></div>
            <span className="text-[#666666]">Work Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#5D4E37] rounded-full"></div>
            <span className="text-[#666666]">Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#E8E0DA] rounded-full"></div>
            <span className="text-[#666666]">Internship</span>
          </div>
        </div>

        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6">
            <div className="col-span-12 space-y-12 relative px-4 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-[#E8E0DA]">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] ${
                    item.type === "work"
                      ? "before:bg-[#2F4156]"
                      : item.type === "education"
                      ? "before:bg-[#5D4E37]"
                      : "before:bg-[#E8E0DA]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading text-xl text-[#2F4156] tracking-wide">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm border border-[#E8E0DA] overflow-hidden">
                      {item.logo.startsWith("/") ? (
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <span>{item.logo}</span>
                      )}
                    </div>
                  </div>
                  <time className="text-xs tracking-wide uppercase text-[#666666] mb-1">
                    {item.date}
                  </time>
                  <p className="text-sm font-medium text-[#2F4156] mb-2">
                    {item.company}
                  </p>
                  <div className="text-sm text-[#666666] leading-relaxed">
                    {item.description.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-2" : ""}>
                        {line.startsWith("Coursework:") ? (
                          <span>
                            <span className="font-medium text-[#2F4156]">
                              Coursework:
                            </span>
                            <span className="ml-1">
                              {line.replace("Coursework:", "")}
                            </span>
                          </span>
                        ) : line.trim().startsWith("Award:") ||
                          line.trim().startsWith("Awards:") ? (
                          <span>
                            <span className="font-medium text-[#2F4156]">
                              {line.trim().match(/^Awards?:/)?.[0]}
                            </span>
                            <span className="ml-1">
                              {line.trim().replace(/^Awards?:\s*/, "")}
                            </span>
                          </span>
                        ) : line.trim().startsWith("Recent Publication:") ? (
                          <span>
                            <span className="font-medium text-[#2F4156]">
                              Recent Publication:
                            </span>
                            <span className="ml-1">
                              <a 
                                href="https://dl.acm.org/doi/10.1145/3711896.3737419" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-link hover:underline"
                              >
                                {line.trim().replace(/^Recent Publication:\s*/, "")}
                              </a>
                            </span>
                          </span>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
