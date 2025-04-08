# 🎨 Assets Library – Coding Challenge

A React + TypeScript + Vite application for managing and organizing media assets such as images, audio, and video. This app provides a clean and modern UI to drag-and-drop, upload, filter, and manage assets across two zones: **Source** and **Target**.

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or newer)
- npm or yarn

### ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/assets-library.git

# Navigate to the project directory
cd assets-library

# Install dependencies
npm install
# or
yarn install
```

### 🧪 Run Locally

```bash
npm run dev
# or
yarn dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

- 📁 **Drag & Drop Files from Desktop**: Drop images, audios, or videos directly into either zone.
- ➕ **Add via Modal**: Use the plus (+) button to upload media with a file picker.
- 📤 **Drag Between Zones**: Move assets between "Source" and "Target" using internal drag-and-drop.
- 🎛 **Filtering by Type**: Show only images, audios, or videos using a dropdown filter per zone.
- 🧹 **Delete Assets**: Remove any asset with the delete button.
- 💾 **Persistence**: All assets are saved in `localStorage` using React Context API — your data stays even after refresh.
- 🧠 **Global State**: Asset state is shared and managed with React Context API.
- 📱 **Responsive UI**: Zones are horizontally scrollable on smaller screens for a mobile-friendly layout.
- 🎨 **Modern Design**: Styled with TailwindCSS + Material Symbols icons.

---

## 🧩 Tech Stack

- ✅ React 18
- ✅ TypeScript
- ✅ Vite
- ✅ React DnD
- ✅ TailwindCSS
- ✅ Material Symbols Icons
- ✅ Context API (for global state)

---

## 📁 Project Structure

```
src/
  ├── components/
  │   ├── AssetsLibrary.tsx        # Main component with source/target zones
  │   ├── AssetItem.tsx            # Individual asset card
  │   ├── AddAssetModal.tsx        # Modal for uploading files
  ├── context/
  │   ├── AssetsContext.tsx        # Context definition
  │   ├── AssetsProvider.tsx       # Context state + localStorage persistence
  │   └── useAssets.ts             # Custom context hook
  ├── dnd/
  │   └── DnDProviderWrapper.tsx   # Drag-and-drop provider
  ├── types/
  │   └── Asset.ts                 # Asset interface/type definitions
  ├── utils/
  │   └── fileHelpers.ts           # Utility functions (optional)
  ├── App.tsx                      # Entry component
  ├── main.tsx                     # Vite entry file
```

---

## 🧠 Challenge Requirements Checklist

- [x] React app with TypeScript and Vite
- [x] AssetsLibrary component with drag-and-drop and upload via plus button
- [x] Separate zones for "Source" and "Target"
- [x] Filtering by "All", "Images", "Audios", "Videos" using dropdown
- [x] Use of Material Symbols icons: [@material-symbols/svg-400](https://www.npmjs.com/package/@material-symbols/svg-400)
- [x] State persisted with Context API and localStorage
- [x] Delete feature for assets
- [x] Horizontal scroll support for responsive design
- [x] Bonus: drag-and-drop assets between Source and Target

---

## 📄 License

This project is created for a coding challenge and demonstration purposes.