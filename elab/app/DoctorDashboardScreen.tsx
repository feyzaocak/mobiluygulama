import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const patients = [
  { id: '1', name: 'Ali Yılmaz', testResult: 'Kan Tahlili Normal' },
  { id: '2', name: 'Ayşe Demir', testResult: 'Şeker Yüksek' },
  { id: '3', name: 'Mehmet Kaya', testResult: 'Tansiyon Düşük' },
];

export default function DoctorDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasta Listesi</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.result}>{item.testResult}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
});
