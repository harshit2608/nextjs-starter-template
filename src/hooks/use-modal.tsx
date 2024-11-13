import { useContext } from 'react';
import {
  ModalContext,
  ModalContextType,
} from '@/components/providers/modal-provider';

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};
