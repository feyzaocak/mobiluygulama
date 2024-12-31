import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function DoctorRegisterScreen() {
  const [name, setName] = useState<string>(''); 
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 
  const [specialization, setSpecialization] = useState<string>(''); 
  const router = useRouter();

  // E-posta doğrulama fonksiyonu
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@hospital\.com$/;
    return emailRegex.test(email);
  };

  // Şifre doğrulama fonksiyonu
  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleRegister = async () => {
    if (!validatePassword(password)) {
      Alert.alert('Hata', 'Şifre en az 6 karakter olmalıdır.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Hata', 'E-posta adresiniz @hospital.com domainine sahip olmalıdır.');
      return;
    }

    const doctorData = {
      name,
      email,
      password,
      specialization,
    };

    try {
      const response = await fetch('http://172.20.10.3:5000/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Doktor Kayıt Edildi:", data);
        router.push('/DoctorLoginScreen');
      } else {
        console.log("Hata:", data.message || 'Bir hata oluştu');
        Alert.alert('Kayıt Hatası', data.message || 'Bir hata oluştu');
      }
    } catch (error) {
      console.log("API Hatası:", error);
      Alert.alert('Hata', 'Sunucuya bağlanırken bir hata oluştu!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Doktor Kayıt Ol</Text>
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
        placeholder="Uzmanlık Alanı"
        value={specialization}
        onChangeText={setSpecialization}
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
