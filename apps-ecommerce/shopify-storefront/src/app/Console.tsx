'use client';

import { useEffect } from 'react';

const ConsoleCompo = ({ data }: { data: any }) => {
  useEffect(() => {
    (async () => {
      // const resp = await getCollectionProducts({ collection: 'automated-collection' });
      // console.log('client call', resp);
    })();
  }, []);

  console.log('Data', data);
  return null;
};

export default ConsoleCompo;
