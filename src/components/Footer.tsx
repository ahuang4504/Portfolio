const Footer = () => {
  return (
    <footer className="py-8 mt-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <p className="text-sm text-[#666666] -mt-1">© 2025 Albert Huang</p>

          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6">
            <span className="text-base text-[#666666] flex items-center -mt-1">Contact Me:</span>
            <div className="space-y-2 md:space-y-0 md:flex md:space-x-6 md:items-center">
              <div>
                <a
                  href="mailto:ahuang941354@gmail.com"
                  className="text-link text-sm inline-flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
                >
                  <img
                    src="/email.png"
                    alt="Email"
                    className="w-6 h-auto opacity-60"
                  />
                  ahuang941354@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/ahuang941354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-sm inline-flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
                >
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="w-6 h-6 opacity-60"
                  />
                  LinkedIn
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/ahuang4504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-sm inline-flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
                >
                  <img
                    src="/github.png"
                    alt="GitHub"
                    className="w-6 h-6 opacity-60"
                  />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
