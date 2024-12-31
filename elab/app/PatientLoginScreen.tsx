import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function PatientLoginScreen() {
  const [email, setEmail] = useState<string>(''); // 'username' yerine 'email'
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://172.20.10.3:5000/patients'); // API çağrısı
      const patients = await response.json();
  
      // Kullanıcı bilgilerini kontrol et
      const patient = patients.find(
        (pat: any) => pat.email === email.trim() && pat.password === password.trim()
      );
  
      if (patient && patient.id) {
        // Giriş başarılıysa
        router.push('/PatientDashboardScreen');
      } else {
        // Kullanıcı bulunamadıysa
        Alert.alert('Hata', 'Kullanıcı adı (e-posta) veya şifre yanlış!');
      }
    } catch (error) {
      console.error('Veritabanı Hatası:', error);
      Alert.alert('Hata', 'Veritabanına bağlanırken bir hata oluştu!');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasta Girişi</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı (E-posta)"
        value={email} // 'username' yerine 'email'
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
