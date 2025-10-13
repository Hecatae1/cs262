import React from 'react';
import { Tabs } from 'expo-router';
import { ItemProvider } from '@/context/ItemContext';

export default function TabsLayout() {
  return (
    <ItemProvider>
      <Tabs>
        <Tabs.Screen name="items" options={{ title: 'Items' }} />
        <Tabs.Screen name="about" options={{ title: 'About' }} />
      </Tabs>
    </ItemProvider>
  );
}
