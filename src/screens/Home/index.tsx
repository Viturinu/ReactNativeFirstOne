import { Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./style"
import { Participant } from "../../components/Participant";
export function Home() {
    function handleParticipantAdd() {
        console.log("Você clicou no botão.");
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou no botão remover o usuário - ${name}`);
    }

    const participants = ["Victor Oliveira", "Thales Oliveira", "Farley Oliveira", "Glaucia Oliveira", "Daniel Oliveira", "Tarcisio Oliveira", "Paula Oliveira"];
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
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handleParticipantRemove(participant)} />
                    ))
                }
            </ScrollView>
        </View>
    )
}