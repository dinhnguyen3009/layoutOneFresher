import React, { useState,useEffect } from 'react';
import {Image,Text,View, ImageBackground, Dimensions,ScrollView,TouchableOpacity,Button} from 'react-native';
import {ImageAutoSize} from '../lib/ImageAutoSize'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function OverView(props) {
    return (
    <View>
        <ImageAutoSize source={require('./../pic/background-image.png')}></ImageAutoSize>

        <View style={styles.infoContent}>
          <Text style={styles.textFontOne}>The Davinci Code</Text>
          <View style={styles.overviewContainer}>
          
            <Image
                source={require('./../pic/poster.png')}
                style={styles.poster}/>
            
            <View style={styles.infoContainer}>

                <View style={styles.overviewInfoContainer}>
                    <View style={styles.overviewInfo}>
                        <Text style={styles.textFontTwo}>Genres</Text>
                        <Text style={styles.textFontThree}>Thriller, Mystery, Suspense</Text>
                    </View>
                    <View style={styles.overviewInfo}>
                        <Text style={styles.textFontTwo}>Moods</Text>
                        <Text style={styles.textFontThree}>Controversial, Suspenseful</Text>
                    </View>
                    <View style={styles.overviewInfo}>
                        <Text style={styles.textFontTwo}>Director</Text>
                        <Text style={styles.textFontThree}>Ron Howard</Text>
                    </View>
                </View>

                <View style={styles.pointContainer}>
                    <TouchableOpacity 
                        disabled = {true}
                        style={styles.point}>
                        <Text style={styles.textFontFour}>IMDb 6.6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        disabled = {true}
                        style={styles.point}>
                        <Text style={styles.textFontFour}>PG-13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        disabled = {true}
                        style={styles.point}>
                        <Text style={styles.textFontFour}>2h 29m</Text>
                    </TouchableOpacity>
                </View>

            </View>
          </View>
        </View>

      </View>
    );
}

const styles ={
    infoContent:{
        margin:16,
        marginTop:-150
    },
    overviewContainer:{
        height:210,
        flexDirection:'row',
    },
    poster:{
        height:210,
        width:140
    },
    textFontOne:{
        marginRight:screenWidth*0.27,
        fontSize: 42,
        color:'#FFFFFF',
        textTransform: 'uppercase'
    },
    textFontTwo:{
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
        color:'#F8A725'
    },
    textFontThree:{
        fontSize: 11,
        color:'#FFFFFF',
        marginBottom:15
    },
    textFontFour:{
        fontSize: 12,
    },
    overviewInfo:{
        borderBottomColor: '#3E3E3E',
        borderBottomWidth: 1,
        width:178
    },
    overviewInfoContainer:{
        justifyContent:'space-between',
        height:160
    },
    infoContainer:{
        marginLeft:20,
    },

    point:{
        marginTop:11,
        backgroundColor : '#FACB93',
        alignItems:'center',
        padding : 2,
        paddingLeft:8,
        paddingRight:8,
        borderRadius : 5,
      },
    pointContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
  }