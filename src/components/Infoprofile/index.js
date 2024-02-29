import { View,Image,Text, StyleSheet } from "react-native";

export default function Infoprofile({image , publi, followers, following }) {
    return(
        <View style={styles.container}>
           <Image source={image} style={styles.profilepic} />
            <View style={styles.conttext}>
                <View style={styles.text1} >
                <Text style={styles.text2}>{publi}</Text>
                <Text>publicações</Text>
                </View>
                <View style={styles.text1}>
                <Text style={styles.text2}>{followers}</Text>
                <Text>seguidores</Text>
                </View>
                <View style={styles.text1}>
                <Text style={styles.text2}>{following}</Text>
                <Text>seguindo</Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    profilepic: { width: 100, height: 100, borderRadius: 50 },
    container: {flexDirection: "row", alignItems: "center",  marginTop: 20},
    conttext:{flexDirection:"row", justifyContent:"space-between"},
    text1:{marginLeft:20 },
    text2:{fontWeight:'bold',textAlign:'center',fontSize:22}
}
)