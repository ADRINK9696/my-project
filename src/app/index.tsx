   import { View, Text, StyleSheet } from "react-native";

   export default function Index() {
     return (
       <View style={styles.container}>
         <Text style={styles.text}>
           Hi, my name is Aubrie Drinkwalter, and I am a mobile developer.
         </Text>
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
     text: { fontSize: 20, textAlign: "center" },
   });