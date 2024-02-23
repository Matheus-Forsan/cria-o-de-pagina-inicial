import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Logo from "../..//assets/instagram.png";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.imgs} source={Logo} />
      <View style={styles.icons}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={36} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="black-mesa" size={36} color="black" />
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center"
  },
  imgs: { width: 150, height: 50 },
  icons: { flexDirection: "row" },
});