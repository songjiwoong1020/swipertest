import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal = ({ children, isOpen }: Props) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className={styles.backdrop}>
      <div className={styles.content}>{children}</div>
    </div>
  );

  const modalRoot = document.getElementById('modal');
  if (!modalRoot) return null;

  return createPortal(modalContent, modalRoot);
};

export default Modal;

/*
접근성****
role
aria-modal
aria-labelledby
aria-describedby
 */

/*

훅 사용시

111111111111111111

export const useOverlay = (): OverlayController => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, open, close };
};

222222222222222222


const useModal = (options: UseModalOptions = {}) => {
  const { scrollLock = true, onOpen, onClose } = options;
  const onOpenRef = useRef(onOpen);
  const onCloseRef = useRef(onClose);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    onOpenRef.current?.();
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    onCloseRef.current?.();
    setIsOpen(false);
  }, []);

  const clickOutsideRef = useClickOutsideRef<HTMLDivElement>(closeModal);
  const focusTrapRef = useFocusTrap<HTMLDivElement>({
    isActive: isOpen,
  });

  const modalRef = compoundRefs<HTMLDivElement>(clickOutsideRef, focusTrapRef);

  useScrollLock({ scrollLock, isOpen });
  useKeydownEscape(isOpen ? closeModal : null);

  useEffect(() => {
    onOpenRef.current = onOpen;
    onCloseRef.current = onClose;
  });

  return {
    modalRef,
    openModal,
    closeModal,
    isOpen,
  };
};

export default useModal;

 */
