import React from 'react';
import { useDrag } from 'react-dnd';
import { Asset } from '../types/Asset';
import CloseIcon from '@material-symbols/svg-400/outlined/close_small.svg?react';
import Image from '@material-symbols/svg-400/outlined/image.svg?react';

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
            className="relative border border-zinc-700 rounded-xl p-3 bg-zinc-800 text-white flex flex-col gap-2 shadow hover:shadow-lg transition duration-200"
        >
            {asset.type === 'image' && (
                <img
                    src={asset.src}
                    alt={asset.name}
                    className="w-full h-full object-cover rounded-lg"
                />
            )}
            {asset.type === 'audio' && (
                <audio
                    controls
                    src={asset.src}
                    className="w-full rounded-lg bg-zinc-900"
                />
            )}
            {asset.type === 'video' && (
                <video
                    controls
                    src={asset.src}
                    className="w-full h-full object-cover rounded-lg"
                />
            )}
            <div className="flex items-center gap-2 justify-center">
                <Image className="w-5 h-5 fill-white" />
                <div className="text-xs font-medium truncate">{asset.name.split(".")[1]}</div>
            </div>
            {onDelete && (
                <button
                    className="absolute top-1.5 right-1.5 bg-red-600 hover:bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => onDelete(asset.id)}
                >
                    x
                </button>
            )}
        </div>
    );
};

export default AssetItem;
