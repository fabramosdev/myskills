import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  Alert,
  FlatList,
} from 'react-native';
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<ISkillData[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    if(newSkill === '') {
      Alert.alert('Ops', 'Você esqueceu de escrever sua skill! :(')
      return
    }

    setMySkills([...mySkills, data]) 
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id))
  }

  // useEffect(função arrow-> () => {}, dependencias-> [])
  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGreeting('Bom dia')
    } else if(currentHour >= 12 && currentHour < 18) {
      setGreeting('Bom tarde')
    } else {
      setGreeting('Boa noite')
    }
  }, [])

  return(
    <View style={styles.container}>
      <Text style={[styles.title, { marginVertical: 25 }]}>
        My Skills
      </Text>

      <Text  style={styles.title}>{`${greeting}, Fabiano Ramos`}</Text>
      <TextInput 
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      
      <Button onPress={handleAddNewSkill} title='Adicionar Skill' />

      <Text style={[styles.title, { marginVertical: 25 }]}>
        Skill Counter: {`${mySkills.length}`}
      </Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => Alert.alert('Confirmação', `Deseja excluir ${item.name} de suas skills?`, [
              {
                text: 'Cancelar',
                onPress: () => {},
                style: 'cancel' 
              },
              {
                text: 'Excluir',
                onPress: () => handleRemoveSkill(item.id)
              }
            ])}
          />
        )}
      />
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
  }
})