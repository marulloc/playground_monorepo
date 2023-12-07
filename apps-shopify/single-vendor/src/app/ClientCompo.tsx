'use client';

import { getShopDetail } from '@/services/getShopDetails';
import { useEffect } from 'react';

const ClientCompo = () => {
  useEffect(() => {
    (async () => {
      const response = await getShopDetail();
      console.log('!@#!@#!@#!@#', response);
    })();
  }, []);

  return null;
};

export default ClientCompo;
