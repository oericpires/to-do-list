import { useEffect, useRef } from "react";
import { Button, Text, View, StyleSheet, Animated } from "react-native";
import _tarefa from "../types/_tarefa";

type TarefaProp = {
    dados: _tarefa,
    handleDeletePress: (id: number) => void;
};

export default function Tarefa(props: TarefaProp) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ scale: fadeAnim }] }]}>
            <Text style={styles.titulo}>{props.dados.texto}</Text>
            <Text style={styles.descricao}>{props.dados.descricao}</Text>
            <View style={styles.button}>
                <Button
                    title="Excluir"
                    color={'red'}
                    onPress={() => props.handleDeletePress(props.dados.id)}
                />
            </View>

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        width: '90%',
        alignSelf: 'center'
    },
    button: {
        padding: 0,
        borderRadius: 5,
        width: '20%',
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    }
});