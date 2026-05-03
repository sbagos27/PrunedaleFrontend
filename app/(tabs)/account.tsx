import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { SectionCard, ScreenShell, Tag } from '@/components/senior-center-ui';
import { ThemedText } from '@/components/themed-text';

type FormState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  wantsTextUpdates: boolean;
  supportConsent: boolean;
};

type FieldName = keyof FormState;
type ErrorState = Partial<Record<FieldName, string>>;

const initialForm: FormState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  wantsTextUpdates: false,
  supportConsent: false,
};

export default function AccountScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [statusMessage, setStatusMessage] = useState('');
  const [memberName, setMemberName] = useState('');

  const updateField = <Key extends FieldName>(field: Key, value: FormState[Key]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: ErrorState = {};
    const email = form.email.trim();
    const password = form.password.trim();
    const phone = form.phone.trim();

    if (isSignUp && !form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!email) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      nextErrors.password = 'Please enter your password.';
    } else if (password.length < 8) {
      nextErrors.password = 'Use at least 8 characters for your password.';
    }

    if (isSignUp && password !== form.confirmPassword.trim()) {
      nextErrors.confirmPassword = 'Your passwords do not match.';
    }

    if (isSignUp && form.wantsTextUpdates && !phone) {
      nextErrors.phone = 'Add a phone number to receive text updates.';
    }

    return nextErrors;
  };

  const resetForMode = (nextIsSignUp: boolean) => {
    setIsSignUp(nextIsSignUp);
    setErrors({});
    setStatusMessage('');
  };

  const handleSubmit = () => {
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatusMessage('Please correct the highlighted fields and try again.');
      return;
    }

    const fallbackName = form.email.split('@')[0] || 'Member';
    setMemberName(isSignUp ? form.fullName.trim() : fallbackName);
    setStatusMessage(
      isSignUp
        ? 'Account preview created. This is ready to connect to real auth later.'
        : 'Sign-in preview successful. Backend authentication can be wired in next.'
    );
    setErrors({});
  };

  const handleSignOut = () => {
    setForm(initialForm);
    setErrors({});
    setStatusMessage('');
    setMemberName('');
  };

  const isSignedIn = memberName.length > 0;

  return (
    <ScreenShell
      title="Member Account"
      subtitle="Members can sign in, create an account, and choose whether to receive event reminders or support follow-up."
      badge="Auth-ready UI"
      keyboardShouldPersistTaps="handled"
    >
      {isSignedIn ? (
        <SectionCard
          title={`Welcome, ${memberName}`}
          description="This is a frontend-only preview of the member portal state after a successful sign-in."
        >
          <View style={styles.summaryRow}>
            <Tag label={form.wantsTextUpdates ? 'Text updates on' : 'Text updates off'} />
            <Tag label={form.supportConsent ? 'Support consent on' : 'Support consent off'} />
          </View>
          <ThemedText>
            From here, members could manage event registrations, view sign-in
            history, and update their contact preferences once the backend is
            connected.
          </ThemedText>
          <Pressable style={styles.primaryButton} onPress={handleSignOut}>
            <ThemedText lightColor="#FFFFFF" darkColor="#FFFFFF" style={styles.buttonText}>
              Sign Out
            </ThemedText>
          </Pressable>
        </SectionCard>
      ) : (
        <>
          <SectionCard
            title={isSignUp ? 'Create your account' : 'Sign in'}
            description="Validation is already in place so this screen can be connected to Supabase or another auth backend later."
          >
            <View style={styles.modeRow}>
              <Pressable
                style={[styles.modeButton, !isSignUp && styles.modeButtonActive]}
                onPress={() => resetForMode(false)}
              >
                <ThemedText
                  lightColor={!isSignUp ? '#FFFFFF' : undefined}
                  darkColor={!isSignUp ? '#FFFFFF' : undefined}
                  style={styles.modeButtonText}
                >
                  Sign In
                </ThemedText>
              </Pressable>
              <Pressable
                style={[styles.modeButton, isSignUp && styles.modeButtonActive]}
                onPress={() => resetForMode(true)}
              >
                <ThemedText
                  lightColor={isSignUp ? '#FFFFFF' : undefined}
                  darkColor={isSignUp ? '#FFFFFF' : undefined}
                  style={styles.modeButtonText}
                >
                  Sign Up
                </ThemedText>
              </Pressable>
            </View>

            {isSignUp ? (
              <FormField
                label="Full Name"
                value={form.fullName}
                onChangeText={(value) => updateField('fullName', value)}
                error={errors.fullName}
                placeholder="Enter your full name"
              />
            ) : null}

            <FormField
              label="Email"
              value={form.email}
              onChangeText={(value) => updateField('email', value)}
              error={errors.email}
              placeholder="name@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <FormField
              label="Password"
              value={form.password}
              onChangeText={(value) => updateField('password', value)}
              error={errors.password}
              placeholder="At least 8 characters"
              secureTextEntry
            />

            {isSignUp ? (
              <>
                <FormField
                  label="Confirm Password"
                  value={form.confirmPassword}
                  onChangeText={(value) => updateField('confirmPassword', value)}
                  error={errors.confirmPassword}
                  placeholder="Re-enter your password"
                  secureTextEntry
                />

                <FormField
                  label="Phone Number"
                  value={form.phone}
                  onChangeText={(value) => updateField('phone', value)}
                  error={errors.phone}
                  placeholder="Optional unless you want text updates"
                  keyboardType="phone-pad"
                />
              </>
            ) : null}

            {isSignUp ? (
              <View style={styles.preferenceGroup}>
                <PreferenceToggle
                  label="Receive event and lunch text updates"
                  value={form.wantsTextUpdates}
                  onPress={() =>
                    updateField('wantsTextUpdates', !form.wantsTextUpdates)
                  }
                />
                <PreferenceToggle
                  label="Allow staff follow-up if I request support"
                  value={form.supportConsent}
                  onPress={() =>
                    updateField('supportConsent', !form.supportConsent)
                  }
                />
              </View>
            ) : null}

            {statusMessage ? (
              <View style={styles.statusBox}>
                <ThemedText>{statusMessage}</ThemedText>
              </View>
            ) : null}

            <Pressable style={styles.primaryButton} onPress={handleSubmit}>
              <ThemedText lightColor="#FFFFFF" darkColor="#FFFFFF" style={styles.buttonText}>
                {isSignUp ? 'Create Account' : 'Sign In'}
              </ThemedText>
            </Pressable>
          </SectionCard>

          <SectionCard
            title="Why this screen matters"
            description="This keeps the senior center signup flow simple while still preparing for real backend work."
          >
            <ThemedText>
              Members can opt into text reminders, staff can honor support
              consent, and the interface stays large, clear, and easy to scan.
            </ThemedText>
          </SectionCard>
        </>
      )}
    </ScreenShell>
  );
}

type FormFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  error?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};

function FormField({
  label,
  value,
  onChangeText,
  error,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize = 'sentences',
}: FormFieldProps) {
  return (
    <View style={styles.fieldGroup}>
      <ThemedText style={styles.fieldLabel}>{label}</ThemedText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#6E7B76"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={[styles.input, error ? styles.inputError : null]}
      />
      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
    </View>
  );
}

type PreferenceToggleProps = {
  label: string;
  value: boolean;
  onPress: () => void;
};

function PreferenceToggle({ label, value, onPress }: PreferenceToggleProps) {
  return (
    <Pressable style={styles.preferenceRow} onPress={onPress}>
      <View style={[styles.checkbox, value && styles.checkboxChecked]} />
      <ThemedText style={styles.preferenceText}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  modeRow: {
    flexDirection: 'row',
    gap: 12,
  },
  modeButton: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C4CBC7',
    paddingVertical: 14,
    alignItems: 'center',
  },
  modeButtonActive: {
    backgroundColor: '#245C52',
    borderColor: '#245C52',
  },
  modeButtonText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
  },
  fieldGroup: {
    gap: 8,
  },
  fieldLabel: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4CBC7',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 17,
    backgroundColor: '#FDFCF9',
  },
  inputError: {
    borderColor: '#B94A48',
  },
  errorText: {
    color: '#B94A48',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  preferenceGroup: {
    gap: 12,
  },
  preferenceRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#245C52',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
  },
  checkboxChecked: {
    backgroundColor: '#245C52',
  },
  preferenceText: {
    flex: 1,
  },
  statusBox: {
    borderRadius: 18,
    backgroundColor: '#EEF5F2',
    padding: 14,
  },
  primaryButton: {
    backgroundColor: '#245C52',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
  summaryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
