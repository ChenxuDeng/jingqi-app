import React,{useState} from 'react';
import {View, StyleSheet, Image, Dimensions, ScrollView} from "react-native";
import {Avatar, Header, Text, Button, Icon} from "react-native-elements";
import {useRoute} from '@react-navigation/native'

function UserHomePage(props) {
    const style=StyleSheet.create({
        screen:{
            flex:1
        },
        headerTitle:{
            color:'white',
            fontSize:16,
            fontWeight:'bold'
        },
        content:{
            backgroundColor:'#353338',
            flex:1
        },
        tab:{
            borderRadius:0,
            backgroundColor:'#353338'
        },
        tabSelected:{
            borderRadius:0,
            backgroundColor:'#353338',
            borderBottomWidth:0.5,
            borderColor:'white'
        }
    })

    const route=useRoute()
    const [tabIndex,setTabIndex]=useState(0)

    const imageTabHandler=()=>{
        if(tabIndex===0){
            return <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    无图片
                </Text>
            </View>
        }else if(tabIndex===1){
            return <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    无视频
                </Text>
            </View>
        }
    }

    return (
        <View style={style.screen}>
            <Header
                leftComponent={{ icon: 'chevron-back', color: '#fff',type:'ionicon',onPress:()=>{props.navigation.goBack()}}}
                centerComponent={<Text style={style.headerTitle}>{route.params?.name}</Text>}
                rightComponent={{ icon: 'more-horizontal', color: '#fff',type:'feather',onPress:()=>{}}}
                backgroundColor={'#37435d'}
            />
            <View style={style.content}>
                <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                    <View>
                        <Avatar rounded size={'large'} source={{uri:route.params?.avatar}}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,marginRight:66,marginLeft:50}}>
                        <View>
                            <Text style={{color:'white',fontWeight:'bold'}}>123</Text>
                            <Text style={{color:'white',fontWeight:'bold'}}>发帖</Text>
                        </View>
                        <View>
                            <Text style={{color:'white',fontWeight:'bold'}}>123</Text>
                            <Text style={{color:'white',fontWeight:'bold'}}>人气</Text>
                        </View>
                        <View>
                            <Text style={{color:'white',fontWeight:'bold'}}>123</Text>
                            <Text style={{color:'white',fontWeight:'bold'}}>关注</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',margin:10}}>
                    <Button title={'已关注'} onPress={()=>{}} titleStyle={{fontSize:12}} containerStyle={{width:'30%'}} buttonStyle={{backgroundColor:'#4d5464',paddingVertical:3}}/>
                    <Button title={'消息'} onPress={()=>{}} titleStyle={{fontSize:12}} containerStyle={{width:'30%'}} buttonStyle={{backgroundColor:'#4d5464',paddingVertical:3}}/>
                    <Button title={'邮件'} onPress={()=>{}} titleStyle={{fontSize:12}} containerStyle={{width:'30%'}} buttonStyle={{backgroundColor:'#4d5464',paddingVertical:3}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,marginBottom:3}}>
                    <Button icon={<Icon name={'grid-on'}
                                        color={tabIndex===0&&'white'}/>}
                            containerStyle={{flex:1}}
                            buttonStyle={tabIndex===0?style.tabSelected:style.tab}
                            onPress={()=>{setTabIndex(0)}}
                    />
                    <Button icon={<Icon name={'tv'} type={'feather'} color={tabIndex===1&&'white'}/>} containerStyle={{flex:1}} buttonStyle={tabIndex===1?style.tabSelected:style.tab} onPress={()=>{setTabIndex(1)}}/>
                </View>
                {imageTabHandler()}
            </View>
        </View>
    );
}

export default UserHomePage;