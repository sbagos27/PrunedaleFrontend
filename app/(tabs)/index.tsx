import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCEFEF', dark: '#1D3D47' }}
    >
      <ThemedView style={styles.section}>
        <ThemedText type="title">
          Welcome to the Prunedale Senior Center App!
        </ThemedText>
        <ThemedText>
          A place to connect, stay active, and enjoy your community.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Announcements</ThemedText>
        <ThemedText>• Bingo Night this Friday at 6 PM!</ThemedText>
        <ThemedText>• Free health check-up on April 25.</ThemedText>
        <ThemedText>• New yoga classes starting next week.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">About Us</ThemedText>
        <ThemedText>
          We offer social activities, wellness programs, and community support
          for seniors in a welcoming environment.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 10,
    alignItems: 'center',
  },
});