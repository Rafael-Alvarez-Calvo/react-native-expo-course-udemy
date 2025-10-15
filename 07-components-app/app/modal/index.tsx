import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView
      margin
      className="mt-2 flex-1 items-center justify-center bg-slate-800"
    >
      {/* <Link asChild href="/modal/modal-normal">
        <ThemedText
          type="link"
          className="text-2xl text-light-text dark:text-dark-text my-2"
        >
          Abrir modal
        </ThemedText>
      </Link> */}

      <ThemedButton
        onPress={() => router.push("/modal/modal-normal")}
        className="mb-3"
      >
        Abrir modal normal
      </ThemedButton>
      <ThemedButton
        onPress={() => router.push("/modal/modal-contained")}
        className="mb-3"
      >
        Abrir modal contenido
      </ThemedButton>
      <ThemedButton
        onPress={() => router.push("/modal/modal-fullScreen")}
        className="mb-3"
      >
        Abrir modal de pantalla completa
      </ThemedButton>
      <ThemedButton
        onPress={() => router.push("/modal/modal-transparent")}
        className="mb-3"
      >
        Abrir modal transparente
      </ThemedButton>
      <ThemedButton
        onPress={() => router.push("/modal/modal-containedTransparent")}
        className="mb-3"
      >
        Abrir modal transparente contenido
      </ThemedButton>
    </ThemedView>
  );
};

export default ModalScreen;
