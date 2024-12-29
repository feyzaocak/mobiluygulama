import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PatientDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tahlil Sonuçlarınız</Text>
      {/* Buraya diğer tahlil detayları veya içerik ekleyebilirsiniz */}
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
