
import React, { useState, useEffect } from 'react';
import {Text,View,Dimensions, TouchableOpacity} from 'react-native';
import { Icon, Button } from 'react-native-elements'
import {ImageAutoSize} from '../lib/ImageAutoSize'

const screenWidth = Dimensions.get('window').width;
const defaultTextNews = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export default function News(props) {
    const [isReadMore,setIsReadMore] = useState(true)
    // const _onSetReadMore= ()=>{
    //     if(defaultTextNews.length>150){
    //         setIsReadMore(false);
            
    //     }
    // }
    const onSetContent = ()=>{
        if(isReadMore){
            let res = defaultTextNews.slice(0, 147);
            return(
            <View style={styles.textNewsContainer}>
                <Text style={styles.textNews} 
                onPress={() => setIsReadMore(false)}
                >{res} Read More...
                </Text>
            </View>
            )
        }
        else{
            return(
                <View style={styles.textNewsContainer}>
                    <Text style={styles.textNews}>{defaultTextNews}</Text>
                </View>
            )
        }
    }
    useEffect(()=>{
        onSetContent()
    })
    return (
    <View style={styles.container}>
        <Text style={styles.titleNews}>4am starts and spinach smoothies: Da Vinci Code's ...</Text>
        <View style={styles.infoOverViewContainer}>
            <View style={styles.infoOverView}>
            <Icon name='access-time' type='material'color='#E0E0E0' size={12}/>
            <Text style={styles.infoOverViewText}>Saturday at 12:00 PM</Text>
            </View>

            <View style={[{width:screenWidth*0.25},styles.infoOverView]}>
            <View style={{flexDirection:'row'}}>
            <Icon name='like1' type='antdesign'color='#E0E0E0' size={12}/>
            <Text style={styles.infoOverViewText}>63</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Icon name='comment-text' type='material-community'color='#E0E0E0' size={12}/>
            <Text style={styles.infoOverViewText}>10</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Icon name='share-variant' type='material-community'color='#E0E0E0' size={12}/>
            <Text style={styles.infoOverViewText}>4</Text>
            </View>
            </View>

        </View>

        <ImageAutoSize
            source={require('./../pic/image2.png')}
            style={{borderRadius:10}}
            ></ImageAutoSize>

        {onSetContent()}
        
    </View>
    );
}

const styles={
    container:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin:16,
        marginBottom:0,
        padding:15,
        backgroundColor:'#481708',
    },
    titleNews:{
        fontSize:20,
        textAlign: 'center',
        color:'#FFFFFF',
        marginLeft: 20,
        marginRight:20,
        marginBottom:20
    },
    infoOverViewContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:20
    },
    infoOverViewText:{
        fontSize:10,
        color:'#FFFFFF',
        marginLeft:4,
    },
    infoOverView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textNews:{
        color:'#828282',
        fontSize:12
    },
    textNewsContainer:{
        flexDirection:'row',
    },
    interactText:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 8,
        textTransform: 'uppercase',
        color:'#828282'
    },
    interactsContainer:{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin:16,
        marginTop:0,
        flexDirection:'row',
        justifyContent:'space-around',
        height: 45.5,
        backgroundColor:'#3E170C',
    },
    interactContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#3E3E3E',
        borderWidth: 1,
    }
}
