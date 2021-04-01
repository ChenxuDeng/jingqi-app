import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Image} from "react-native";
import {Avatar, Button, Header, Icon, Text} from "react-native-elements";

function User(props) {
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
                centerComponent={<Text style={style.headerTitle}>Frank</Text>}
                backgroundColor={'#37435d'}
            />
            <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                <View style={{alignItems:'center'}}>
                    <View>
                        <Avatar rounded size={'large'} source={{uri:'https://static.hollywoodreporter.com/wp-content/uploads/2020/12/Shameless_1103_2281_R-H-2020-1607034816-928x523.jpg'}}/>
                    </View>
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
    );
}

export default User;