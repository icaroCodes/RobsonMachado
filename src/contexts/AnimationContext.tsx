import React, { createContext, useContext, useEffect, useState } from 'react';

type AnimationLevel = 'low' | 'high';

interface AnimationContextProps {
  level: AnimationLevel;
  isMobile: boolean;
}

const AnimationContext = createContext<AnimationContextProps>({
  level: 'high',
  isMobile: false,
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [level, setLevel] = useState<AnimationLevel>('high');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setLevel(mobile ? 'low' : 'high');
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <AnimationContext.Provider value={{ level, isMobile }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationLevel = () => useContext(AnimationContext);
