import { View } from 'react-native';
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import neyma from "../assets/img.jpg";
import img2 from "../assets/img2.png";
import Instagram from "../assets/instagram.png";


export default function Home() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 8 }}>
      <Header />
      <Stories />
      <Post
        profileImage={neyma}
        postImage={Instagram}
        profileName="diego costa"
        description="descrição"
      />
    </View>
  )
}
