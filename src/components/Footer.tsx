const Footer = () => {
  return (
    <footer className="py-8 mt-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#666666]">© 2025 Albert Huang</p>

          <div className="flex items-center space-x-6">
            <span className="text-sm text-[#666666]">Contact Me:</span>
            <a
              href="mailto:ahuang941354@gmail.com"
              className="text-link text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/email.png"
                alt="Email"
                className="w-6 h-auto opacity-60"
              />
              ahuang941354@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/ahuang941354"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 opacity-60"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/ahuang4504"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
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
    </footer>
  );
};

export default Footer;
