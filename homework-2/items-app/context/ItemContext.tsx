import React, { createContext, useContext, useState, ReactNode } from "react";

type Item = {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
};

type ItemContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  deleteItem: (id: string) => void;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);

  const deleteItem = React.useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <ItemContext.Provider value={{ items, setItems, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) throw new Error("useItemContext must be used within ItemProvider");
  return context;
};
