import { Asset } from '../types/Asset';

export interface AssetsContextType {
    assets: Asset[];
    setAssets: (assets: Asset[]) => void;
}
