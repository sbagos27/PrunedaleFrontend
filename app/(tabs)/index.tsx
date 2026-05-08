import {
  ActionLink,
  SectionCard,
  ScreenShell,
  Tag,
} from '@/components/senior-center-ui';
import { ThemedText } from '@/components/themed-text';
import {
  announcements,
  centerProfile,
  quickContacts,
  quickLinks,
  todaysClasses,
} from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScreenShell
      title={centerProfile.name}
      subtitle={centerProfile.address}
    >
      <SectionCard title="Announcements">
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

      <SectionCard title="This Week">
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

      <SectionCard title="Contact">
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
        <View style={styles.linkGrid}>
          {quickLinks.map((link) => (
            <ActionLink key={link.id} label={link.label} href={link.href} />
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
  infoRow: {
    gap: 4,
  },
  linkGrid: {
    gap: 10,
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
