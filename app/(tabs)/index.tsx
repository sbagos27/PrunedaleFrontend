import { SectionCard, ScreenShell, Tag } from '@/components/senior-center-ui';
import { ThemedText } from '@/components/themed-text';
import {
  announcements,
  centerProfile,
  quickContacts,
  todaysClasses,
  upcomingEvents,
} from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScreenShell
      title={centerProfile.name}
      subtitle={`${centerProfile.tagline} This home screen highlights announcements, today's classes, upcoming events, and quick ways to reach the center.`}
      badge="Mock preview"
    >
      <SectionCard
        title="Announcements"
        description="A quick snapshot of important updates members may want to see first."
      >
        {announcements.map((announcement) => (
          <View key={announcement.id} style={styles.stack}>
            <View style={styles.rowBetween}>
              <ThemedText style={styles.itemTitle}>{announcement.title}</ThemedText>
              <Tag label={announcement.category} />
            </View>
            <ThemedText>{announcement.body}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Today's Classes"
        description="Large-print cards make it easier to see where to go and when to sign in."
      >
        {todaysClasses.map((session) => (
          <View key={session.id} style={styles.stack}>
            <ThemedText style={styles.itemTitle}>{session.title}</ThemedText>
            <View style={styles.tagRow}>
              <Tag label={session.time} />
              <Tag label={session.location} />
            </View>
            <ThemedText>{session.note}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Upcoming Events"
        description="Recurring community events are visible here so members can plan ahead."
      >
        {upcomingEvents.map((event) => (
          <View key={event.id} style={styles.stack}>
            <View style={styles.rowBetween}>
              <ThemedText style={styles.itemTitle}>{event.title}</ThemedText>
              <Tag label={event.tag} />
            </View>
            <ThemedText style={styles.detail}>{event.schedule}</ThemedText>
            <ThemedText>{event.description}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Quick Contact Info"
        description="Easy access to the center's phone number, email, address, and hours."
      >
        {quickContacts.map((contact) => (
          <View key={contact.id} style={styles.infoRow}>
            <ThemedText style={styles.infoLabel}>{contact.label}</ThemedText>
            <ThemedText style={styles.infoValue}>{contact.value}</ThemedText>
          </View>
        ))}
        <View style={styles.stack}>
          <ThemedText style={styles.itemTitle}>Hours</ThemedText>
          {centerProfile.hours.map((hours) => (
            <ThemedText key={hours}>{hours}</ThemedText>
          ))}
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  detail: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  infoRow: {
    gap: 4,
  },
  infoLabel: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 18,
    lineHeight: 26,
  },
});
