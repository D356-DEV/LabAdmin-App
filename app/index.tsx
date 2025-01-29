import { StyleSheet, Text, View, Image, TextInput, Button} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
          <Text style={styles.title}>LabAdmin</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput style={styles.inputForm} placeholder="Identifier" placeholderTextColor="#fff"/>
          <TextInput style={styles.inputForm} placeholder="Password" placeholderTextColor="#fff" secureTextEntry />
          <Button
            title="Log In"
            color="orange"
          />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
    justifyContent: 'center'
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  inputForm: {
    backgroundColor: "orange",
    width: "90%",
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
  },
});
