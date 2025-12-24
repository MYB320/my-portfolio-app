export const FooterSection = () => {
  return (
    <footer className="bg-background px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm text-muted-foreground order-2 md:order-1 transition-colors duration-300 hover:text-foreground">
            © 2025 Myb Portfolio
          </p>
          <div className="flex items-center order-1 md:order-2">
            <a
              href="https://github.com/myb320"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
            >
              GitHub
            </a>
            <span className="mx-2 md:mx-3 text-sm text-muted-foreground/50">
              |
            </span>
            <a
              href="https://instagram.com/myb320"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
            >
              Instagram
            </a>
            <span className="mx-2 md:mx-3 text-sm text-muted-foreground/50">
              |
            </span>
            <a
              href="https://linkedin.com/in/myb20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
