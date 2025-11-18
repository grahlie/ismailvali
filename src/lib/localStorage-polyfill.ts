/**
 * localStorage polyfill for SSR compatibility
 * Provides no-op implementations during server-side rendering
 * to prevent "localStorage.getItem is not a function" errors
 */

if (typeof window === 'undefined') {
  // Server-side: provide a mock localStorage object
  // This prevents "localStorage.getItem is not a function" errors during SSR
  const storage: Storage = {
    getItem: () => null, // localStorage.getItem returns null when key doesn't exist
    setItem: () => {}, // No-op during SSR
    removeItem: () => {}, // No-op during SSR
    clear: () => {}, // No-op during SSR
    get length() {
      return 0;
    },
    key: () => null, // localStorage.key returns null for invalid index
  };

  // Make localStorage available globally during SSR
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).localStorage = storage;
}

