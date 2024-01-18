'use client';

import { useEffect } from 'react';

export const usePortalRoot = (portalId: string) => {
  useEffect(() => {
    const rootDiv = document.createElement('div');
    rootDiv.id = portalId;

    document.body.appendChild(rootDiv);
    return () => {
      document.body.removeChild(rootDiv);
    };
  }, [portalId]);
};

export function withPortalRoot<T extends React.ComponentType<any>>(
  Component: T,
  portalId: string,
): React.FC<React.ComponentProps<T>> {
  const ComponentWithPortalRoot: React.FC<React.ComponentProps<T>> = (props) => {
    useEffect(() => {
      if (document.getElementById(portalId)) return;

      const rootDiv = document.createElement('div');
      rootDiv.id = portalId;
      document.body.appendChild(rootDiv);

      // 언마운트 시 Portal 루트 제거
      return () => {
        document.body.removeChild(rootDiv);
      };
    }, []);

    // 원래 컴포넌트 반환
    return <Component {...props} />;
  };

  return ComponentWithPortalRoot;
}
