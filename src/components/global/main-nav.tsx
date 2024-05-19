import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface NavItem {
  link: string;
  name: string;
}

const navList: NavItem[] = [
  {
    link: "/",
    name: "Dashboard",
  },
  {
    link: "/schedule",
    name: "Schedules",
  },
  {
    link: "/mail",
    name: "Direct messages",
  },
  {
    link: "/lead",
    name: "Lead scraper",
  },
];

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navList.map((item: NavItem, index: number) => {
        const isDashboardActive =
          item.link == "/" && location.pathname.length === 1 ? true : false;
        const isActive = location.pathname.startsWith(item.link);

        return (
          <Button
            variant="ghost"
            key={index}
            onClick={() => navigate(item.link)}
            className={cn({
              "text-sm font-medium transition-colors hover:text-primary":
                location.pathname.startsWith(item.link),
              "text-sm font-medium text-muted-foreground transition-colors hover:text-primary":
                !(item.link == "/" ? isDashboardActive : isActive),
            })}
          >
            {item.name}
          </Button>
        );
      })}
    </nav>
  );
}
