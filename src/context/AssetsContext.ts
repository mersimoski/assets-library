import { createContext } from 'react';
import { AssetsContextType } from './types';

export const AssetsContext = createContext<AssetsContextType | undefined>(undefined);
