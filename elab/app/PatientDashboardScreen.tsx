import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Simülasyon verisi
const testResults = {
  IgG: { value: 17.5, range: [7.67, 15.90], label: 'IgG' },
  IgG1: { value: 9.0, range: [3.41, 8.94], label: 'IgG1' },
  IgG2: { value: 2.0, range: [1.71, 6.32], label: 'IgG2' },
  IgG3: { value: 1.2, range: [0.184, 1.060], label: 'IgG3' },
  IgG4: { value: 0.9, range: [0, 1.210], label: 'IgG4' },
  IgA: { value: 4.0, range: [0.61, 3.56], label: 'IgA' },
  IgA1: { value: 2.5, range: [0.50, 3.14], label: 'IgA1' },
  IgA2: { value: 2.0, range: [0.097, 1.560], label: 'IgA2' },
  IgM: { value: 3.0, range: [0.37, 2.86], label: 'IgM' },
};

// Okunabilir ok işaretini döndüren fonksiyon
const getArrow = (value: number, range: [number, number]) => {
  if (value < range[0]) return '↓';  // Aralığın altında (düşük)
  if (value > range[1]) return '↑';  // Aralığın üstünde (yüksek)
  return '✔';  // Aralık içinde (normal)
};

export default function PatientDashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tahlil Sonuçlarınız</Text>
      
      {Object.keys(testResults).map((key) => {
        const result = testResults[key as keyof typeof testResults];
        return (
          <View key={key} style={styles.resultContainer}>
            <Text style={styles.label}>{result.label}</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{result.value} g/L</Text>
              <Text style={styles.arrow}>{getArrow(result.value, [result.range[0], result.range[1]])}</Text>
            </View>
            <Text style={styles.range}>Normal Aralık: {result.range[0]} - {result.range[1]} g/L</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  resultContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
  },
  arrow: {
    fontSize: 20,
    color: '#4CAF50',  // Yeşil renk normal durum için
  },
  range: {
    fontSize: 14,
    color: '#888',
  },
});
