import * as React from "react";
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useAccountStore from "@/stores/account.provider";

const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Yunusjon Yusupov",
        value: "personal",
      },
    ],
  },
];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const { accounts } = useAccountStore();

  const [open, setOpen] = React.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false);
  const [selectedAccount, setSelectedAccount] = React.useState(accounts[0]);

  if (!accounts.length) {
    return null;
  }

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select an account"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={selectedAccount.profile_image_url}
                alt={selectedAccount.screen_name}
                className="grayscale"
              />
              <AvatarFallback>
                {selectedAccount.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            {selectedAccount.name}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandGroup key={"accounts"} heading={"Twitter accounts"}>
                {accounts.map((account) => (
                  <CommandItem
                    key={account.account_id}
                    onSelect={() => {
                      setSelectedAccount(account);
                      setOpen(false);
                    }}
                    className="text-sm"
                  >
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage
                        src={account.profile_image_url}
                        alt={account.screen_name}
                        className="grayscale"
                      />
                      <AvatarFallback>
                        {selectedAccount.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    {account.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        account.account_id === selectedAccount.account_id
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowNewTeamDialog(true);
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    Add account
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add account</DialogTitle>
          <DialogDescription>
            Add new account using our chrome extension
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <p>
              Our chrome extension is publicly available in Chrome store and
              Github. We open-sourced our Chrome extension and you can see our
              code{" "}
              <a
                className="underline font-semibold"
                href="https://chromewebstore.google.com/detail/goleadai/bggdknpiepkanmiinfioglmpfkkfbmib?hl=en&authuser=0&pli=1"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Close
          </Button>
          <Button type="submit">Install chrome extension</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
