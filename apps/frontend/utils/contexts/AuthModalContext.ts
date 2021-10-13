import { makeAutoObservable } from 'mobx'

export class AuthModal {
  showModal = false;
  constructor() {
    makeAutoObservable(this)
  }

  setShowModal(show: boolean) {
    this.showModal = show
  }
}

export const AuthModalStore = new AuthModal();
