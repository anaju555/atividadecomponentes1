import { View } from "react-native";
import { styles } from "./styles/StyleSheet";
import Home from "./pages/Home";
import Botão1 from "./components/botão1";
import Botão2 from "./components/botão2";
import Botão3 from "./components/botão3";


export default function App() {
  return (
    <View style={styles.container}>
      <Home>
       <Botão1></Botão1>
       <Botão2></Botão2>
       <Botão3></Botão3>
      </Home>
    </View>
  );
}
