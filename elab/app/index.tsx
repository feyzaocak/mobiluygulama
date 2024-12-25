import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); // Router'ı kullanarak farklı sayfalara geçiş yapabilirsiniz.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>eLab Uygulamasına Hoş Geldiniz</Text>
      <Button
        title="Doktor Girişi"
        onPress={() => router.push('/DoktorInputScreen')} // Yeni sayfaya yönlendirir.
      />
      <Button
        title="Kullanıcı Geçmişi"
        onPress={() => router.push('/UserHistoryScreen')} // Yeni sayfaya yönlendirir.
        color="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
