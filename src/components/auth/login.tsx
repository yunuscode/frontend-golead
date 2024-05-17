import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "../global/spinner";

export default function LoginComponent() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("token")) {
      const token = window.location.search.replace("?token=", "");
      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    }
  }, []);

  const login = () => {
    setIsRedirecting(true);
    window.location.href = "http://localhost:5678/api/auth/twitter";
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg dark:bg-gray-800 md:px-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Welcome to GoLead!</h1>
          <p className="text-gray-500 dark:text-gray-400">
            It is the powerful all-in-one tool for your Twitter business!
          </p>
        </div>
        <div className="space-y-4">
          <Button
            disabled={isRedirecting}
            onClick={login}
            className="w-full"
            variant="outline"
          >
            {isRedirecting ? (
              <LoadingSpinner className="mr-2 h-4 w-4" />
            ) : (
              <TwitterIcon className="mr-2 h-4 w-4" />
            )}
            {isRedirecting ? "Redirecting..." : "Login with Twitter"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function TwitterIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
