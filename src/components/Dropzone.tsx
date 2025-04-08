// components/DropZone.tsx
import { useDropzone } from 'react-dropzone';
import { v4 as uuid } from 'uuid';
import { useAssets } from '../context/useAssets';
import { Asset } from '../types/Asset';

const DropZone = ({ zone }: { zone: 'source' | 'target' }) => {
  const { assets, setAssets } = useAssets();

  const onDrop = (acceptedFiles: File[]) => {
    const newAssets: Asset[] = acceptedFiles.map(file => {
      const url = URL.createObjectURL(file);
      const type = file.type.startsWith('image')
        ? 'image'
        : file.type.startsWith('audio')
        ? 'audio'
        : 'video';

      return {
        id: uuid(),
        name: file.name,
        src: url,
        type,
        source: zone,
      };
    });

    setAssets([...assets, ...newAssets]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded p-4 text-center text-white mb-4 ${
        isDragActive ? 'bg-green-700' : 'bg-zinc-800'
      }`}
    >
      <input {...getInputProps()} />
      <p>Drop files here or click to upload</p>
    </div>
  );
};

export default DropZone;