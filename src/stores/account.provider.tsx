import { create } from "zustand";

interface Account {
  account_id: string;
  screen_name: string;
  status: string;
  name: string;
  profile_image_url?: string;
  twitter_id: string;
}

type AccountProviderState = {
  accounts: Account[];
  setAccounts: (accounts?: Account[]) => void;
};

const useAccountStore = create<AccountProviderState>((set) => ({
  accounts: [],
  setAccounts: (accounts?: Account[]) => set({ accounts }),
}));

export default useAccountStore;
