import { SectionCard, ScreenShell } from '@/components/senior-center-ui';
import { weeklySchedule } from '@/data/senior-center-content';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function ActivitiesScreen() {
  return (
    <ScreenShell
      title="Activities"
      subtitle="Monday through Friday schedule."
    >
      <SectionCard title="Schedule">
        {weeklySchedule.map((day) => (
          <View key={day.id} style={styles.dayCard}>
            <View style={styles.dayHeader}>
              <ThemedText style={styles.dayTitle}>{day.day}</ThemedText>
              <ThemedText style={styles.dayHours}>{day.hours}</ThemedText>
            </View>
            {day.items.map((item) => (
              <View key={item.id} style={styles.scheduleRow}>
                <ThemedText style={styles.timeText}>{item.time}</ThemedText>
                <View style={styles.scheduleTextGroup}>
                  <ThemedText style={styles.scheduleTitle}>{item.title}</ThemedText>
                  {item.note ? <ThemedText>{item.note}</ThemedText> : null}
                </View>
              </View>
            ))}
          </View>
        ))}
      </SectionCard>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  dayCard: {
    gap: 12,
  },
  dayHeader: {
    gap: 4,
  },
  dayTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
  },
  dayHours: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  timeText: {
    width: 110,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
  scheduleTextGroup: {
    flex: 1,
    gap: 2,
  },
  scheduleTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
});
