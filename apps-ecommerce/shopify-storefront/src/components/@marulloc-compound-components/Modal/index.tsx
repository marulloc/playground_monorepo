import ModalContents from './ModalContents';
import ModalBackdrop from './ModalBackdrop';
import ModalRoot from './ModalRoot';
import ModalTrigger from './ModalTrigger';

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Contents: ModalContents,
  Backdrop: ModalBackdrop,
});
