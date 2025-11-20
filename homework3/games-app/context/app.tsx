import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useItemContext } from "../context/ItemContext";
import { Player } from "../types/Item";

export default function App() {
  return <AppContent />;
}

function AppContent() {
  const { items, setItems, deleteItem } = useItemContext();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch items only once if context is empty
  useEffect(() => {
    if (items.length === 0) {
      const fetchItems = async () => {
        try {
          const response = await fetch(
            "https://monopoly-service-fwb0djd9etgre8cr.mexicocentral-01.azurewebsites.net/games:1"
          );
          const json = await response.json();

          const data =
            Array.isArray(json)
              ? json
              : Array.isArray(json.items)
              ? json.items
              : Array.isArray(json.data)
              ? json.data
              : Object.values(json).find((v) => Array.isArray(v)) || [];

          setItems(data as Player[]);
        } catch (error) {
          console.error("Fetch error:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchItems();
    } else {
      setLoading(false);
    }
  }, [items, setItems]);

  const renderItem = ({ item }: { item: Player }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() =>
          router.push({ pathname: "/details", params: { id: item.id } })
        }
      >
        <Text style={styles.itemTitle}>
          Start Time: {item.starttime}</Text>

        <Text style={styles.itemPrice}>
          End Time: {item.endtime ? item.endtime : "N/A"}
        </Text>
        <Text style={styles.itemCategory}>Status: {item.status}</Text>


      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  itemContent: { flex: 1 },
  itemTitle: { fontSize: 18, fontWeight: "600", marginBottom: 4 },
  itemCategory: { fontSize: 14, color: "#666", marginBottom: 4 },
  itemPrice: { fontSize: 16, fontWeight: "bold", color: "#007AFF" },
  deleteText: { fontSize: 20, color: "#FF3B30", marginLeft: 12 },
});
