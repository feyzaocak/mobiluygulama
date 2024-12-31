import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* E-Lab Görseli */}
      <Image 
        source={require('../assets/E-Lab.png')} 
        style={styles.logo} 
      />
      
      <View style={styles.contentContainer}>
        {/* Sol Taraf: Doktor Bölümü */}
        <View style={styles.leftContainer}>
          <Button title="Doktor Girişi" onPress={() => router.push('/DoctorLoginScreen')} />
          <Button title="Doktor Kayıt Ol" onPress={() => router.push('/DoctorRegisterScreen')} color="gray" />
        </View>

        {/* Sağ Taraf: Hasta Bölümü */}
        <View style={styles.rightContainer}>
          <Button title="Hasta Girişi" onPress={() => router.push('/PatientLoginScreen')} />
          <Button title="Hasta Kayıt Ol" onPress={() => router.push('/PatientRegisterScreen')} color="gray" />
        </View>
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
  contentContainer: {
    flexDirection: 'row', // Doktor ve hasta bölümlerini yan yana koymak için
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20, // Ekran kenar boşluğu
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly', // Butonlar arasındaki boşluğu eşit yapar
    marginRight: 10, // Sağdaki bölümle aradaki boşluk
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly', // Butonlar arasındaki boşluğu eşit yapar
    marginLeft: 10, // Soldaki bölümle aradaki boşluk
  },
});
