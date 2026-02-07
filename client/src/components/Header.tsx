import { Link } from "react-router-dom";

interface HeaderProps {
  showNav?: boolean;
}

export const Header = ({ showNav = false }: HeaderProps) => {
  return (
    <header className="bg-header py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-header-foreground">
          Logo
        </Link>
        {showNav && (
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-header-foreground hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link to="/login" className="text-header-foreground hover:opacity-70 transition-opacity">
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
