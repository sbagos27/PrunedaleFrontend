import type { ReactNode } from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type ScrollViewProps,
  type ViewStyle,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

type ScreenShellProps = ScrollViewProps & {
  title: string;
  subtitle: string;
  badge?: string;
  children: ReactNode;
};

type SectionCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  style?: ViewStyle;
};

type TagProps = {
  label: string;
};

type ActionLinkProps = {
  label: string;
  href: string;
};

export function ScreenShell({
  title,
  subtitle,
  badge,
  children,
  contentContainerStyle,
  style,
  ...rest
}: ScreenShellProps) {
  const backgroundColor = useThemeColor(
    { light: '#F6F2E8', dark: '#0F1F1B' },
    'background'
  );
  const heroColor = useThemeColor(
    { light: '#245C52', dark: '#18352E' },
    'background'
  );
  const heroTextColor = useThemeColor(
    { light: '#FFFFFF', dark: '#F4F8F6' },
    'text'
  );
  const heroBadgeColor = useThemeColor(
    { light: 'rgba(255,255,255,0.18)', dark: 'rgba(255,255,255,0.12)' },
    'background'
  );

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor }, style]}
      contentContainerStyle={[styles.content, contentContainerStyle]}
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      <View style={[styles.hero, { backgroundColor: heroColor }]}>
        {badge ? (
          <View style={[styles.heroBadge, { backgroundColor: heroBadgeColor }]}>
            <Text style={styles.heroBadgeText}>{badge}</Text>
          </View>
        ) : null}
        <Text style={[styles.heroTitle, { color: heroTextColor }]}>{title}</Text>
        <Text style={[styles.heroSubtitle, { color: heroTextColor }]}>
          {subtitle}
        </Text>
      </View>
      {children}
    </ScrollView>
  );
}

export function SectionCard({
  title,
  description,
  children,
  style,
}: SectionCardProps) {
  const cardBackground = useThemeColor(
    { light: '#FFFFFF', dark: '#183029' },
    'background'
  );
  const borderColor = useThemeColor(
    { light: '#D9D0C2', dark: '#28463E' },
    'icon'
  );

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: cardBackground, borderColor },
        style,
      ]}
    >
      <View style={styles.cardHeader}>
        <ThemedText style={styles.cardTitle}>{title}</ThemedText>
        {description ? (
          <ThemedText style={styles.cardDescription}>{description}</ThemedText>
        ) : null}
      </View>
      {children}
    </View>
  );
}

export function Tag({ label }: TagProps) {
  const tagBackground = useThemeColor(
    { light: '#E0EEE9', dark: '#24443C' },
    'background'
  );
  const tagTextColor = useThemeColor(
    { light: '#245C52', dark: '#D9EAE3' },
    'text'
  );

  return (
    <View style={[styles.tag, { backgroundColor: tagBackground }]}>
      <Text style={[styles.tagText, { color: tagTextColor }]}>{label}</Text>
    </View>
  );
}

export function ActionLink({ label, href }: ActionLinkProps) {
  const backgroundColor = useThemeColor(
    { light: '#E8F1EE', dark: '#224139' },
    'background'
  );
  const textColor = useThemeColor(
    { light: '#245C52', dark: '#E8F1EE' },
    'text'
  );

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => {
        void Linking.openURL(href);
      }}
      style={[styles.actionLink, { backgroundColor }]}
    >
      <Text style={[styles.actionLinkText, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 32,
    gap: 16,
  },
  hero: {
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 26,
    gap: 12,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  heroBadgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38,
  },
  heroSubtitle: {
    fontSize: 18,
    lineHeight: 28,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    gap: 16,
  },
  cardHeader: {
    gap: 6,
  },
  cardTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  tag: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '700',
  },
  actionLink: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  actionLinkText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  },
});
