import {View} from 'react-native';
import Infoprofile from './src/components/Infoprofile';
import img2 from "./src/assets/img.jpg";
import  img1 from "./src/assets/img1.png";
import MyPosts from './src/components/MyPosts';


export default function App() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, alignItems: "center", flex: 1 }}>
      <Infoprofile 
      image={img2}
      publi={2}
      followers={3}
      following={2}
      />

      <MyPosts postimage={img2} />
    </View>

  )
}







