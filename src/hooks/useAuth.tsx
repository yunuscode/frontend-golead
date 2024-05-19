import request from "@/lib/axios";
import useAccountStore from "@/stores/account.provider";
import useAuthStore from "@/stores/auth.provider";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useAuth() {
  const { user, setUser } = useAuthStore();
  const { setAccounts } = useAccountStore();

  const getUser = async () => {
    const data = await request.get("/api/auth/getMe");
    return data;
  };

  const { isPending, data, error, isError, refetch } = useQuery({
    queryKey: ["getMe"],
    queryFn: getUser,
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      if (error.message.includes("401")) {
        setUser(undefined);
      }
    }

    if (data && !user) {
      const name = data.data.user.name;
      const screen_name = data.data.user.screen_name;
      const twitter_id = data.data.user.twitter_id;
      const profile_image_url = data.data.user.profile_image_url;

      const stripe_price_id = data.data.user.stripe_price_id;
      const stripe_current_period_end =
        data.data.user.stripe_current_period_end;
      const stripe_attemp_fail_count = data.data.user.stripe_attemp_fail_count;

      const limits_data = data.data.user.user_limits;

      const limits = {
        colm_dm_credits: limits_data.colm_dm_credits,
        lead_scraper_credits: limits_data.lead_scraper_credits,
        content_schedule_credits: limits_data.content_schedule_credits,
        ai_content_credits: limits_data.ai_content_credits,
        auto_dm_credits: limits_data.auto_dm_credits,
        account_limit: limits_data.account_limit,
      };

      setUser({
        name,
        screen_name,
        twitter_id,
        profile_image_url,
        stripe_price_id,
        stripe_current_period_end,
        stripe_attemp_fail_count,
        limits,
      });

      if (data.data.user.accounts.length) {
        setAccounts(data.data.user.accounts);
      }
    }
  }, [data, error, isPending, isError, setUser, user, setAccounts]);

  return { user, isLoading: isPending, error, refetch };
}
