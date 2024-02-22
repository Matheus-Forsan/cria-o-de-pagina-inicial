import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Logo from "./src/assets/instagram.png";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from "./src/components/Header";


export default function App() {
  return (

    <View style={{ marginVertical: 32, marginHorizontal: 16, alignItems: "center", flex: 1 }}>
    <Header />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, height: 100 }} style={{ flexDirection: "row", gap: 16 }}>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri:"https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>

      </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
