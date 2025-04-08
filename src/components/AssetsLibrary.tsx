import React, { useState } from 'react';
import { useAssets } from '../context/useAssets';
import { AssetType } from '../types/Asset';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './AssetItem';
import { Asset } from '../types/Asset';
import AssetItem from './AssetItem';
import AddAssetModal from './AddAssetModal';
import AddCircle from '@material-symbols/svg-400/outlined/add_circle.svg?react';

const Filters: (AssetType | 'all')[] = ['all', 'image', 'audio', 'video'];

const AssetsLibrary: React.FC = () => {
  const { assets, setAssets } = useAssets();
  const [zoneFilter, setZoneFilter] = useState<{
    source: 'all' | AssetType;
    target: 'all' | AssetType;
  }>({
    source: 'all',
    target: 'all',
  });

  const [showModal, setShowModal] = useState(false);
  const [currentZone, setCurrentZone] = useState<'source' | 'target'>('source');

  const handleDelete = (id: string) => {
    setAssets(assets.filter((a) => a.id !== id));
  };

  const openModalForZone = (zone: 'source' | 'target') => {
    setCurrentZone(zone);
    setShowModal(true);
  };

  const renderZone = (zone: 'source' | 'target') => {
    const filter = zoneFilter[zone];

    const zoneAssets = assets.filter(
      (a) => a.source === zone && (filter === 'all' || a.type === filter)
    );

    const [{ isOver }, dropRef]: any = useDrop(() => ({
      accept: ItemTypes.ASSET,
      drop: (item: Asset) => {
        setAssets((prevAssets) =>
          prevAssets.map((a) =>
            a.id === item.id ? { ...a, source: zone } : a
          )
        );
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold capitalize">{zone}</h2>
          <select
            value={filter}
            onChange={(e) =>
              setZoneFilter((prev) => ({
                ...prev,
                [zone]: e.target.value as 'all' | AssetType,
              }))
            }
            className="bg-zinc-800 text-white fill-white rounded px-2 py-1 text-sm"
          >
            {Filters.map((f) => (
              <option key={f} value={f}>
                {f === 'all' ? 'All' : f[0].toUpperCase() + f.slice(1) + 's'}
              </option>
            ))}
          </select>
        </div>

        <div
          ref={dropRef}
          className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 p-2 rounded-xl min-h-[100px] transition border-2 border-dashed ${isOver ? 'border-orange-400 bg-orange-950/10' : 'border-transparent'
            }`}
        >
          {/* Plus card */}
          <button
            onClick={() => openModalForZone(zone)}
            className="border-2 border-dashed border-zinc-600 rounded-xl w-full aspect-square flex items-center justify-center text-white hover:border-orange-400 hover:bg-orange-950/20 transition"
          >
            <span className="text-3xl"><AddCircle className='fill-white w-6 h-6' /></span>
          </button>

          {/* Asset cards */}
          {zoneAssets.map((asset) => (
            <AssetItem key={asset.id} asset={asset} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    );
  };


  return (
    <div className="bg-[#373737] w-screen p-6 min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assets</h1>
      </div>

      {showModal && (
        <AddAssetModal
          onClose={() => setShowModal(false)}
          initialZone={currentZone}
        />
      )}

      <div className="flex flex-col gap-20">
        {renderZone('source')}
        {renderZone('target')}
      </div>
    </div>
  );
};

export default AssetsLibrary;
