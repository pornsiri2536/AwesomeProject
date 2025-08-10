import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmiValue = w / (h * h);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) setResult('UNDERWEIGHT');
      else if (bmiValue < 25) setResult('NORMAL');
      else if (bmiValue < 30) setResult('OVERWEIGHT');
      else if (bmiValue < 35) setResult('OBESE');
      else setResult('EXTREMELY OBESE');
    } else {
      setBmi('0');
      setResult('Invalid input');
    }
  };

  return (
    <View style={styles.container}>
      {/* Weight Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Weight (kg.)</Text>
        <TextInput
          placeholder="Input your Weight ..."
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          style={styles.input}
        />
      </View>

      {/* Height Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Height (cm.)</Text>
        <TextInput
          placeholder="Input your Height ..."
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
          style={styles.input}
        />
      </View>

      {/* BMI & Result */}
      <View style={styles.resultRow}>
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{bmi}</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      </View>

      {/* Calculate Button */}
      <View style={styles.buttonContainer}>
        <Button title="CALCULATE" color="#007BFF" onPress={calculateBMI} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#B2EBF2',
    flex: 1,
    justifyContent: 'center',
  },
  inputGroup: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderWidth: 0,
    fontSize: 16,
    paddingVertical: 8,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  resultBox: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 4,
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
  },
});
