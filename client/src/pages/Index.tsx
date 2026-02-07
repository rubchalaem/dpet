import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import { DashboardNavbar } from "@/components/DashboardNavbar";
import { StatCard } from "@/components/StatCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardNavbar userName="John Doe" />

      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Welcome Card */}
          <div className="bg-card rounded-2xl shadow-soft p-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your account today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <StatCard
                title="Total Users"
                value="12,847"
                icon={<Users className="w-6 h-6" />}
                trend="+12% from last month"
                color="blue"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <StatCard
                title="Revenue"
                value="$48,392"
                icon={<DollarSign className="w-6 h-6" />}
                trend="+8% from last month"
                color="green"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <StatCard
                title="Orders"
                value="1,284"
                icon={<ShoppingCart className="w-6 h-6" />}
                trend="+23% from last month"
                color="orange"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <StatCard
                title="Activity"
                value="89%"
                icon={<Activity className="w-6 h-6" />}
                trend="+5% from last month"
                color="purple"
              />
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-card rounded-2xl shadow-soft p-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-xl font-bold text-foreground mb-4">
              Recent Activity
            </h2>
            <div className="space-y-3">
              {[
                { action: "New user registered", time: "2 minutes ago", icon: Users },
                { action: "Order #1284 completed", time: "15 minutes ago", icon: ShoppingCart },
                { action: "Payment received", time: "1 hour ago", icon: DollarSign },
                { action: "New booking confirmed", time: "3 hours ago", icon: Activity },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.action}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "View Reports", description: "Access detailed analytics" },
              { title: "Manage Users", description: "Add or remove team members" },
              { title: "Settings", description: "Configure your preferences" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-soft p-6 hover:shadow-card transition-all duration-300 cursor-pointer group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
                <div className="mt-4 text-primary flex items-center gap-2">
                  <span className="text-sm font-medium">Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
