import { create } from 'zustand';

interface UserState {
  email: string;
  nickname: string;
  accessToken: string;
  setEmail: (email: string) => void;
  setNickname: (nickname: string) => void;
  setAccessToken: (token: string) => void;
  setUserInfo: (email: string, nickname: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  email: '',
  nickname: '',
  accessToken: '',
  setEmail: (email) => set({ email }),
  setNickname: (nickname) => set({ nickname }),
  setAccessToken: (token) => set({ accessToken: token }),
  setUserInfo: (email, nickname) => set({ email, nickname }),
}));
