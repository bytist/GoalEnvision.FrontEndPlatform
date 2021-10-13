import { makeAutoObservable } from 'mobx'

export class CreateModal {
  visibleModal = '';
  constructor() {
    makeAutoObservable(this)
  }

  isAddEmployeeModalShowed() {
    return this.visibleModal === 'add-people-modal'
  }

  isAddNewEmployeeModalShowed() {
    return this.visibleModal === 'add-new-people-modal'
  }

  isAddHeadModalShowed() {
    return this.visibleModal === 'add-head-modal'
  }

  isChooseHeadModalShowed() {
    return this.visibleModal === 'choose-head-modal'
  }

  isAddGroupModalShowed() {
    return this.visibleModal === 'add-group-modal'
  }

  isErrorModalShowed() {
    return this.visibleModal === 'error-modal'
  }

  isStep1ExitModalShowed() {
    return this.visibleModal === 'step1-exit-modal'
  }

  isCreateHelpShowed() {
    return this.visibleModal === 'create-help-drawer'
  }

  setShowAddEmployeeModal(show: boolean) {
    this.setModal(show, 'add-people-modal')
  }

  setShowAddNewEmployeeModal(show: boolean) {
    this.setModal(show, 'add-new-people-modal')
  }

  setShowAddGroupModal(show: boolean) {
    this.setModal(show, 'add-group-modal')
  }

  setShowAddHeadModal(show: boolean) {
    this.setModal(show, 'add-head-modal')
  }

  setShowChooseHeadModal(show: boolean) {
    this.setModal(show, 'choose-head-modal')
  }

  setShowErrorModal(show: boolean) {
    this.setModal(show, 'error-modal')
  }

  setShowCreateHelp(show: boolean) {
    this.setModal(show, 'create-help-drawer')
  }

  setShowStep1ExitModal(show: boolean) {
    this.setModal(show, 'step1-exit-modal')
  }

  setModal(show: boolean, key: string) {
    if (show) {
      this.visibleModal = key
    } else {
      this.visibleModal = ''
    }
  }
}

export const CreateModalStore = new CreateModal();
