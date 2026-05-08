import { SectionCard, ScreenShell } from '@/components/senior-center-ui';
import {
  foodPrograms,
  supportResources,
} from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function ResourcesScreen() {
  return (
    <ScreenShell
      title="Resources"
      subtitle="Food and support information."
    >
      <SectionCard title="Support Services">
        {supportResources.map((resource) => (
          <View key={resource.id} style={styles.resourceCard}>
            <ThemedText style={styles.title}>{resource.title}</ThemedText>
            <ThemedText>{resource.description}</ThemedText>
            <ThemedText style={styles.contactDetail}>{resource.contact}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard title="Food Programs">
        {foodPrograms.map((program) => (
          <View key={program.id} style={styles.resourceCard}>
            <ThemedText style={styles.title}>{program.title}</ThemedText>
            <ThemedText>{program.details}</ThemedText>
          </View>
        ))}
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
  contactDetail: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
});
