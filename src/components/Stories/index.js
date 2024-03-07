import { StyleSheet, ScrollView } from "react-native";
import img1 from "../../assets/img.jpg";
import img2 from "../../assets/img2.png";
import Story from "../Story";


export default function Stories() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container} >
            <Story image={img1} />
            <Story image={img2} />
            <Story image={img1} />
            <Story image={img2} />
            <Story image={img1} />
            <Story image={img2} />
            <Story image={img1} />
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { gap: 8, height: 100 },

});