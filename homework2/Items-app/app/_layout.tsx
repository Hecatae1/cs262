// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { ItemProvider } from '../context/ItemContext'; // adjust path if needed

export default function RootLayout() {
  return (
    <ItemProvider>
      <Stack>
        {/* Render the (tabs) layout as the main screen */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Details screen sits above tabs */}
        <Stack.Screen name="details" options={{ title: 'Details' }} />
      </Stack>
    </ItemProvider>
  );
}