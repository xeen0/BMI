import * as React from 'react';
import {Card, Paragraph ,Title} from 'react-native-paper';
import {View, Text} from 'react-native';
export const OverWeight = ({BMI, Subtitle, tips=[]}) => {
  return (
    <View>
      <Card>
        <Card.Title
          title={BMI}
          size="small"
          subtitle={Subtitle}
          style={{display: 'flex', justifyContent: 'center'}}
        />
        <Card.Content>
          <Title>Tips :</Title>
          {
            tips.map((tip,index)=>(
              <Paragraph key={index}>
                {tip}
              </Paragraph>
            ))
          }
        </Card.Content>
      </Card>
    </View>
  );
};


