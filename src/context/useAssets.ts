import { useContext } from 'react';
import { AssetsContext } from './AssetsContext';
import { AssetsContextType } from './types';

export const useAssets = (): AssetsContextType => {
  const context = useContext(AssetsContext);
  if (!context) throw new Error('useAssets must be used within an AssetsProvider');
  return context;
};