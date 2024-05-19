import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { Mail } from "./data";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import { format } from "date-fns";

interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const chatList = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentChatList = chatList.current;
    if (currentChatList) {
      currentChatList.scrollTop = currentChatList.scrollHeight;
    }
  }, []);

  return (
    <div className="flex h-full flex-col">
      {mail ? (
        <div className="flex flex-1 flex-col overflow-scroll">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={mail.name} />
                <AvatarFallback>
                  {mail.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
                <div className="line-clamp-1 text-xs">
                  <a
                    href={`https://x.com/${mail.screen_name}`}
                    className="font-medium hover:underline"
                  >
                    {mail.screen_name}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div
            ref={chatList}
            className="flex-1 whitespace-pre-wrap p-4 text-sm overflow-scroll"
          >
            {mail.messages.map((message, index) => {
              return (
                <div
                  key={index}
                  className={cn("w-1/2 mb-3", {
                    "ml-auto": message.type == "out",
                  })}
                >
                  <div
                    className={cn("p-4 rounded-xl", {
                      "bg-primary text-primary-foreground":
                        message.type == "out",
                      "bg-secondary text-secondary-foreground":
                        message.type == "in",
                    })}
                  >
                    {message.text}
                  </div>
                  <div
                    className={cn("text-muted-foreground text-xs mt-2 mx-2", {
                      "text-right": message.type == "out",
                    })}
                  >
                    {format(message.created_at, "PP-pp")}
                  </div>
                </div>
              );
            })}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply ${mail.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
