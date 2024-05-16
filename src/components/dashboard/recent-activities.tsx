import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActivities() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none">
            <a className="underline font-medium" href="#">
              Olivia Martin
            </a>{" "}
            replied to your tweet
          </p>
          <p className="text-sm text-muted-foreground">
            That's cool bro! I will definetely try!
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none">
            <a className="underline font-medium" href="#">
              Asadbek
            </a>{" "}
            retweeted your tweet
          </p>
          <p className="text-sm text-muted-foreground">
            This gives 3 times boost to your tweet!
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none">
            <a className="underline font-medium" href="#">
              Joe Deo
            </a>{" "}
            started following you
          </p>
          <p className="text-sm text-muted-foreground">
            She/He liked your 3 tweets before!
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none">
            <a className="underline font-medium" href="#">
              Wesley
            </a>{" "}
            replied your cold dm message
          </p>
          <p className="text-sm text-muted-foreground">
            Hey bro! Can we book a call to discuss your offer!
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm leading-none">
            <a className="underline font-medium" href="#">
              Elon Musk
            </a>{" "}
            started following you
          </p>
          <p className="text-sm text-muted-foreground">
            She/He has 3 startups and 240B dollars according to his bio!
          </p>
        </div>
      </div>
    </div>
  );
}
