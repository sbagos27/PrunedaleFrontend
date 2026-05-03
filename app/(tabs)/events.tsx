import { SectionCard, ScreenShell, Tag } from '@/components/senior-center-ui';
import {
  notificationPreview,
  recurringEvents,
  specialEvents,
} from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function EventsScreen() {
  return (
    <ScreenShell
      title="Events and Gatherings"
      subtitle="Members can browse weekly favorites, special events, and future notification options in one place."
      badge="Community calendar"
    >
      <SectionCard
        title="Recurring Favorites"
        description="These events help members settle into a familiar weekly routine."
      >
        {recurringEvents.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <View style={styles.rowBetween}>
              <ThemedText style={styles.title}>{event.title}</ThemedText>
              <Tag label={event.tag} />
            </View>
            <ThemedText style={styles.detail}>{event.schedule}</ThemedText>
            <ThemedText style={styles.detail}>{event.location}</ThemedText>
            <ThemedText>{event.description}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Special Events"
        description="A place to highlight one-time workshops, welcome lunches, or seasonal programs."
      >
        {specialEvents.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <View style={styles.rowBetween}>
              <ThemedText style={styles.title}>{event.title}</ThemedText>
              <Tag label={event.tag} />
            </View>
            <ThemedText style={styles.detail}>{event.schedule}</ThemedText>
            <ThemedText style={styles.detail}>{event.location}</ThemedText>
            <ThemedText>{event.description}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Notification Preview"
        description="This section explains how event reminders can work once notifications are connected to a backend."
      >
        {notificationPreview.map((item) => (
          <View key={item} style={styles.bulletRow}>
            <View style={styles.bullet} />
            <ThemedText style={styles.bulletText}>{item}</ThemedText>
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '700',
  },
  detail: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: '#245C52',
    marginTop: 8,
  },
  bulletText: {
    flex: 1,
  },
});
