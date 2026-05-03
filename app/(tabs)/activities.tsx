import { SectionCard, ScreenShell, Tag } from '@/components/senior-center-ui';
import {
  activities,
  attendanceSteps,
  centerProfile,
} from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function ActivitiesScreen() {
  return (
    <ScreenShell
      title="Activities and Classes"
      subtitle="The activities area focuses on Tai Chi, art, social connection, and clear attendance guidance."
      badge="Large-print schedule"
    >
      <SectionCard
        title="Featured Programs"
        description="Each class card shows what the activity is, when to expect it, and how attendance will be tracked."
      >
        {activities.map((activity) => (
          <View key={activity.id} style={styles.activityCard}>
            <View style={styles.rowBetween}>
              <ThemedText style={styles.title}>{activity.title}</ThemedText>
              <Tag label={activity.schedule} />
            </View>
            <ThemedText>{activity.details}</ThemedText>
            <ThemedText style={styles.attendance}>{activity.attendance}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Attendance and Sign-In"
        description="The digital sign-in flow is framed as support for staff planning, not extra work for members."
      >
        {attendanceSteps.map((step, index) => (
          <View key={step} style={styles.stepRow}>
            <View style={styles.stepBadge}>
              <ThemedText lightColor="#FFFFFF" darkColor="#FFFFFF" style={styles.stepNumber}>
                {index + 1}
              </ThemedText>
            </View>
            <ThemedText style={styles.stepText}>{step}</ThemedText>
          </View>
        ))}
      </SectionCard>

      <SectionCard
        title="Why this matters"
        description="Attendance helps the center make practical decisions for classes, meals, and volunteer support."
      >
        <ThemedText>
          Staff can use attendance counts to prepare enough art supplies, reserve
          enough lunch portions, and follow up when a member asks for help.
        </ThemedText>
        <ThemedText>
          The current center schedule also supports drop-in community time during{' '}
          {centerProfile.hours[0].toLowerCase()} and {centerProfile.hours[1].toLowerCase()}.
        </ThemedText>
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  activityCard: {
    gap: 10,
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
  attendance: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  stepBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#245C52',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  stepNumber: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
  },
  stepText: {
    flex: 1,
  },
});
