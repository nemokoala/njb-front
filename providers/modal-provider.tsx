'use client';

import { createContext, useContext, useState, useRef } from 'react';
import { CommonModal } from '@/components/common/common-modal';

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  modalContent: { title: string; content: React.ReactNode; cancelable: boolean };
  confirmActionRef: React.MutableRefObject<VoidFunction>;
  closeActionRef: React.MutableRefObject<VoidFunction>;
  changeModalContent: (
    modalContent: { title: string; content: React.ReactNode; cancelable?: boolean },
    confirmAction?: VoidFunction,
    closeAction?: VoidFunction,
  ) => void;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
  modalContent: { title: '', content: null, cancelable: false },
  confirmActionRef: { current: () => {} },
  closeActionRef: { current: () => {} },
  changeModalContent: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: null as React.ReactNode, cancelable: false });
  const confirmActionRef = useRef<VoidFunction>(() => {});
  const closeActionRef = useRef<VoidFunction>(() => {});

  const changeModalContent = (
    modalContent: {
      title: string;
      content: React.ReactNode;
      cancelable?: boolean;
    },
    confirmAction?: VoidFunction,
    closeAction?: VoidFunction,
  ) => {
    setModalContent({
      ...modalContent,
      cancelable: modalContent.cancelable ?? false,
    });
    if (confirmAction) {
      confirmActionRef.current = confirmAction;
    } else {
      confirmActionRef.current = () => {};
    }
    if (closeAction) {
      closeActionRef.current = closeAction;
    } else {
      closeActionRef.current = () => {};
    }
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, modalContent, confirmActionRef, closeActionRef, changeModalContent }}
    >
      {children}
      <CommonModal />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
