import React, { createContext, useContext, useEffect, useState } from 'react';

export type Item = {
  id: string;
  title: string;
  description?: string;
  category?: string;
  price?: number;
};

type ContextType = {
  items: Item[];
  remove: (id: string) => void;
  reload: () => Promise<void>;
};

const ItemContext = createContext<ContextType | undefined>(undefined);

export function ItemProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const load = async () => {
    try {
      const url = 'https://raw.githubusercontent.com/Hecatae1/cs262/main/lab06/fetch-app/app/data/items.json';
      const res = await fetch(url);
      const json = await res.json();
      if (Array.isArray(json)) setItems(json as Item[]);
      else if (Array.isArray(json.items)) setItems(json.items as Item[]);
      else if (Array.isArray(json.data)) setItems(json.data as Item[]);
      else setItems([]);
    } catch (e) {
      console.warn('Failed to fetch items, falling back to empty list', e);
      setItems([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = (id: string) => setItems((s) => s.filter((i) => i.id !== id));
  const reload = async () => await load();

  return (
    <ItemContext.Provider value={{ items, remove, reload }}>{children}</ItemContext.Provider>
  );
}

export function useItems() {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error('useItems must be used inside ItemProvider');
  return ctx;
}
