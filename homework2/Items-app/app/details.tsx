import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ItemProvider, useItems } from '../context/ItemContext';

function DetailsContent() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { items, remove } = useItems();
  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Item not found</Text>
      </View>
    );
  }

  const onDelete = () => {
    Alert.alert(
      'Delete item',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            remove(item.id);
            router.replace('/');
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: '700', fontSize: 18 }}>{item.title}</Text>
      <Text style={{ marginTop: 8 }}>{item.category} — ${item.price}</Text>
      <Text style={{ marginTop: 12 }}>{item.description}</Text>

      <TouchableOpacity onPress={onDelete} style={{ marginTop: 24 }}>
        <View style={{ backgroundColor: '#ff3b30', padding: 12, borderRadius: 6 }}>
          <Text style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function Details() {
  return (
    <ItemProvider>
      <DetailsContent />
    </ItemProvider>
  );
}