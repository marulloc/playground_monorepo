import React, { Dispatch, SetStateAction, useContext } from 'react';
import { createContext, useState } from 'react';

type TCarouselContext = {
  currentIdx: number;
  goLeft: () => void;
  goRight: () => void;
  carouselItems: React.ReactNode;
  realItemStartIdx: number;
  realItemEndIdx: number;
};

type TCarouselState = [TCarouselContext, Dispatch<SetStateAction<TCarouselContext>>];
export const CarouselContext = createContext<TCarouselState | null>(null);

const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error('<Carousel.*> component must be rendered as child of <Carousel> compoent');

  return context;
};

const CarouselRoot = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<TCarouselContext>(() => {
    const realCarouselItems = React.Children.toArray(children).filter((child) => {
      return React.isValidElement(child) && child.type === (<CarouselItem />).type;
    });
    const fakeStartItem = React.cloneElement(<>{realCarouselItems[realCarouselItems.length - 1]}</>);
    const fakeEndItem = React.cloneElement(<>{realCarouselItems[0]}</>);

    const goLeft = () => {};
    const goRight = () => {};

    return {
      carouselItems: [fakeStartItem, ...realCarouselItems, fakeEndItem],
      realItemStartIdx: 1,
      realItemEndIdx: realCarouselItems.length,
      currentIdx: 1,
      goLeft,
      goRight,
    };
  });

  return (
    <CarouselContext.Provider value={[context, setContext]}>
      <div className="flex flex-wrap justify-between items-center lg:justify-center pt-10 pb-10 ">{children}</div>
    </CarouselContext.Provider>
  );
};

const CarouselController = ({
  children,
  direction,
  duration,
}: {
  children: React.ReactNode;
  direction: 'left' | 'right';
  duration: number;
}) => {
  return <div>{children}</div>;
};

const CarouselItem = ({ children }: { children?: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const Carousel = Object.assign(CarouselRoot, {
  Controller: CarouselController,
  Item: CarouselItem,
});
