import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import img1 from "../../assets/img.jpg";
import img2 from "../../assets/img1.png";

export default function Stories() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container} >
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img1} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img2} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img1} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img2} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img1} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img2} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img1} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.story}
                    source={img2} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { gap: 8, height: 100 },
    story: { width: 100, height: 100, borderRadius: 50 },
});