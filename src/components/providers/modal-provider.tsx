'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';

export type ModalData = {
  content?: ReactNode;
};

export type ModalContextType = {
  isOpen: boolean;
  setOpen: (modal: React.ReactNode) => void;
  setClose: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setOpen: () => {},
  setClose: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);

  useEffect(() => setIsMounted(true), []);

  const setOpen = (modal: React.ReactNode) => {
    if (modal) {
      setShowingModal(modal);
      setIsOpen(true);
    }
  };

  const setClose = () => {
    setIsOpen(false);
    setShowingModal(null);
  };

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ isOpen, setOpen, setClose }}>
      {children}
      {isOpen && showingModal}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
