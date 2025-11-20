import React, { createContext, useContext, useState, ReactNode } from "react";

type Player = {
  id: number;

  starttime: string;
  endtime: string | null;
  status: string;
};

type ItemContextType = {
  items: Player[];
  setItems: React.Dispatch<React.SetStateAction<Player[]>>;
  deleteItem: (id: number) => void;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Player[]>([]);

  const deleteItem = React.useCallback((id: number) => {
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
