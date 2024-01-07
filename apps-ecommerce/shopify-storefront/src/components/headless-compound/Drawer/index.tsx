import DrawerContents from './DrawerContents';
import DrawerOverlay from './DrawerOverlay';
import DrawerRoot from './DrawerRoot';
import DrawerTrigger from './DrawerTrigger';

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Contents: DrawerContents,
  Overlay: DrawerOverlay,
});
