import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Button({ onPress }: any) {
    return(
        <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      marginTop: 20,
      borderRadius: 7,
      alignItems: 'center'
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold'
    }
  })