import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./style"
import { Participant } from "../../components/Participant";
import { useState } from "react";
export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participant, setParticipant] = useState("");


    function handleParticipantAdd() {
        if (participant === "") {
            return Alert.alert("Campo em branco", "Favor digitar um nome no campo.");
        }
        if (participants.includes(participant)) {
            return Alert.alert("Participante existe", `${participant} já existe em nossa aplicação`);
        }
        setParticipants(prevState => [...prevState, participant]);
        setParticipant("");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover ${name}?`, [
            {
                text: "Sim",
                onPress: () => {
                    setParticipants(prevState => prevState.filter(item => item !== name));
                }
            },
            {
                text: "Não",
                style: "cancel"
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de novembro de 2022
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    value={participant}
                    onChangeText={setParticipant}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />

                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptytText}>
                        Ninguém chegou no evento ainda. Adicione participantes à sua lista de presentes.
                    </Text>
                )}
            />
        </View>
    )
}