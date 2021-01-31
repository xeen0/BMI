import React, {useState} from 'react';
import {View , StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {OverWeight} from './components/OverWeight';
const App: () => React$Node = () => {
  const [wt, setWt] = useState(null);
  const [ht, setHt] = useState(null);
  const [bmi, setBmi] = useState(-1);
  const [Subtitle, setSubtitle] = useState(null);
  const [tips, setTips] = useState(['Eat More']);
  const UnderWeightTips = ['Add healthy calories', 'Go nutrient dense'];
  const OverWeightTips = [
    'Consume less “bad” fat and more “good” fat',
    'Eat plenty of dietary fiber.',
  ];
  const WeightTips = ['Going good...'];

  return (
    <View style={styles.container}>
        
      <View  style={styles.title}>
      <TextInput
        label="Weight in kg"
        value={wt}
        onChangeText={(wt) => setWt(wt)}
      />
      </View>
      <View  style={styles.title}>
      <TextInput
        label="Height in meters"
        value={ht}
        onChangeText={(text) => setHt(text)}

      />
      </View>
     
      <Button

        mode="outlined"
        onPress={() => {
          setBmi(wt / (ht * ht));
          if (bmi.toFixed(2) < 18.5) {
            setSubtitle('Under Weight ');
            setTips(UnderWeightTips);
          } else if (bmi.toFixed(2) >= 18.5 && bmi.toFixed(2) < 25) {
            setSubtitle('Normal Weight');
            setTips(WeightTips);
          } else {
            setSubtitle('Over Weight');
            setTips(OverWeightTips);
          }
        }}>
        Submit
      </Button>

      {bmi > 0 ? (
        <View style={styles.title}>
          <OverWeight
            BMI={`BMI  =   ${bmi.toFixed(2)}`}
            Subtitle={Subtitle}
            tips={tips}
          />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    paddingTop:30
  },
  title:{
    paddingTop:5
  },
  
})
