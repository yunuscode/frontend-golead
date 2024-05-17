import { create } from "zustand";

type UserStatus = "ACTIVE" | "PAYMENT_FAILED" | "BANNED";

interface User {
  screen_name: string;
  name: string;
  user_id: string;
  twitter_id: string;
  status: UserStatus;
  profile_image_url?: string;
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
