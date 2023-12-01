import { classNames } from '../utils/classNames';

const Space = () => {
  return <></>;
};

export default Space;

const spacing = {
  mx: {
    default: [classNames('mx-0'), classNames('mx-4'), classNames('mx-6'), classNames('mx-8')],
    responsive: [
      classNames('sm:mx-0 lg:mx-0'),
      classNames('sm:mx-6 lg:mx-8'),
      classNames('sm:mx-8 lg:mx-12'),
      classNames('sm:mx-12 lg:mx-16'),
    ],
  },

  my: {
    default: [classNames('my-0'), classNames('my-4'), classNames('my-6'), classNames('mx-8')],
    responsive: [
      classNames('sm:my-0 lg:my-0'),
      classNames('sm:my-6 lg:my-8'),
      classNames('sm:my-8 lg:my-12'),
      classNames('sm:my-12 lg:my-16'),
    ],
  },

  px: {
    default: [classNames('px-0'), classNames('px-4'), classNames('px-6'), classNames('px-8')],
    responsive: [
      classNames('sm:px-0 lg:px-0'),
      classNames('sm:px-6 lg:px-8'),
      classNames('sm:px-8 lg:px-12'),
      classNames('sm:px-12 lg:px-16'),
    ],
  },

  py: {
    default: [classNames('py-0'), classNames('py-4'), classNames('py-6'), classNames('py-8')],
    responsive: [
      classNames('sm:py-0 lg:py-0'),
      classNames('sm:py-6 lg:py-8'),
      classNames('sm:py-8 lg:py-12'),
      classNames('sm:py-12 lg:py-16'),
    ],
  },

  sx: {
    default: [classNames('space-x-0'), classNames('space-x-4'), classNames('space-x-6'), classNames('space-x-8')],
    responsive: [
      classNames('sm:space-x-0 lg:space-x-0'),
      classNames('sm:space-x-6 lg:space-x-8'),
      classNames('sm:space-x-8 lg:space-x-12'),
      classNames('sm:space-x-12 lg:space-x-16'),
    ],
  },
  sy: {
    default: [classNames('space-y-0'), classNames('space-y-4'), classNames('space-y-6'), classNames('space-y-8')],
    responsive: [
      classNames('sm:space-y-0 lg:space-y-0'),
      classNames('sm:space-y-6 lg:space-y-8'),
      classNames('sm:space-y-8 lg:space-y-12'),
      classNames('sm:space-y-12 lg:space-y-16'),
    ],
  },
  gx: {
    default: [classNames('gap-x-0'), classNames('gap-x-4'), classNames('gap-x-6'), classNames('gap-x-8')],
    responsive: [
      classNames('sm:gap-x-0 lg:gap-x-0'),
      classNames('sm:gap-x-6 lg:gap-x-8'),
      classNames('sm:gap-x-8 lg:gap-x-12'),
      classNames('sm:gap-x-12 lg:gap-x-16'),
    ],
  },
  gy: {
    default: [classNames('gap-y-0'), classNames('gap-y-4'), classNames('gap-y-6'), classNames('gap-y-8')],
    responsive: [
      classNames('sm:gap-y-0 lg:gap-y-0'),
      classNames('sm:gap-y-6 lg:gap-y-8'),
      classNames('sm:gap-y-8 lg:gap-y-12'),
      classNames('sm:gap-y-12 lg:gap-y-16'),
    ],
  },
};
