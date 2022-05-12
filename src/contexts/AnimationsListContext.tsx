import React, {
  useState,
  useMemo,
  createContext,
  useEffect,
  ReactNode,
} from 'react';

interface AnimationsListProps {
  animations: AnimationType[];
}

export interface ReactNodeProps {
  children: ReactNode;
}

const MOCK: AnimationType[] = [
  {
    title: 'Loading',
    navigationScreenName: 'Loading',
  },
];

export const AnimationsListContext = createContext({} as AnimationsListProps);

const AnimationsListProvider: React.FC<ReactNodeProps> = ({children}) => {
  const [animations, setAnimations] = useState<AnimationType[]>([]);

  useEffect(() => {
    setAnimations(MOCK);
  }, []);

  const value = useMemo(
    () => ({
      animations,
    }),
    [animations],
  );

  return (
    <AnimationsListContext.Provider value={value}>
      {children}
    </AnimationsListContext.Provider>
  );
};

export default AnimationsListProvider;
