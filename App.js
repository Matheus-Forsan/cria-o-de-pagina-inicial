import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "./assets/instagram.png";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function App() {
  return (
    
    <View style={{ marginVertical: 32, marginHorizontal: 16, alignItems: "center", flex: 1 }}>
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

      <View >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:8, height:100}} style={{flexDirection:"row", gap:16}}>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1" }} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius:50 }}
          source={{ uri: "https://img.redbull.com/images/c_crop,x_423,y_0,h_832,w_665/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/12/16/dc6e772c-12ea-453a-be62-8d0daf7a7a90/cristianoronaldo" }} />
        </TouchableOpacity>
        
       </ScrollView>
    
    
      </View>

<TouchableOpacity>

</TouchableOpacity>
      



      <StatusBar style="auto" />
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
