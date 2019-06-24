import React, { useState,useEffect } from 'react';
import {Image,Text,View, ImageBackground, Dimensions,FlatList} from 'react-native';
import {ImageAutoSize} from './../lib/ImageAutoSize'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export function DayTwo(props) {
    const [slide,setSlide] = useState([
        {id:'1',link:require('./../pic/slide1.png'),name:'Tom Hank'},
        {id:'2',link:require('./../pic/slide2.png'),name:'Audrey Tautou'},
        {id:'3',link:require('./../pic/slide3.png'),name:'Ian McKellen'},
        {id:'4',link:require('./../pic/slide4.png'),name:'Jean Reno'},
        {id:'5',link:require('./../pic/slide5.png'),name:'Paul Bettany'},
        {id:'6',link:require('./../pic/slide6.png'),name:'Alfred Molina'},
        {id:'7',link:require('./../pic/slide1.png'),name:'Tom Hank'}]);
    const textInfo='A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity.'
    return (
    <View style={styles.container}>
        <FlatList
            horizontal={true}
            data={slide}
            extraData={slide}
            keyExtractor={item=>item.id}
            renderItem={param=>(
                <View style={styles.actorContainer}>
                    <Image 
                        source={param.item.link}
                        style={styles.actorImage}/>
                    <Text style={styles.textActorName}>{param.item.name}</Text>
                </View>
                )}>
        </FlatList>
        <View style={styles.infoContainer}></View>
        <Text style={styles.textInfo}>{textInfo}</Text>
        <ImageAutoSize
            source={require('./../pic/image.png')}
            ></ImageAutoSize>
    </View>
    );
}

const styles ={
    container:{
        margin:16,
    },
    actorContainer:{
        marginRight:5,
        height:88,
        width:58,
        backgroundColor:'#3F1306',
        alignItems:'center',
      },
    actorImage:{
        marginTop:5,
        height:55,
        width:55,
        borderRadius: 90
    },
    textActorName:{
        textAlign: 'center',
        fontSize:10,
        color:'#FFFFFF',
    },
    infoContainer:{
        justifyContent:'space-between'
    },
    textInfo:{
        marginTop:20,
        fontSize:12,
        color:'#FFFFFF',
        marginBottom:20
    },
    infoImage:{
        
    },
  }
export default DayTwo;