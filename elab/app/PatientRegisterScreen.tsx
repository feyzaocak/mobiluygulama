import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function PatientRegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      // Hasta verilerini bir nesne olarak oluşturun
      const patientData = {
        name,
        email,
        password,
        birthDate,
      };

      // Veritabanına veri gönderme (API endpoint'ine)
      const response = await fetch('http://172.20.10.3:5000/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });

      const data = await response.json();

      if (response.ok) {
        // Kayıt başarılı
        console.log("Hasta Kayıt Edildi:", data);
        router.push('/PatientLoginScreen');
      } else {
        // Hata durumunda
        console.log("Hata:", data.message);
      }
    } catch (error) {
      console.log("API Hatası:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hasta Kayıt Ol</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        value={name}
        onChangeText={setName}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Doğum Tarihi (GG-AA-YYYY)"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#87CEEB',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
