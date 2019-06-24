
import React, { useState, useEffect } from 'react';
import {Text,View,Dimensions, TouchableOpacity,TextInput,Image} from 'react-native';
import { Icon } from 'react-native-elements'

export default function Interact(props) {
    const [comment,setComment] = useState(' ');
    const [isLike,setIsLike] = useState(false)
    const [listComment,setListComment] = useState([{id:'1',imageUser:require('./../pic/user1.png'),user:'Erick Smith',comment:'Wow! Check out these fan art drawings of Justin Bieber from Bella Priema Leza on Instagram.'},
    {id:'2',imageUser:require('./../pic/user2.png'),user:'Alex Minash',comment:`I will send Justin Bieber's Whats App to the first 2.000 people who like this comment and follow me.`}])
    return (

    <View style={styles.container}>
        <View style={styles.interactsContainer}>
        <TouchableOpacity
         onPress={()=>{setIsLike(!isLike)}}>
            <View style={[styles.interactContainer,{borderRightWidth:1}]}>
                <Icon name='like1' type='antdesign'color={isLike?'#ffa500':'#E0E0E0'} size={24}/>
                <Text style={styles.interactText}>{isLike?'12':'11'} Like</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={[styles.interactContainer,{borderRightWidth:1}]}>
                <Icon name='comment-text' type='material-community'color='#E0E0E0' size={24}/>
                <Text style={styles.interactText}>23 Comments</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.interactContainer}>
                <Icon name='share-variant' type='material-community'color='#E0E0E0' size={24}/>
                <Text style={styles.interactText}>3 Share</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
              <TextInput 
              style={styles.input}
              maxLength = {100}
              value={comment}
              onChangeText={(text) => setComment(text)} >
              </TextInput>
              <Icon name='send' type='material-community'color='#E0E0E0' backgroundColor='#481708' size={18}
              onPress={() => {
                let arr = listComment.concat({id:Math.random().toString(),imageUser:require('./../pic/user1.png'),user:'Dinh',comment:comment})  
                setListComment(arr)
                setComment('')
            }}
              />
        </View>
        
        {listComment.map(comment=>{
            return(
                <View style={styles.commentContainer} key={comment.id}>
                    <View style={styles.textCommentContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={comment.imageUser} style={styles.imgUser}/>
                            <Text style={styles.userName}>{comment.user}</Text>
                        </View>
                        <Text style={styles.userComments}> {comment.comment}</Text>
                    </View>
                </View>
            )
        })}

    </View>

    );
}
const screenWidth = Dimensions.get('window').width;
const styles={
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
    container:{
        justifyContent:'space-around',
        backgroundColor:'#3E170C',
        margin:16,
        marginTop:0,
        paddingBottom:15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    interactsContainer:{
        justifyContent:'space-around',
        flexDirection:'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#250A02',
    },
    interactContainer:{
        height: 45.5,
        borderColor: '#250A02',
        width:(screenWidth-30)/3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
        color:'white',
        padding:10,
        fontSize:12,
        backgroundColor:'#481708',
        width:(screenWidth-32)*0.75,
    },
    inputContainer:{
        margin:15,
        height:36,
        borderColor: '#250A02',
        borderWidth: 1,
        borderRadius:5, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#481708',
    },
    icon:{
        padding:10
    },
    commentContainer:{
        borderColor:'#250A02',
        height:68,
        backgroundColor:'#3E170C',
        borderTopWidth: 1,
        width:(screenWidth-32),
      },
    textCommentContainer:{
        width:(screenWidth-32),
        padding: 10,
        justifyContent:'center'
      },
    imgUser:{
        height:24,
        width:24,
        borderRadius:90
    },
    userName:{
        fontSize:12,
        fontWeight:'bold',
        color:'white',
        margin:5
    },
    userComments:{
        fontSize:10,
        color:'white'
    }
}
