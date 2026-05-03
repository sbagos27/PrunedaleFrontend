import { SectionCard, ScreenShell } from '@/components/senior-center-ui';
import {
  centerProfile,
  foodPrograms,
  quickContacts,
  supportResources,
} from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function ResourcesScreen() {
  return (
    <ScreenShell
      title="Resources and Support"
      subtitle="Members can quickly find support services, food programs, contact numbers, and center information."
      badge="Support directory"
    >
      <SectionCard
        title="Support Services"
        description="These cards organize common referrals so staff and members can find help faster."
      >
        {supportResources.map((resource) => (
          <View key={resource.id} style={styles.resourceCard}>
            <ThemedText style={styles.title}>{resource.title}</ThemedText>
            <ThemedText>{resource.description}</ThemedText>
            <ThemedText style={styles.contactDetail}>{resource.contact}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Food and Nutrition"
        description="Meals, deliveries, and weekly food support can all live in one easy-to-scan section."
      >
        {foodPrograms.map((program) => (
          <View key={program.id} style={styles.resourceCard}>
            <ThemedText style={styles.title}>{program.title}</ThemedText>
            <ThemedText>{program.details}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Quick Contacts"
        description="The same information appears here and on the home screen so it never feels hard to reach the center."
      >
        {quickContacts.map((contact) => (
          <View key={contact.id} style={styles.contactRow}>
            <ThemedText style={styles.contactLabel}>{contact.label}</ThemedText>
            <ThemedText style={styles.contactValue}>{contact.value}</ThemedText>
          </View>
        ))}
        <View style={styles.resourceCard}>
          <ThemedText style={styles.title}>Center hours</ThemedText>
          {centerProfile.hours.map((hours) => (
            <ThemedText key={hours}>{hours}</ThemedText>
          ))}
        </View>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  resourceCard: {
    gap: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  contactRow: {
    gap: 4,
  },
  contactLabel: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  contactDetail: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  contactValue: {
    fontSize: 18,
    lineHeight: 26,
  },
});
