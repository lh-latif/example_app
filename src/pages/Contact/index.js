import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import style_data from './style.js';

const styles = StyleSheet.create(style_data);

export default function Contact({navigation, route}) {
  // console.log(route.params.item);
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.content_container}>
        <ItemData label="Whatsapp" value={item.phones[0]} />
        <ItemData label="Email" value={item.emails[0]} />
      </View>
    </View>
  );
}

function ItemData({label, value}) {
  return (
    <View>
      <View />
      <View>
        <Text>{label}</Text>
        <Text>{value == null || value === '' ? '-' : value}</Text>
      </View>
    </View>
  );
}
