import {View} from 'react-native';
import Header from "../components/Header";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, alignItems: "center", flex: 1 }}>
      <Header />
      <Stories  />
    </View>

  )
}
