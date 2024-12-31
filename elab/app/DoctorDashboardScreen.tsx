import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Simülasyon verisi: Her hastanın tahlil sonuçları
const patients = [
  {
    id: 1,
    name: 'Ahmet Yılmaz(22,E)',
    testResults: {
      IgG: { value: 17.5, range: [7.67, 15.90], label: 'IgG' },
      IgA: { value: 4.0, range: [0.61, 3.56], label: 'IgA' },
      IgM: { value: 3.0, range: [0.37, 2.86], label: 'IgM' },
    },
  },
  {
    id: 2,
    name: 'Elif Demir(16,K)',
    testResults: {
      IgG: { value: 8.5, range: [4.87, 13.27], label: 'IgG' },
      IgA: { value: 2.5, range: [0.60, 3.37], label: 'IgA' },
      IgM: { value: 1.8, range: [0.49, 2.01], label: 'IgM' },
    },
  },
  {
    id: 3,
    name: 'Mehmet Akın(30,E)',
    testResults: {
      IgG: { value: 11.0, range: [7.67, 15.90], label: 'IgG' },
      IgA: { value: 3.2, range: [0.61, 3.56], label: 'IgA' },
      IgM: { value: 2.5, range: [0.37, 2.86], label: 'IgM' },
    },
  },
];

// Okunabilir ok işaretini döndüren fonksiyon
const getArrow = (value: number, range: [number, number]) => {
  if (value < range[0]) return '↓';  // Aralığın altında (düşük)
  if (value > range[1]) return '↑';  // Aralığın üstünde (yüksek)
  return '✔';  // Aralık içinde (normal)
};

// Her hastanın test sonuçları için bileşen
const PatientTestResults = ({ testResults }: { testResults: typeof patients[0]['testResults'] }) => {
  return (
    <View style={styles.resultsContainer}>
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
    </View>
  );
};

// Doktor Dashboard bileşeni
export default function DoctorDashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hastaların Tahlil Sonuçları</Text>

      {patients.map((patient) => (
        <View key={patient.id} style={styles.patientContainer}>
          <Text style={styles.patientName}>{patient.name}</Text>
          {/* testResults'i doğru şekilde geçiyoruz */}
          <PatientTestResults testResults={patient.testResults} />
        </View>
      ))}
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
  patientContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  patientName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultsContainer: {
    marginTop: 10,
  },
  resultContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  label: {
    fontSize: 18,
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
    fontSize: 16,
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
