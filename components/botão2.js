import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Botão2() {
  return (
    <View>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => console.log("press")}
      >
        <Text>Coloque a sua senha</Text>
      </TouchableOpacity>
    </View>
  );
}