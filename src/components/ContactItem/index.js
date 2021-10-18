import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import style_json from "./style.js";

const styles = StyleSheet.create(style_json);


export default function ContactItem({
  item,
  onSelect,
}) {
  return (
    <Pressable onPress={() => onSelect(item)}  >
      <View style={styles.container} >
        <View style={styles.avatar_circle} />
        <View style={styles.name_container}>
          <Text>{item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}
