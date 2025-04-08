import React from 'react';
import AssetsLibrary from './components/AssetsLibrary';

import { DnDProviderWrapper } from './dnd/DnDProviderWrapper';
import { AssetsProvider } from './context/AssetsProvider';

const App: React.FC = () => {
  return (
    <AssetsProvider>
      <DnDProviderWrapper>
        <AssetsLibrary />
      </DnDProviderWrapper>
    </AssetsProvider>
  );
};

export default App;
