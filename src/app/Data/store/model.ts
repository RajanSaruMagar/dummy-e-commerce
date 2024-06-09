import create from 'zustand';

interface ModalState {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  openModal: false,
  setOpenModal: (open) => set({ openModal: open }),
}));
