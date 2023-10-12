import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailBook() {
  return (
    <View style={styles.container}>
      <Text>Tela de detalhe de livros </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '# 5f985e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
