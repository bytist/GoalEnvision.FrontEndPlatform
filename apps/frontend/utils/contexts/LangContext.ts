import { makeAutoObservable } from 'mobx'

export class AppLang {
  lang = 'en-us'
  constructor() {
    makeAutoObservable(this)
  }

  setLang(lang: string) {
    this.lang = lang
  }
}

export const AppLangStore = new AppLang()
