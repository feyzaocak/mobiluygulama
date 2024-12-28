import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router'; // Expo Router kullanıyorsanız

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>eLab Uygulamasına Hoş Geldiniz</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Doktor Girişi"
          onPress={() => router.push('/DoktorInputScreen')} // Doktor giriş ekranına yönlendirir
        />
        <Button
          title="Kullanıcı Girişi"
          onPress={() => router.push('/UserLoginScreen')} // Kullanıcı giriş ekranına yönlendirir
        />
        <Button
          title="Kayıt Ol"
          onPress={() => router.push('/RegisterScreen')} // Kayıt ol ekranına yönlendirir
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
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 150,
  },
});
