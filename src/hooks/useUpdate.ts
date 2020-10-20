import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export default (callback: EffectCallback, deps?: DependencyList) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      callback();
    }
  }, deps);
};
