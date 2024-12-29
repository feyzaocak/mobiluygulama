import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // useRouter'ı import edin

export default function DoctorLoginScreen() {
  const router = useRouter(); // router değişkenini tanımlayın

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doktor Girişi</Text>
      <TextInput placeholder="Kullanıcı Adı" style={styles.input} />
      <TextInput placeholder="Şifre" secureTextEntry style={styles.input} />
      <Button title="Giriş Yap" onPress={() => alert('Giriş işlemi başarılı!')} />
      {/* Geri dönüş butonunu ekleyin */}
      <Button title="Ana Sayfaya Dön" onPress={() => router.push('/')} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
