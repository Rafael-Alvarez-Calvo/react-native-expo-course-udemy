import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    resultContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 20,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: "right",
        fontWeight: '400'
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 30,
        textAlign: "right",
        fontWeight: '300'

    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    buttonText: {
        color: Colors.textPrimary,
        fontSize: 25,
        fontWeight: '300',
        fontFamily: "SpaceMono",
        textAlign: "center",
        padding: 10,
    },
});