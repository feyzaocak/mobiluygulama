import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const testResults = [
  { id: '1', test: 'Kan Tahlili', result: 'Normal' },
  { id: '2', test: 'Şeker', result: 'Yüksek' },
  { id: '3', test: 'Tansiyon', result: 'Düşük' },
];

export default function PatientDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tahlil Sonuçlarınız</Text>
      <FlatList
        data={testResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.test}>{item.test}</Text>
            <Text style={styles.result}>{item.result}</Text>
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
  test: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
});
