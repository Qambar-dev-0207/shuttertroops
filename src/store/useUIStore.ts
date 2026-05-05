import { create } from 'zustand';

interface UIState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  
  cursorType: 'default' | 'link' | 'video';
  setCursorType: (type: 'default' | 'link' | 'video') => void;
  
  isFocusActive: boolean;
  setFocusActive: (active: boolean) => void;
  
  menuOpen: boolean;
  toggleMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
  
  cursorType: 'default',
  setCursorType: (type) => set({ cursorType: type }),
  
  isFocusActive: false,
  setFocusActive: (active) => set({ isFocusActive: active }),
  
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));
