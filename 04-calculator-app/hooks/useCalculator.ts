import React, { useEffect, useRef, useState } from 'react'

enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = 'x',
    DIVIDE = '÷',
    EQUALS = '=',
    CLEAR = 'C',
    DELETE = 'del',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operator>(Operator.CLEAR);

    useEffect(() => {
        setFormula(number);
    }, [number])


    const handleNumberPress = (numberString: string) => {
        // Verificar si ya existe el punto decimal
        if (numberString === '.' && number.includes('.')) return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            // Si el número es '0' o '-0', reemplazarlo por el nuevo número
            setNumber(numberString);
        }

        setNumber(number + numberString);
    };

    return {
        formula,
        number,
        previousNumber,

        // Methods
        handleNumberPress
    }
}