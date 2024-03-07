import {View} from 'react-native';
import Infoprofile from '../components/Infoprofile';
import img2 from "../assets/img.jpg";
import  img1 from "../assets/img1.png";
import MyPosts from '../components/MyPosts';


export default function Profile() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, alignItems: "center", flex: 1 }}>
      <Infoprofile 
      image={img2}
      publi={2}
      followers={6}
      following={2}
      />

      <MyPosts posti={img1} />
    </View>

  )
}







