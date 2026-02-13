import { createContext, useContext, useState, useCallback } from 'react';

const WindowManagerContext = createContext(null);

export function WindowManagerProvider({ children }) {
  const [windows, setWindows] = useState({});
  const [zCounter, setZCounter] = useState(100);
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, isMinimized: false },
    }));
    setZCounter((z) => z + 1);
    setActiveWindow(id);
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false, isMinimized: false },
    }));
    setActiveWindow(null);
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }));
  }, []);

  const restoreWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: false },
    }));
    setZCounter((z) => z + 1);
    setActiveWindow(id);
  }, []);

  const focusWindow = useCallback((id) => {
    setZCounter((z) => z + 1);
    setActiveWindow(id);
  }, []);

  const getZIndex = useCallback(
    (id) => {
      return id === activeWindow ? zCounter : (windows[id]?.zIndex || 100);
    },
    [activeWindow, zCounter, windows]
  );

  const isWindowOpen = useCallback(
    (id) => windows[id]?.isOpen ?? false,
    [windows]
  );

  const isWindowMinimized = useCallback(
    (id) => windows[id]?.isMinimized ?? false,
    [windows]
  );

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        activeWindow,
        zCounter,
        openWindow,
        closeWindow,
        minimizeWindow,
        restoreWindow,
        focusWindow,
        getZIndex,
        isWindowOpen,
        isWindowMinimized,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error('useWindowManager must be used within WindowManagerProvider');
  return ctx;
}
