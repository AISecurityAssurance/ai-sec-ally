import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/ai_storm_logo_transparent.svg"
              alt="AI-Storm Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-foreground">AI Security Assurance</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors">
              Storm Engineering
            </Link>
            <Link to="/journey" className="text-muted-foreground hover:text-primary transition-colors">
              Our Journey
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
