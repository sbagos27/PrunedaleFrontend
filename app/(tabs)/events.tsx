import { StyleSheet, Text, View } from 'react-native';

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Events</Text>
      <Text>Bingo Night - Friday 6PM</Text>
      <Text>Health Check-up - April 25</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 24, fontWeight: 'bold' },
});