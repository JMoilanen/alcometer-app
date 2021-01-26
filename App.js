import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';




export default function App() {

  const [weight, setWeight] = useState();
  const [promiles, setPromiles] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  var [gender, setGender] = useState(0);

  var radio_props = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 }
  ];

  function calculate(){

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsleft = grams - burning * time;
    
    if(gender = 0){
      var promiles = gramsleft / (weight * 0.7);
    }
    else{
      var promiles = gramsleft / (weight * 0.6);
      
      
    }
    if (promiles < 0){
      setPromiles(0);
    }
    else{
setPromiles(promiles); 
    }
    
  }

  return (
    

    <View style={styles.container}>
      <Text>Weight</Text>
      <TextInput style={styles.textcenter} placeholder="Enter your weight" keyboardType="numeric" value={weight} onChangeText={text => setWeight(text)} required></TextInput>
      <Text>Bottles</Text>
      <DropDownPicker
      items={[
          {label: '1 bottle', value: '1'},
          {label: '2 bottles', value: '2'},
          {label: '3 bottles', value: '3'},
          {label: '4 bottles', value: '4'},
          {label: '5 bottles', value: '5'},
          {label: '6 bottles', value: '6'},
          {label: '7 bottles', value: '7'},
          {label: '8 bottles', value: '8'},
          {label: '9 bottles', value: '9'},
      ]}
      defaultIndex={0}
      containerStyle={{height: 40}}
      onChangeItem={item => setBottles(item.value)}
      />
     
      
      <Text style={styles.paddingbottom}>Gender</Text>
      <RadioForm
      radio_props={radio_props}
      initial={0}
      onPress={(value) => {this.setState({value:value})}}
      />
      <Text>Time</Text>

      <DropDownPicker
      items={[
          {label: '1 Tunti', value: '1'},
          {label: '2 tuntia', value: '2'},
          {label: '3 tuntia', value: '3'},
          {label: '4 tuntia', value: '4'},
          {label: '5 tuntia', value: '5'},
          {label: '6 tuntia', value: '6'},
          {label: '7 tuntia', value: '7'},
          {label: '8 tuntia', value: '8'},
          {label: '9 tuntia', value: '9'},
      ]}
      defaultIndex={0}
      containerStyle={{height: 40}}
      onChangeItem={item => setTime(item.value)}
      />
      <Button onPress={calculate} title="calculate">Calculate</Button>
      <Text style={styles.fontsize}>Promilles {promiles.toFixed(2)}</Text>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingbottom:{
    marginTop: 50
  },
  textcenter:{
    
      height: 30,
      width: 112,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderColor: 'gray',
      borderWidth: 1,
   
  },
  fontsize:{
    fontSize: 30
  }
  
});
