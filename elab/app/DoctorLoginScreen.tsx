import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function DoctorLoginScreen() {
  const [email, setEmail] = useState<string>(''); // E-posta adresi
  const [password, setPassword] = useState<string>(''); // Şifre
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://172.20.10.3:5000/doctors'); // Doctors endpointini kontrol edin

      if (!response.ok) {
        throw new Error('Sunucudan geçersiz bir yanıt alındı!');
      }

      // Yanıtı JSON olarak çözümle
      let doctors = [];
      try {
        doctors = await response.json();
      } catch (parseError) {
        throw new Error('API yanıtı geçerli bir JSON değil!');
      }

      // Giriş bilgilerini kontrol et
      const doctor = doctors.find(
        (doc: any) => doc.email === email.trim() && doc.password === password.trim()
      );

      if (doctor) {
        // Giriş başarılı
        router.push('/DoctorDashboardScreen');
      } else {
        // Giriş başarısız
        Alert.alert('Hata', 'E-posta adresi veya şifre yanlış!');
      }
    } catch (error: any) {
      console.error('Giriş Hatası:', error.message);
      Alert.alert('Hata', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doktor Girişi</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
