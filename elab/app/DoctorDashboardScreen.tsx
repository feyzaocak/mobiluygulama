import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DoctorDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasta Listesi</Text>
      {/* Buraya doktorlar için özel içerik eklenebilir */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
