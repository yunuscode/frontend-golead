import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/stores/auth.provider";
import { useEffect } from "react";
import moment from "moment";
import prices from "./prices";

export default function BillingPage() {
  const { user } = useAuthStore();

  const plan = prices.find((item) => item.id == user?.stripe_price_id);

  useEffect(() => {}, [user]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Plan Summary</CardTitle>
              <Badge variant="secondary">{plan?.name}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">
                {user?.limits?.lead_scraper_credits || 0} credits left
              </p>
              <Progress
                className="w-full mt-2"
                value={
                  (user?.limits?.lead_scraper_credits || 1) /
                  ((plan?.lead_scraper_credits || 1) / 100)
                }
              />
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Price/{plan?.mode == "yearly" ? "year" : "month"}
                  </p>
                  <p className="font-semibold">${plan?.price}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Included Credits
                  </p>
                  <p className="font-semibold">{plan?.lead_scraper_credits}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Renewal Date
                  </p>
                  <p className="font-semibold">
                    {moment(user?.stripe_current_period_end).format("LL")}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button size="sm" variant="outline">
                Cancel Subscription
              </Button>
              <Button size="sm">Change Plan</Button>
            </CardFooter>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You can download your invoices with editing Tax, Vat and Company
                name.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Credits Balance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Cold Direct message credits
                </p>
                <p className="font-semibold">
                  {user?.limits?.colm_dm_credits} / {plan?.colm_dm_credits}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Lead scraper credits
                </p>
                <p className="font-semibold">
                  {user?.limits?.lead_scraper_credits} /{" "}
                  {plan?.lead_scraper_credits}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium text-muted-foreground">
                  AI content generation credits
                </p>
                <p className="font-semibold">
                  {user?.limits?.ai_content_credits} /{" "}
                  {plan?.ai_content_credits}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Auto direct message credits
                </p>
                <p className="font-semibold">
                  {user?.limits?.auto_dm_credits} / {plan?.auto_dm_credits}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Content schedule credits
                </p>
                <p className="font-semibold">
                  {user?.limits?.content_schedule_credits} /{" "}
                  {plan?.content_schedule_credits}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Account connection limit
                </p>
                <p className="font-semibold">
                  {user?.limits?.account_limit} / {plan?.account_limit}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
