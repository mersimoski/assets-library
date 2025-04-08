import React, { useState } from 'react';
import { Asset } from '../types/Asset';
import { useAssets } from '../context/useAssets';
import { v4 as uuid } from 'uuid';

interface Props {
  onClose: () => void;
  initialZone: 'source' | 'target';
}

const AddAssetModal: React.FC<Props> = ({ onClose, initialZone }) => {
  const { assets, setAssets } = useAssets();
  const [file, setFile] = useState<File | null>(null);

  const handleAdd = () => {
    if (!file) return;
    const type = file.type.startsWith('image')
      ? 'image'
      : file.type.startsWith('audio')
        ? 'audio'
        : 'video';

    const newAsset: Asset = {
      id: uuid(),
      name: file.name,
      src: URL.createObjectURL(file),
      type,
      source: initialZone,
    };

    setAssets([...assets, newAsset]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-zinc-900 p-6 rounded-2xl w-[90%] max-w-md space-y-5 text-white shadow-2xl">
        <h2 className="text-2xl font-bold">Add Asset</h2>

        <input
          type="file"
          accept="image/*,audio/*,video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-orange-600 file:text-white hover:file:bg-orange-500"
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="bg-zinc-600 hover:bg-zinc-500 transition px-4 py-2 rounded-lg text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!file}
            className={`px-4 py-2 rounded-lg text-sm transition ${file
              ? 'bg-green-600 hover:bg-green-500'
              : 'bg-green-800 cursor-not-allowed opacity-60'
              }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAssetModal;
