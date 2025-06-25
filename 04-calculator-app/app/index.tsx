import ThemeButton from "@/components/ThemeButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        <ThemeButton
          label="C"
          blackText
          color={Colors.lightGray}
          onPress={clean}
        />
        <ThemeButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={toggleSign}
        />
        <ThemeButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={deleteLast}
        />
        <ThemeButton
          label="÷"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton label="7" onPress={() => buildNumber("7")} />
        <ThemeButton label="8" onPress={() => buildNumber("8")} />
        <ThemeButton label="9" onPress={() => buildNumber("9")} />
        <ThemeButton
          label="X"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton label="4" onPress={() => buildNumber("4")} />
        <ThemeButton label="5" onPress={() => buildNumber("5")} />
        <ThemeButton label="6" onPress={() => buildNumber("6")} />
        <ThemeButton
          label="-"
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton label="1" onPress={() => buildNumber("1")} />
        <ThemeButton label="2" onPress={() => buildNumber("2")} />
        <ThemeButton label="3" onPress={() => buildNumber("3")} />
        <ThemeButton label="+" color={Colors.orange} onPress={addOperation} />
      </View>

      <View style={globalStyles.row}>
        <ThemeButton label="0" doubleSize onPress={() => buildNumber("0")} />
        <ThemeButton label="." onPress={() => buildNumber(".")} />

        <ThemeButton
          label="="
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
