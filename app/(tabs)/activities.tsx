import { StyleSheet, Text, View } from 'react-native';

export default function ActivitiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎨 Activities & Classes</Text>
      <Text>Yoga Classes</Text>
      <Text>Art Workshops</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 24, fontWeight: 'bold' },
});