const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Copyright */}
          <div className="text-muted-foreground">
            <p>&copy; {currentYear} Fidel Mwaro Ngoka. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;