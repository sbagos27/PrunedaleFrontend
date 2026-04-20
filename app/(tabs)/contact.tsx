import { StyleSheet, Text, View } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contact Us</Text>
      <Text>Phone: (831) 000-0000</Text>
      <Text>Email: info@prunedaleseniorcenter.org</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 24, fontWeight: 'bold' },
});