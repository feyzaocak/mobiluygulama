import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* E-Lab Görseli */}
      <Image 
        source={require('../assets/E-Lab.png')} // Görselin yolunu doğru şekilde belirtin
        style={styles.logo} 
      />
      {/* Butonlar */}
      <View style={styles.buttonContainer}>
        <Button title="Doktor Girişi" onPress={() => router.push('/DoctorLoginScreen')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Hasta Girişi" onPress={() => router.push('/PatientLoginScreen')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Kayıt Ol" onPress={() => router.push('/RegisterScreen')} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB', // Arka plan mavi
    padding: 16,
  },
  logo: {
    width: 200, // Logonun genişliği
    height: 200, // Logonun yüksekliği
    marginBottom: 20, // Logonun altındaki boşluk
  },
  buttonContainer: {
    marginBottom: 15, // Butonlar arasındaki boşluk
    width: '80%', // Buton genişliği
  },
});
