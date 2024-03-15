import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Botão3() {
  return (
    <View>
      <TouchableOpacity
        style={styles.borboleta}
        onPress={() => console.log("press")}
      >
        <Image
          style source={require("../assets/src/borboletaroxa.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
