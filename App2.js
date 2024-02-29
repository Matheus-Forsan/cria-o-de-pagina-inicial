import {View} from 'react-native';

import Header from "./src/components/Header";
import Stories from "./src/components/Stories";

export default function App() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, alignItems: "center", flex: 1 }}>
      <Header />
      <Stories />
    </View>

  )
}
