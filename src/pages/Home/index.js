import React from 'react'
import {
  Button,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import stylesheet from "./style";

const styles = StyleSheet.create(stylesheet)

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Integration</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.textButton}>Connect to Zahir</Text>
      </TouchableOpacity>
    </View>
  )
}
