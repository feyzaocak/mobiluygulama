import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 

export default function RegisterScreen() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput placeholder="Ad Soyad" style={styles.input} />
      <TextInput placeholder="E-posta" style={styles.input} />
      <TextInput placeholder="Şifre" secureTextEntry style={styles.input} />
      <Button title="Kayıt Ol" onPress={() => alert('Kayıt işlemi başarıyla tamamlandı!')} />
      {/* Geri dönüş butonunu buraya ekleyin */}
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