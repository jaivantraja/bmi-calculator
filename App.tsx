import React,{useState} from "react";
import {Text,View,SafeAreaView,TextInput,Button,TouchableOpacity} from "react-native";
import { page1 } from "./android/public/styles/style1";
import LinearGradient from "react-native-linear-gradient";


function App():JSX.Element
{

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');


  const calculateBMI = () => {
    const h=parseFloat(height);
    const w=parseFloat(weight);
    if (w && h) {
      const bmiValue = (w / ((h * h)/ 10000)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  const getMeterColor = () => {
    const bmiNumber = parseFloat(bmi);
    if (bmiNumber < 18.5) return '#ff2121'; //  Red
    if (bmiNumber >= 18.5 && bmiNumber < 25) return '#72ff67'; //  Green
    if (bmiNumber >= 25 && bmiNumber < 30) return '#ffd497'; //  Orange
    return '#ff7700'; //  Darker Orange
  };
  
  return(
    <SafeAreaView style={[page1.container,{backgroundColor:getMeterColor() }]}>
        <Text style={page1.title}>BMI Calculator</Text>
        {bmi ? (
        <View style={[page1.resultContainer, { backgroundColor: getMeterColor() }]}>
          <Text style={page1.resultText}>{bmi}</Text>
        </View>
      ) : null}
        <TextInput
        style={page1.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={value => setWeight(value)}
        />
        <TextInput
        style={page1.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={value => setHeight(value)}
      />
        <TouchableOpacity style={page1.button} onPress={calculateBMI}>
            <Text style={{color:"black",fontSize:20}}>Calculate BMI</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
