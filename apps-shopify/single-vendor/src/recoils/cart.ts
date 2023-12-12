'use client';

import { Cart } from '@shopify/hydrogen-react/storefront-api-types';
import { AtomEffect, atom } from 'recoil';

/**
 * @mvp1 add to cart, update line,
 */

const getLocalStorage = <T>(key: string) => {
  const memoizedValue = localStorage.getItem(key);
  return memoizedValue as T | null;
};

export const localCartState = atom<Cart | null>({
  key: 'local-cart',
  default: null,
  effects: [
    ({ setSelf, onSet, trigger }) => {
      if (trigger === 'get') {
        const memoizedCart = getLocalStorage<Cart>('local-cart');

        setSelf(memoizedCart);
      }

      // effect
      onSet((newValue, _, isReset) => {
        isReset ? '' : '';
      });
    },
  ],
});

// 유저 입장 -> 로컬 스토리지에 카트 아이디 탐색 -> 없으면 카트 생성 // 있으면
// 유저 로그인 -> 유저 메모이즈드 카트 검색 -> 없으면 로컬 카트를 유저 메모이즈드 카트로 이식
