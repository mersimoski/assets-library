import React from 'react';
import { useAssets } from '../context/useAssets';

const AssetsLibrary: React.FC = () => {
    const { assets } = useAssets();

    return (
        <div>
            <h1>Assets Library</h1>
            <ul>
                {assets.map((asset) => (
                    <li key={asset.id}>{asset.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AssetsLibrary;
