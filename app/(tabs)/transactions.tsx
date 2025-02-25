import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'

const Transactions = () => {
  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View style={styles.container}>
        <Text style={styles.text}>Transactions</Text>
    </View>
    </>
  )
}

export default Transactions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.white,
    fontSize: 20,
  }
})
