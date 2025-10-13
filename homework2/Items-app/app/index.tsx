import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text style={{ marginTop: 8 }}>Open the Tabs below to see Items and About pages.</Text>
    </View>
  );
}