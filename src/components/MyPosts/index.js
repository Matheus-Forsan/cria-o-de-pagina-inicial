import { MaterialCommunityIcons, MaterialIcons, } from '@expo/vector-icons';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function MyPosts(posti) {
    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity>
                    <MaterialIcons name="grid-on" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="movie-open-play-outline" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-outline" size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.postlist}>
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
                <Image source={posti} style={styles.posts} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginTop: 20, width: 400 },
    tabs: { flexDirection: 'row', justifyContent: 'space-around' },
    postlist: { flexDirection: "row", justifyContent: 'space-between' ,flexWrap:"wrap"},
    posts: { marginTop: 20, width: "33.3%", height: 150, backgroundColor: 'black', borderColor: "#ddd", borderWidth: 1 }
})