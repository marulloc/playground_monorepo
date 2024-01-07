import DrawerContents from './DrawerContents';
import DrawerRoot from './DrawerRoot';
import DrawerTrigger from './DrawerTrigger';

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Contents: DrawerContents,
});
