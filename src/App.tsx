import React from 'react';
import AssetsLibrary from './components/AssetsLibrary';

import { AssetsProvider } from './context/AssetsProvider';

const App: React.FC = () => {
  return (
    <AssetsProvider>
      <AssetsLibrary />
    </AssetsProvider>
  );
};

export default App;
