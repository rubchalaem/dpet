import { LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface DashboardNavbarProps {
  userName?: string;
}

export const DashboardNavbar = ({ userName = "User" }: DashboardNavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="bg-background py-4 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl shadow-soft px-6 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">
            Logo
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground font-medium border-b-2 border-primary pb-1"
            >
              Dashboard
            </Link>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Reports
            </Link>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Settings
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="hidden sm:block text-foreground font-medium">
                {userName}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-border bg-card text-foreground hover:bg-accent transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
