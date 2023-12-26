import { classNames } from '@/components/Marulloc-UI-v2/utils/classNames';
import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useRef } from 'react';
import { createContext, useState } from 'react';

type TCarouselContext = {
  carouselItems: React.ReactNode[];
  currentIdx: number;
  carouselContainer: React.RefObject<HTMLDivElement> | null;
};

type TCarouselState = [TCarouselContext, Dispatch<SetStateAction<TCarouselContext>>];
export const CarouselContext = createContext<TCarouselState | null>(null);

const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error('<Carousel.*> component must be rendered as child of <Carousel> compoent');

  return context;
};

/**
 *
 *
 *
 *
 *
 *
 *
 * @param param0
 * @returns
 */
const CarouselRoot = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<TCarouselContext>({
    carouselItems: [],
    currentIdx: 0,
    carouselContainer: null,
  });

  return (
    <CarouselContext.Provider value={[context, setContext]}>
      <div className="relative overflow-hidden ">{children}</div>
    </CarouselContext.Provider>
  );
};

/**
 *
 *
 *
 *
 *
 *
 * @param param0
 * @returns
 */
const CarouselContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ currentIdx, carouselItems }, setContext] = useCarouselContext();

  useEffect(() => {
    setContext((context) => {
      const realCarouselItems = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) && child.type === (<CarouselItem />).type,
      );
      // const fakeStartItem = React.cloneElement(<>{realCarouselItems[realCarouselItems.length - 1]}</>);
      // const fakeEndItem = React.cloneElement(<>{realCarouselItems[0]}</>);

      return {
        carouselItems: [...realCarouselItems],
        currentIdx: 0,
        carouselContainer: containerRef,
      };
    });
  }, [children, setContext]);

  useEffect(() => {
    if (!containerRef?.current) return;

    const translateValue = `calc(-${currentIdx * 100}%)`;

    containerRef.current.style.transition = 'transform 0.3s ease';
    containerRef.current.style.transform = `translateX(${translateValue})`;
  }, [currentIdx]);

  return (
    <div ref={containerRef} className={classNames('flex   relative h-full')}>
      {carouselItems}
    </div>
  );
};

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * @param param0
 * @returns
 */
const CarouselController = ({ children, direction }: { children: React.ReactNode; direction: 'left' | 'right' }) => {
  const [{ currentIdx, carouselContainer }, setContext] = useCarouselContext();

  const handleCarouselControll = () => {
    switch (direction) {
      case 'left':
        setContext((context) => ({
          ...context,
          currentIdx: currentIdx === 0 ? context.carouselItems.length - 1 : context.currentIdx - 1,
        }));

        break;
      case 'right':
        setContext((context) => ({
          ...context,
          currentIdx: currentIdx === context.carouselItems.length - 1 ? 0 : context.currentIdx + 1,
        }));
        break;
    }
  };

  return (
    <div onClick={handleCarouselControll} className="">
      {children}
    </div>
  );
};

/**
 *
 *
 *
 *
 *
 *
 *
 * @param param0
 * @returns
 */
const CarouselItem = ({ children }: { children?: React.ReactNode }) => {
  return <div className={classNames(' min-w-full h-full flex flex-1 justify-center items-center')}>{children}</div>;
};

export const Carousel = Object.assign(CarouselRoot, {
  Container: CarouselContainer,
  Controller: CarouselController,
  Item: CarouselItem,
});
