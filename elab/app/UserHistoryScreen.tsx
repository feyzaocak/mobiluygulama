import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const userHistoryData = [
  { id: '1', date: '2024-12-01', value: 'Hormon Değeri: 3.4 (Normal)' },
  { id: '2', date: '2024-11-15', value: 'Hormon Değeri: 5.6 (Yüksek)' },
  { id: '3', date: '2024-11-01', value: 'Hormon Değeri: 2.1 (Düşük)' },
];

export default function UserHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geçmiş Değerler</Text>
      <FlatList
        data={userHistoryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
});
