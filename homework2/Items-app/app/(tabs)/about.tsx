import React from 'react';
import { View, Text } from 'react-native';

export default function AboutTab() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: '700', fontSize: 18 }}>About</Text>
      <Text style={{ marginTop: 8 }}>This app shows items and details (tabs layout).</Text>
    </View>
  );
}
