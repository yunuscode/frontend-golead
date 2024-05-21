import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import AddTweetContent from "@/components/lead/add-tweet-content";
import AddTweetUser from "@/components/lead/add-tweet-user";
import { LockIcon } from "lucide-react";

export default function AddLeadPage() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Generate Leads from Twitter
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Easily capture leads from your social media presence.
            </p>
          </div>
          <div className="space-y-4">
            <Tabs defaultValue="tweet">
              <TabsList className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <TabsTrigger value="tweet">From Tweet</TabsTrigger>
                <TabsTrigger value="twitter-user">
                  From Twitter User
                </TabsTrigger>
                <TabsTrigger disabled value="search">
                  <LockIcon className="w-4 h-4 mr-2" />
                  <p>From Search</p>
                </TabsTrigger>
              </TabsList>
              <TabsContent className="space-y-4" value="tweet">
                <AddTweetContent />
              </TabsContent>
              <TabsContent className="space-y-4" value="twitter-user">
                <AddTweetUser />
              </TabsContent>
              <TabsContent className="space-y-4" value="search">
                <div className="flex items-center space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Enter search query"
                    type="text"
                  />
                  <Button>Search</Button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-bold">Search Results</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Showing results for "Acme Inc"
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Leads Captured</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        36 leads
                      </p>
                    </div>
                  </div>
                  <Button>Download Leads</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      id="verified"
    >
      <g clip-path="url(#clip0_1084_3803)">
        <path
          fill="#4DC4FF"
          d="M13.3546 1.46995C12.6544 0.614752 11.3466 0.614755 10.6465 1.46995L9.65463 2.6814C9.58665 2.76443 9.47325 2.79482 9.37286 2.7569L7.90817 2.20367C6.87422 1.81314 5.74163 2.46703 5.56286 3.55774L5.30963 5.10281C5.29227 5.20871 5.20926 5.29172 5.10335 5.30908L3.55829 5.56231C2.46759 5.74108 1.81368 6.87366 2.20422 7.90762L2.75745 9.37231C2.79537 9.4727 2.76498 9.5861 2.68195 9.65408L1.4705 10.6459C0.615302 11.3461 0.615304 12.6539 1.4705 13.3541L2.68195 14.3459C2.76498 14.4139 2.79537 14.5273 2.75745 14.6277L2.20422 16.0924C1.81369 17.1263 2.46758 18.2589 3.55829 18.4377L5.10335 18.6909C5.20926 18.7083 5.29227 18.7913 5.30963 18.8972L5.56286 20.4422C5.74163 21.5329 6.87421 22.1868 7.90817 21.7963L9.37286 21.2431C9.47325 21.2052 9.58665 21.2355 9.65463 21.3186L10.6465 22.53C11.3466 23.3852 12.6544 23.3852 13.3546 22.53L14.3464 21.3186C14.4144 21.2355 14.5278 21.2052 14.6282 21.2431L16.0929 21.7963C17.1269 22.1868 18.2595 21.5329 18.4382 20.4422L18.6915 18.8972C18.7088 18.7913 18.7918 18.7083 18.8977 18.6909L20.4428 18.4377C21.5335 18.2589 22.1874 17.1263 21.7969 16.0924L21.2436 14.6277C21.2057 14.5273 21.2361 14.4139 21.3191 14.3459L22.5306 13.3541C23.3858 12.6539 23.3858 11.3461 22.5306 10.6459L21.3191 9.65408C21.2361 9.5861 21.2057 9.4727 21.2436 9.37231L21.7969 7.90762C22.1874 6.87366 21.5335 5.74108 20.4428 5.56231L18.8977 5.30908C18.7918 5.29172 18.7088 5.20871 18.6915 5.10281L18.4382 3.55774C18.2595 2.46704 17.1269 1.81313 16.0929 2.20367L14.6282 2.7569C14.5278 2.79482 14.4144 2.76443 14.3464 2.6814L13.3546 1.46995Z"
        ></path>
        <path
          fill="#ECEFF1"
          fill-rule="evenodd"
          d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.8897 16.171 10.6989 16.25 10.5 16.25C10.3011 16.25 10.1103 16.171 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
          clip-rule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1084_3803">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function RepeatIcon(props) {
  return (
    <svg
      {...props}
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}
