import { useState } from 'react';
import { Button, TextInput, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import _tarefa from './types/_tarefa';
import Tarefa from './components/Tarefa';
import styles from './styles';

export default function App() {
  const [texto, setTexto] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa() {
    if (texto === '' || descricao === '') {
      alert("Preencha todos os campos!");
      return;
    }

    let tarefa: _tarefa = {
      id: Date.now(),
      texto,
      descricao
    };

    setTarefas([...tarefas, tarefa]);
    setTexto('');
    setDescricao('');
  }

  function excluir(id: number) {
    let f = tarefas.filter(t => t.id !== id);
    setTarefas(f);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Lista de Tarefas</Text>

      <TextInput 
        style={styles.input} 
        value={texto} 
        onChangeText={setTexto} 
        placeholder="Nome da tarefa"
      />
      <TextInput 
        style={styles.input} 
        value={descricao} 
        onChangeText={setDescricao} 
        placeholder="Descrição da tarefa"
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={adicionarTarefa}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>

      <ScrollView style={styles.lista}>
        {tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluir}/>)}
      </ScrollView>
    </View>
  );
}