import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

type Data = {
  id: string;
  title: string;
  category: string;
  price: number;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Hecatae1/cs262/d3681955134a07c431b1b5c42d16add714320809/lab05/items-app/data/items.json'
      );
      const json = await response.json();

      // The response may be an array, or an object with a data/items property.
      if (Array.isArray(json)) {
        setData(json as Data[]);
      } else if (Array.isArray(json.data)) {
        setData(json.data as Data[]);
      } else if (Array.isArray(json.items)) {
        setData(json.items as Data[]);
      } else {
        const arr = Object.values(json).find((v) => Array.isArray(v));
        if (Array.isArray(arr)) setData(arr as Data[]);
        else setData([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.category}, {item.price}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;