'use client';

import { cartQL } from '@/services/cart';
import { Cart } from '@shopify/hydrogen-react/storefront-api-types';
import { AtomEffect, atom } from 'recoil';

const getLocalStorage = <T>(key: string) => {
  const memoizedValue = localStorage.getItem(key);
  return JSON.parse(memoizedValue || 'null') as T | null;
};

const setLocalStorage = <T extends any>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const localCartState = atom<Cart | null>({
  key: 'local-cart',
  default: null,
  effects: [
    ({ setSelf, onSet, trigger }) => {
      const key = 'local-cart';

      const initCart = async () => {
        console.log('>>>>>>> Load cart start \n');
        const memoizedCart = getLocalStorage<Cart>(key);

        if (memoizedCart) {
          console.log('<<<1>>> Memoized cart \n', memoizedCart);
          setSelf(memoizedCart);
        } else {
          const { cart: newCart } = await cartQL.createCart({ cartInput: {} });
          console.log('<<<2>>> Created cart \n', newCart);
          localStorage.setItem(key, JSON.stringify(newCart));
          setSelf(newCart as Cart);
        }
      };

      // init
      if (trigger === 'get') initCart();

      // effect
      onSet((newValue, _, isReset) => {
        isReset ? localStorage.removeItem(key) : setLocalStorage(key, newValue);
      });
    },
  ],
});

// 유저 입장 -> 로컬 스토리지에 카트 아이디 탐색 -> 없으면 카트 생성 // 있으면
// 유저 로그인 -> 유저 메모이즈드 카트 검색 -> 없으면 로컬 카트를 유저 메모이즈드 카트로 이식
