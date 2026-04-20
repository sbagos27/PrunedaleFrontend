import { StyleSheet, Text, View } from 'react-native';

export default function MealsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Meal Schedule</Text>
      <Text>Monday: Chicken & Rice</Text>
      <Text>Tuesday: Pasta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  title: { fontSize: 24, fontWeight: 'bold' },
});