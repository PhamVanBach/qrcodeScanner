import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Info({ route, navigation }) {
  const barcode = route.params.barcode;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{"Barcode Format: "+barcode.barcodeFormat}</Text>
      <Text>{"Barcode Text: "+barcode.barcodeText}</Text>
      <TouchableOpacity style={{
        width: 80,
        height: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      }}
        onPress={() => {
          navigation.navigate('BarcodeScanner')
        }}
      >
        <Text style={{
          color: 'white'
        }}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});