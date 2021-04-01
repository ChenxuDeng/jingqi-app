import React,{useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Avatar, Icon, Text} from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useSelector} from "react-redux";

function Post(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1
        },
        postTitle:{
            backgroundColor:'#353338',
            paddingVertical:14,
            paddingHorizontal:6
        },
        userName:{
            fontWeight:'bold',
            marginLeft:6,
            color:'white'
        },
        content:{
            height:'100%',
            width:'100%'
        },
        footer:{
            backgroundColor:'#353338',
            padding:7,
            flexDirection:'row',
        },
        expand:{
            alignItems:'center'
        }
    })

    const [like,setLike]=useState(false)
    const [save,setSave]=useState(false)

    const comment=useSelector((state)=>{
        return state.comment.comment
    })

    const newPost=useSelector((state)=>{
        return state.comment.newPost
    })

    const likeHandler=()=>{
        setLike(!like)
    }

    const saveHandler=()=>{
        setSave(!save)
    }

    return (
        <View style={style.screen}>
            {newPost.map((post,index)=>{
                return <View key={index}>
                    <View style={style.postTitle}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Avatar rounded source={{uri:post.avatar}} onPress={()=>{props.navigation.navigate('UserHome',{avatar:post.avatar,name:post.name})}}/>
                            <Text style={style.userName}>{post.name}</Text>
                            <View style={{marginLeft:'auto',marginRight:3}}>
                                <Icon name={'more-horiz'} color={'white'} onPress={()=>{props.bottomSheetHandler()}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{height:300}}>
                        <Image source={{uri:post.imageUrl}} style={style.content}/>
                    </View>
                    <View style={style.footer}>
                        <Icon name={!like?'hearto':'heart'} type={'antdesign'} color={'white'} style={{marginLeft:3}} onPress={likeHandler}/>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate('Comment')}}>
                            <Icon name={'message-square'} type={'feather'} color={'white'} style={{marginLeft:10}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={'send'} type={'feather'} color={'white'} style={{marginLeft:10}}/>
                        </TouchableOpacity>
                        <View style={{marginLeft:'auto',marginRight:3}}>
                            <Icon name={!save?'bookmark-outline':'bookmark'} type={'ionicon'} color={'white'} onPress={saveHandler}/>
                        </View>
                    </View>
                    <View style={style.footer}>
                        <Text style={{color:'white'}}>
                            {post.description}
                        </Text>
                    </View>
                    {comment.slice(0,3).map((comment,index)=>{
                        return <View style={{backgroundColor:'#353338',paddingLeft:7,paddingBottom:3}} key={index}>
                            <Text style={{color:'white'}}>
                                {comment.name}: {comment.message}
                            </Text>
                        </View>
                    })}
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('Comment')}}>
                        <View style={[style.footer,style.expand]}>
                            <Text style={{color:'#4d5464'}}>
                                查看所有评论
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            })}
        </View>
    );
}

export default Post;