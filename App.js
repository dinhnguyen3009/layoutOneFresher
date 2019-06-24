
import React, { useState } from 'react';
import {Text, ScrollView,View,Button} from 'react-native';
import OverView from './screen/OverView';
import Information from './screen/Information';
import News from './screen/News'
import Interact from './screen/Interact'

export default function App(props) {

  return (
      <ScrollView>
      <View style={styles.container}>
        <OverView/>
        <Information/>
        <News/>
        <Interact/>
      </View>
      </ScrollView>
    );
}

const styles={
  container:{
    justifyContent : 'flex-start',
    backgroundColor: '#250A02'
}
}
