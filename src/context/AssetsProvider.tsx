import React, { useEffect, useState } from 'react';
import { AssetsContext } from './AssetsContext';
import { Asset } from '../types/Asset';

export const AssetsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [assets, setAssetsState] = useState<Asset[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('assets');
    if (stored) setAssetsState(JSON.parse(stored));
  }, []);

  const setAssets = (newAssets: Asset[]) => {
    setAssetsState(newAssets);
    localStorage.setItem('assets', JSON.stringify(newAssets));
  };

  return (
    <AssetsContext.Provider value={{ assets, setAssets }}>
      {children}
    </AssetsContext.Provider>
  );
};
