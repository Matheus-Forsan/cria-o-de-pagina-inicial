import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Logo from "../..//assets/instagram.png";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Header () {
    return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
        <Image style={{ width: 150, height: 50 }} source={Logo} />
        <View style={{ flexDirection: "row" }}>
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

