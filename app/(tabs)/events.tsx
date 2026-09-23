import { SectionCard, ScreenShell } from '@/components/senior-center-ui';
import {
  recurringEvents,
} from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function EventsScreen() {
  return (
    <ScreenShell
      title="Events"
      subtitle="Weekly events at the center."
    >
      <SectionCard title="Weekly Events">
        {recurringEvents.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <ThemedText style={styles.title}>{event.title}</ThemedText>
            <ThemedText style={styles.detail}>{event.schedule}</ThemedText>
            <ThemedText>{event.details}</ThemedText>
          </View>
        ))}
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    gap: 8,
  },
  title: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '700',
  },
  detail: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
});
