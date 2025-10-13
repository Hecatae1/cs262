import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Render the (tabs) layout as the main screen (router will load app/(tabs)/_layout.tsx) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* details screen sits above tabs */}
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}