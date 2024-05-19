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
    link: "/dm",
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
      {navList.map((item: NavItem, index: number) => (
        <Button
          variant="ghost"
          key={index}
          onClick={() => navigate(item.link)}
          className={
            location.pathname.startsWith(item.link)
              ? "text-sm font-medium transition-colors hover:text-primary"
              : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          }
        >
          {item.name}
        </Button>
      ))}
    </nav>
  );
}
