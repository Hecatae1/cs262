/**
 * RootLayout - Main app layout component using Expo Router
 *
 * This module defines the root navigation structure using Expo Router's
 * Stack navigator.
 *
 * Navigation Structure:
 * - index: List of all items
 * - details: Individual item details with delete functionality
 */
// app/_layout.tsx
import { Stack } from 'expo-router';
import { ItemProvider } from '../context/ItemContext';

export default function RootLayout() {
  return (
    <ItemProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ title: 'Details' }} />
      </Stack>
    </ItemProvider>
  );
}