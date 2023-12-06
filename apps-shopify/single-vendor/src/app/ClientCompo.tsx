'use client';

import { getShop } from '@/services/getShop';
import { useEffect } from 'react';

const ClientCompo = () => {
  useEffect(() => {
    (async () => {
      const response = await getShop();
      console.log('!@#!@#!@#!@#', response);
    })();
  }, []);

  return null;
};

export default ClientCompo;
