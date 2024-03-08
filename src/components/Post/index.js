import { View, StyleSheet, Image, Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';



export default function Post({postImage, profileImage, profileName, description}) {
    return (
        <View style={{ marginTop:20 }} >
            <View
                style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Image source={profileImage} style={{ width: 80, height: 80, borderRadius: 50, backgroundColor: 'black' }} />
                <Text style={{ flex: 1, marginLeft: 14 }}>{profileName}</Text>
                <Feather name="more-vertical" size={24} color="black" />
            </View>
            <Image source={postImage} style={{ width: "100%", height: 300 }} />
            <View style={{ flexDirection:"row", Gap: 16, justifyContent:'space-between' }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
                    <MaterialCommunityIcons name="cards-heart-outline" size={24} color="black" />
                    <Feather name="message-circle" size={24} color="black" />
                    <Feather name="send" size={24} color="black" />
                </View>
                <View><MaterialCommunityIcons name="bookmark-outline" size={24} color="black" /></View>
            </View>
            <Text>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

}
);