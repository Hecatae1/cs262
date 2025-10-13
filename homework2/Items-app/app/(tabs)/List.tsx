import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useItems } from '../context/ItemContext';

export default function ListTab() {
  const router = useRouter();
  const { items } = useItems();

  const subset = items.slice(0, 3);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Available Items</Text>
      <View style={{ marginBottom: 12 }}>
        <Button title="Items" onPress={() => { /* placeholder: could refresh or open modal */ }} />
      </View>

      <FlatList
        data={subset}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push({ pathname: '/details', params: { id: item.id } })}>
            <View style={{ padding: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
              <Text style={{ fontWeight: '600' }}>{item.title}</Text>
              <Text style={{ color: '#666' }}>{item.category} — ${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
