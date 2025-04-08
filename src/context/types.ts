import { Asset } from '../types/Asset';

type AssetsSetter = (value: Asset[] | ((prev: Asset[]) => Asset[])) => void;

export interface AssetsContextType {
  assets: Asset[];
  setAssets: AssetsSetter;
}