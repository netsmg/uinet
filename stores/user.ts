import { defineStore } from 'pinia'

interface UserState {
  isLoggedIn: boolean;
  userData: {
    name: string;
    email: string;
  } | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isLoggedIn: false,
    userData: null,
  }),
  actions: {
    login(userData: { name: string; email: string }) {
      this.isLoggedIn = true;
      this.userData = userData;
    },
    logout() {
      this.isLoggedIn = false;
      this.userData = null;
    }
  }
})
