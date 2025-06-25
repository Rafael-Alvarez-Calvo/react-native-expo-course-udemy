import { globalStyles } from "@/styles/global-styles";
import { View, Text } from "react-native";

import ThemeText from "@/components/ThemeText";
import ThemeButton from "@/components/ThemeButton";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const { formula, handleNumberPress } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.resultContainer}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">1111111</ThemeText>
      </View>

      <View style={globalStyles.row}>
        <ThemeButton
          label="C"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("C")}
        />
        <ThemeButton
          label="+/-"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("+/-")}
        />
        <ThemeButton
          label="del"
          color={Colors.lightGray}
          blackText
          onPress={() => console.log("del")}
        />
        <ThemeButton
          label="÷"
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton label="7" onPress={() => handleNumberPress("7")} />
        <ThemeButton label="8" onPress={() => handleNumberPress("8")} />
        <ThemeButton label="9" onPress={() => handleNumberPress("9")} />
        <ThemeButton
          label="x"
          color={Colors.orange}
          onPress={() => console.log("x")}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton label="4" onPress={() => handleNumberPress("4")} />
        <ThemeButton label="5" onPress={() => handleNumberPress("5")} />
        <ThemeButton label="6" onPress={() => handleNumberPress("6")} />
        <ThemeButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton label="1" onPress={() => handleNumberPress("1")} />
        <ThemeButton label="2" onPress={() => handleNumberPress("2")} />
        <ThemeButton label="3" onPress={() => handleNumberPress("3")} />
        <ThemeButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton
          label="0"
          doubleSize
          onPress={() => handleNumberPress("0")}
        />
        <ThemeButton label="." onPress={() => handleNumberPress(".")} />
        <ThemeButton
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
