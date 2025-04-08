export type AssetType = 'image' | 'audio' | 'video';

export interface Asset {
  id: string;
  type: AssetType;
  src: string;
  name: string;
  source: 'source' | 'target';
}
