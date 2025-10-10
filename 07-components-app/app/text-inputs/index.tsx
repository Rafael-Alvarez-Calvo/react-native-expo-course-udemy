import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={100}>
      {/* // Este componente evita que el teclado se superponga a los inputs */}
      <SafeAreaView>
        <ScrollView>
          <ThemedView margin className="mt-2">
            <ThemedTextInput
              placeholder="Nombre completo"
              autoCapitalize="words"
              autoCorrect={false}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCorrect={false}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Teléfono"
              keyboardType="phone-pad"
              autoCorrect={false}
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />

            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>
            <ThemedCard className="mb-4">
              <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            </ThemedCard>

            <ThemedTextInput
              style={{ marginBottom: isIOS ? 100 : 10 }}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              autoCorrect={false}
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
