import { create } from "zustand";

interface User {
  screen_name: string;
  name: string;
  twitter_id: string;
  profile_image_url?: string;
  stripe_price_id?: string;
  stripe_current_period_end?: string;
  stripe_attemp_fail_count?: string;
  limits?: Limits;
}

interface Limits {
  colm_dm_credits?: number;
  lead_scraper_credits?: number;
  content_schedule_credits?: number;
  ai_content_credits?: number;
  auto_dm_credits?: number;
  account_limit?: number;
}

type AuthProviderState = {
  user?: User;
  setUser: (user?: User) => void;
};

const useAuthStore = create<AuthProviderState>((set) => ({
  user: undefined,
  setUser: (user?: User) => set({ user }),
}));

export default useAuthStore;
