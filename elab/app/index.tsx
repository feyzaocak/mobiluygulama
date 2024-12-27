import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>eLab Uygulamasına Hoş Geldiniz</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Doktor Girişi"
          onPress={() => router.push('/DoktorInputScreen')}
          color="#4CAF50" // Yeşil renk
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Kullanıcı Geçmişi"
          onPress={() => router.push('/UserHistoryScreen')}
          color="#607D8B" // Gri renk
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Hafif gri arka plan
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333', // Başlık rengi
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden', // Kenarları yuvarlatmak için
  },
});
