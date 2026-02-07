import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  color: "blue" | "green" | "orange" | "purple";
}

const colorClasses = {
  blue: "bg-stat-blue/10 text-stat-blue",
  green: "bg-stat-green/10 text-stat-green",
  orange: "bg-stat-orange/10 text-stat-orange",
  purple: "bg-stat-purple/10 text-stat-purple",
};

export const StatCard = ({ title, value, icon, trend, color }: StatCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-soft p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {trend && (
            <p className="text-xs text-muted-foreground mt-2">{trend}</p>
          )}
        </div>
        <div className={cn("p-3 rounded-xl", colorClasses[color])}>
          {icon}
        </div>
      </div>
    </div>
  );
};
