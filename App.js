import { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [ok, setOk] = useState(false)

  const showAlert = () => {
    Alert.alert(
      "Title",
      "test message",
      [
       {
          text: "OK",
          onPress: () => setOk(true)
       },
       {
        text: "Cancel",
        onPress: () => setOk(false)
       }
      ]
    )
  }
  return (
    <View style={styles.container}>
      <Button title={'Open dia'} onPress={showAlert}></Button>
      <Text>{ok===true ? 'ok' : 'cancel'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
