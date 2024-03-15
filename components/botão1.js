import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Botão1() {
  return (
    <View>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => console.log("press")}
      >
        <Text>Coloque o seu email</Text>
      </TouchableOpacity>
    </View>
  );
}
