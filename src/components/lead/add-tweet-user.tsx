import React from "react";

import { CheckIcon, Twitter, ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AddTweetUser() {
  return (
    <>
      <div className="flex items-center space-x-2  pt-3">
        <Input
          className="flex-1 focus-visible:ring-0"
          placeholder="Paste twitter user"
          type="text"
        />
        <Button disabled>Fetch user</Button>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 items-start sm:grid-cols-2">
          <div className="border rounded">
            <div className="flex items-center gap-2 p-4">
              <Avatar>
                <AvatarImage
                  alt="@shadcn"
                  src="https://pbs.twimg.com/profile_images/1777989503052877825/F-eV7WXP_400x400.jpg"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Yunus 🚀</span>
                  <CheckIcon className="w-4 h-4 fill-primary" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  @yunuscode
                </p>
              </div>
            </div>
            <Separator />
            <p className="text-gray-500 dark:text-gray-400 p-4">
              👨‍💻 Full-time indiehacker <br />
              🚀 Now building http://golead.ai
              <br />
              🥩 React, React native (Expo), Next.js, Replicate and AI
            </p>
            <Separator />
            <div className="flex items-center justify-start gap-2 p-4">
              <div className="flex gap-1 items-center">
                <span className="text-sm">Followers:</span>
                <span className="text-sm font-medium">412</span>
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-sm">Following:</span>
                <span className="text-sm font-medium">60</span>
              </div>
            </div>
          </div>
          <div>
            <div className="grid gap-2">
              <DropdownMenuCheckboxes />
              <div className="flex items-center gap-2 mt-1">
                <Input
                  className="w-full focus-visible:ring-0"
                  placeholder="Minimum followers"
                  type="number"
                />
                <Input
                  className="w-full focus-visible:ring-0"
                  placeholder="Maximum followers"
                  type="number"
                />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Switch id="verified" />
                <Label className="font-medium" htmlFor="verified">
                  Only verified
                </Label>
              </div>
              <div className="flex items-center mt-1">
                <Input
                  className="w-full focus-visible:ring-0"
                  placeholder="Include bio tags, seperate with comma"
                />
              </div>
              <div className="flex items-center mt-1">
                <Input
                  className="w-full focus-visible:ring-0"
                  placeholder="Exclude bio tags, seperate with comma"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-2 items-center">
                <Twitter className="text-primary" />
                <h3 className="text-lg font-bold">@yunuscode's followers</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                ~472 unfiltered users
              </p>
              <div className="flex gap-2 items-center mt-2 w-4/5 flex-wrap">
                <Badge variant="outline" className="rounded">
                  People who followed
                </Badge>
                <Badge variant="outline" className="rounded">
                  People who user followed
                </Badge>
                <Badge variant="outline" className="rounded">
                  People who have less than 20 followers
                </Badge>
              </div>
            </div>
            <Button>Start scraping</Button>
          </div>
        </div>
      </div>
    </>
  );
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex justify-between items-center">
          <p>Followers, Followings</p>
          <ArrowDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          People who followed
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          People who user followed
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
