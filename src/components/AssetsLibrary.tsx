import React, { useState } from 'react';
import { useAssets } from '../context/useAssets';
import { AssetType } from '../types/Asset';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './AssetItem';
import { Asset } from '../types/Asset';

import AssetItem from './AssetItem';


const Filters: (AssetType | 'all')[] = ['all', 'image', 'audio', 'video'];

const AssetsLibrary: React.FC = () => {
  const { assets, setAssets } = useAssets();
  const [filter, setFilter] = useState<'all' | AssetType>('all');

  const handleDelete = (id: string) => {
    setAssets(assets.filter(a => a.id !== id));
  };

  const renderZone = (zone: 'source' | 'target') => {
    const zoneAssets = assets.filter(
      (a) => a.source === zone && (filter === 'all' || a.type === filter)
    );

    const [{ isOver }, dropRef] = useDrop(() => ({
      accept: ItemTypes.ASSET,
      drop: (item: Asset) => {
        const updated = assets.map((a) =>
          a.id === item.id ? { ...a, source: zone } : a
        );
        setAssets(updated);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    return (
      <div className="space-y-2">
        <h2 className="text-lg font-semibold capitalize text-white">{zone}</h2>
        <div className="grid grid-cols-3 gap-4">
          {zoneAssets.map((asset) => (
            <AssetItem key={asset.id} asset={asset} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black p-6 rounded-xl min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-2xl">Assets</h1>
        <select
          className="p-2 rounded bg-zinc-800 text-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | AssetType)}
        >
          {Filters.map((f) => (
            <option key={f} value={f}>
              {f === 'all' ? 'All' : f[0].toUpperCase() + f.slice(1) + 's'}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-8">
        {renderZone('source')}
        {renderZone('target')}
      </div>
    </div>
  );
};

export default AssetsLibrary;