import React, { useState } from 'react';

import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity
} from 'react-native';

export function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill])
  }

  return(
    <View style={styles.container}>
      <Text  style={styles.title}>Welcome, Fabiano Ramos</Text>
      <TextInput 
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 25 }]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{skill}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15: 12,
    marginTop: 30,
    borderRadius: 7
  }, 
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
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5
  },
  textSkill: {
    color: '#FFF',
    backgroundColor: '#1f1e25',
    fontSize: 22,
    fontWeight: 'bold',
  }
})