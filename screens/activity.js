import React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Avatar, Divider, Header, Text} from "react-native-elements";
import {useSelector} from "react-redux";

function Activity(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1,
            backgroundColor:'#353338'
        },
        headerTitle:{
            color:'white',
            fontSize:16,
            fontWeight:'bold'
        },
        content:{
            backgroundColor:'#353338',
            flex:1
        }
    })

    const activity=useSelector((state)=>{
        return state.comment.activity
    })

    return (
        <View style={style.screen}>
            <Header
                centerComponent={<Text style={style.headerTitle}>动态</Text>}
                backgroundColor={'#37435d'}
            />
            <ScrollView>
                <View style={style.content}>
                    <View style={{margin:10}}>
                        <Text style={{color:'white'}}>
                            近一个月
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                        <Avatar source={{uri:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg'}} rounded/>
                        <Text style={{color:'white',marginLeft:10}}>Ross: 分享了1张图片</Text>
                    </View>
                    <Divider style={{marginVertical:3}}/>
                    <View style={{margin:10}}>
                        <Text style={{color:'white'}}>
                            近期
                        </Text>
                    </View>
                    <View style={{margin:10}}>
                        {activity.map((activity,index)=>{
                            return <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}} key={index}>
                                <Avatar source={{uri:activity.Avatar}} rounded/>
                                <Text style={{color:'white',marginLeft:10}}>{activity.name}: {activity.content}</Text>
                            </View>
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Activity;