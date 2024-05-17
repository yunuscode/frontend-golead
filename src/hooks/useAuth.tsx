import request from "@/lib/axios";
import useAuthStore from "@/stores/auth.provider";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useAuth() {
  const { user, setUser } = useAuthStore();

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
      const user_id = "1234";
      const twitter_id = data.data.user.twitter_id;
      const profile_image_url = data.data.user.profile_image_url;
      const status = "ACTIVE";

      setUser({
        name,
        screen_name,
        user_id,
        twitter_id,
        status,
        profile_image_url,
      });
    }
  }, [data, error, isPending, isError, setUser, user]);

  return { user, isLoading: isPending, error, refetch };
}
