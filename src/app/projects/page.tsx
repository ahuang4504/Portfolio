export default function Projects() {
  const projects = [
    {
      title: "GPTracker",
      description:
        "A Chrome extension that promotes conscious AI usage by tracking ChatGPT interactions and providing reflection insights. Built to help users understand their AI dependency patterns through interactive visualizations and cross-device synchronization. Features a robust data persistence system with buffered writes and batch synchronization that ensures data integrity while optimizing database performance.",
      tech: ["React.js", "TypeScript", "Supabase", "Chrome Extension API"],
      github: "https://github.com/ahuang4504/GPTracker",
      demo: null,
      demoStatus: "Chrome store submission in progress",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio about me and my technical projects! Features dynamic content including real-time Spotify integration, interactive photo gallery, and custom Connections game. Built with performance optimization and mobile-first responsive design principles.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Spotify API", "Vercel"],
      github: "https://github.com/ahuang4504/Portfolio",
      demo: "https://www.alberthuang.xyz",
      featured: true,
    },
    {
      title: "Pocket Reader | Fellowship Finalist",
      description:
        "A personalized news platform that solves information overload by curating content based on user preferences and available reading time. Features multilingual translation and audio conversion to make news accessible across different consumption preferences. Built with an automated data pipeline using Palantir Foundry for intelligent content processing and user-centric querying.",
      tech: [
        "Palantir Foundry",
        "Python",
        "React.js",
        "TypeScript",
        "NewsAPI",
        "ScrapFly",
      ],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "LLVM Compiler",
      description:
        "Extended the TIP programming language compiler with modern language features while maintaining performance and correctness. Designed with modular compilation phases like ANTLR parsing, semantic analysis for type safety, and LLVM backend for powerful optimizations. Comprehensive testing ensures reliability while targeted optimization passes deliver significant performance improvements.",
      tech: ["C++", "LLVM", "ANTLR", "Compiler Design"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "PeerCycle",
      description:
        "A donation-based marketplace promoting sustainability through peer-to-peer item exchange. Addresses friction in traditional donation systems with location-based discovery and intuitive user experience. Built on Django with integrated Google APIs for OAuth authentication, cloud storage, and interactive maps for users to find items near them.",
      tech: ["Django", "Python", "HTML", "Heroku", "Google APIs", "OAuth"],
      github: null,
      demo: null,
      featured: true,
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: [
        "Java",
        "Python",
        "C/C++",
        "JavaScript",
        "HTML/CSS",
        "SQL",
        "R",
        "OCaml",
        "Prolog",
        "Golang",
      ],
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Graph.js", "Tailwind"],
    },
    {
      category: "Backend",
      items: ["Flask", "FastAPI", "Redis", "RabbitMQ"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Snowflake", "Weaviate", "Neo4js"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "Docker",
        "Jenkins",
        "Kubernetes",
        "Github",
        "Postman",
        "Jira",
      ],
    },
    {
      category: "AI/ML",
      items: [
        "pandas",
        "NumPy",
        "Matplotlib",
        "scikit-learn",
        "Snorkel",
        "OpenAI",
        "PyTorch",
      ],
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="condensed-margin">
          <h1 className="font-heading text-4xl md:text-5xl text-[#2F4156] mb-4">
            Projects
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl">
            A showcase of my work - from AI-powered applications to scalable
            infrastructure solutions.
          </p>
        </div>

        <section className="condensed-section">
          <div className="text-left mb-6">
            <h2 className="font-heading text-3xl text-[#2F4156]">
              Featured Projects
            </h2>
          </div>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="box-3d p-6">
                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                  <div className="md:col-span-2">
                    <h3 className="font-heading text-xl text-[#2F4156] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#666666] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-[#F5EFEB] text-[#2F4156] text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link text-sm"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link text-sm"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.demoStatus && (
                        <span className="text-[#666666] text-sm italic">
                          {project.demoStatus}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#F5EFEB] rounded h-full flex items-center justify-center p-4">
                    {project.title === "GPTracker" ? (
                      <div className="flex items-center space-x-4">
                        <img
                          src="/chatgpt.svg"
                          alt="ChatGPT"
                          className="w-14 h-14 object-contain"
                        />
                        <img
                          src="/GPTracker.png"
                          alt="GPTracker"
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    ) : project.title === "LLVM Compiler" ? (
                      <img
                        src="/llvm.png"
                        alt="LLVM Compiler"
                        className="w-full h-full object-contain"
                      />
                    ) : project.title.includes("Pocket Reader") ? (
                      <img
                        src="/pocketreader.png"
                        alt="Pocket Reader"
                        className="w-full h-full object-contain opacity-80"
                      />
                    ) : project.title === "PeerCycle" ? (
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: "#e5e5f7",
                            opacity: 0.8,
                            backgroundImage:
                              "radial-gradient(circle at center center, #444cf7, #e5e5f7), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px)",
                            backgroundBlendMode: "multiply",
                          }}
                        ></div>
                        <span
                          className="text-[#2F4156] text-xl font-bold"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          PeerCycle
                        </span>
                      </div>
                    ) : project.title === "Portfolio Website" ? (
                      <img
                        src="/website.svg"
                        alt="Website"
                        className="w-40 h-40 object-contain"
                      />
                    ) : (
                      <div className="text-[#2F4156] text-4xl font-heading">
                        {project.title.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="condensed-section">
          <div className="text-left mb-6">
            <h2 className="font-heading text-3xl text-[#2F4156]">
              Technical Skills
            </h2>
          </div>
          <div className="box-3d p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="font-heading text-lg text-[#2F4156] mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[#F5EFEB] text-[#2F4156] text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
