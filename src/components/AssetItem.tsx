import React from 'react';
import { useDrag } from 'react-dnd';
import { Asset } from '../types/Asset';

export const ItemTypes = {
    ASSET: 'asset',
};

interface AssetItemProps {
    asset: Asset;
    onDelete?: (id: string) => void;
}

const AssetItem: React.FC<AssetItemProps> = ({ asset, onDelete }) => {
    const [, dragRef]: any = useDrag(() => ({
        type: ItemTypes.ASSET,
        item: asset,
    }));

    return (
        <div
            ref={dragRef}
            className="asset-item border rounded p-2 bg-zinc-900 text-white flex flex-col gap-2 relative"
        >
            {asset.type === 'image' && <img src={asset.src} alt={asset.name} className="w-full h-24 object-cover rounded" />}
            {asset.type === 'audio' && <audio controls src={asset.src} className="w-full" />}
            {asset.type === 'video' && <video controls src={asset.src} className="w-full h-24 object-cover rounded" />}
            <div className="text-sm truncate">{asset.name}</div>
            {onDelete && (
                <button
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    onClick={() => onDelete(asset.id)}
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default AssetItem;
