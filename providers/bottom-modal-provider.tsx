'use client';

import { BottomSheet } from '@/components/bottom-sheet';
import { createContext, useContext, ReactNode, useState } from 'react';

interface BottomModalContextType {
  isVisible: boolean;
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
  modalContent: ReactNode;
}

const BottomModalContext = createContext<BottomModalContextType | undefined>(undefined);

export function BottomModalProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <BottomModalContext.Provider value={{ isVisible, showModal, hideModal, modalContent }}>
      {children}
      <BottomSheet />
    </BottomModalContext.Provider>
  );
}

export const useBottomSheet = () => {
  const context = useContext(BottomModalContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomModalProvider');
  }
  return context;
};
