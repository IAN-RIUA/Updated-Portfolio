const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border/50">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Ian Riua. Transforming data into insights.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
