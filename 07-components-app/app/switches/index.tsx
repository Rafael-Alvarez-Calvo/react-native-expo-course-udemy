import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [switchState, setSwitchState] = useState({
    isActive: false,
    isHungry: true,
    isHappy: false,
  });

  const { isActive, isHungry, isHappy } = switchState;

  const toggleSwitch = (key: keyof typeof switchState) => {
    setSwitchState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard className="mb-4">
        <ThemedSwitch
          text="Active"
          value={isActive}
          onValueChange={() => toggleSwitch("isActive")}
        />
        <ThemedSwitch
          text="Hungry"
          value={isHungry}
          onValueChange={() => toggleSwitch("isHungry")}
        />
        <ThemedSwitch
          text="Happy"
          value={isHappy}
          onValueChange={() => toggleSwitch("isHappy")}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
