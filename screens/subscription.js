import React, {useEffect} from 'react';
import {View, StyleSheet, Platform, TouchableOpacity, ScrollView} from "react-native";
import {Header, Text, SearchBar, Avatar, Icon,ListItem} from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { useRoute } from '@react-navigation/native';

function Subscription(props) {
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
        postTitle:{
            backgroundColor:'#353338'
        },
        paddingBottom:{
            paddingBottom:15
        },
        searchAndroid:{
            backgroundColor:'#4d5464',
            borderRadius:30,
            height:40
        },
        searchIos:{
            backgroundColor:'transparent'
        }
    })

    const route=useRoute()

    useEffect(() => {
        if (route.params?.msg) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.msg]);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { statusLib } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                const {statusCam}= await ImagePicker.requestCameraPermissionsAsync()
                if (statusLib && statusCam !== 'granted') {
                    alert('Sorry, we need permissions to make this work!');
                }
            }
        })();
    }, []);

    const takeImage=async()=>{
        let result=await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
    }

    return (
        <View style={style.screen}>
            <Header
                leftComponent={{ icon: 'chevron-back', color: '#fff',type:'ionicon',onPress:()=>{props.navigation.goBack()}}}
                centerComponent={<Text style={style.headerTitle}>关注</Text>}
                rightComponent={{ icon: 'create-outline', color: '#fff',type:'ionicon',onPress:()=>{props.navigation.navigate('NewMsg')}}}
                backgroundColor={'#37435d'}
            />
            <ScrollView style={{padding:10}}>
                <SearchBar platform={Platform.OS==='android'?'android':'ios'}
                           containerStyle={Platform.OS==='android'?style.searchAndroid:style.searchIos}
                           inputContainerStyle={{height:25}}
                           placeholder={'搜索...'}
                           inputStyle={{fontSize:14}}
                />
                <View>
                    <Text style={{color:'white',marginVertical:15,fontWeight:'bold'}}>
                        消息
                    </Text>
                </View>
                <View style={style.postTitle}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Avatar rounded size={'medium'} source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51porQK0%2BeL._AC_SL1100_.jpg'}}/>
                        <TouchableOpacity onPress={()=>{props.navigation.navigate('Msg',{name:'Heisenberg',avatar:'https://images-na.ssl-images-amazon.com/images/I/51porQK0%2BeL._AC_SL1100_.jpg'})}}>
                            <ListItem.Content style={{marginLeft:10}}>
                                <ListItem.Title style={{color:'white'}}>Heisenberg</ListItem.Title>
                                <ListItem.Subtitle style={{color:'white'}}>{route.params?.msg}...</ListItem.Subtitle>
                            </ListItem.Content>
                        </TouchableOpacity>
                        <View style={{marginLeft:'auto'}}>
                            <Icon name={'camera'} type={'feather'} color={'white'} onPress={takeImage}/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{color:'white',marginVertical:15,fontWeight:'bold'}}>
                        推荐
                    </Text>
                </View>
                <View style={[style.postTitle,style.paddingBottom]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Avatar rounded size={'medium'} source={{uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pictured-mads-mikkelsen-as-hannibal-lecter-news-photo-1593087906.jpg?crop=0.352xw:0.468xh;0.427xw,0.0814xh&resize=640:*'}}/>
                        <TouchableOpacity style={{flex:1}} onPress={()=>{props.navigation.navigate('Msg',{name:'Hannibal',avatar:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pictured-mads-mikkelsen-as-hannibal-lecter-news-photo-1593087906.jpg?crop=0.352xw:0.468xh;0.427xw,0.0814xh&resize=640:*'})}}>
                            <ListItem.Content style={{marginLeft:10}}>
                                <ListItem.Title style={{color:'white'}}>Hannibal</ListItem.Title>
                                <ListItem.Subtitle style={{color:'white'}}>私信</ListItem.Subtitle>
                            </ListItem.Content>
                        </TouchableOpacity>
                        <View style={{marginLeft:'auto'}}>
                            <Icon name={'camera'} type={'feather'} color={'white'} onPress={takeImage}/>
                        </View>
                    </View>
                </View>
                <View style={[style.postTitle,style.paddingBottom]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Avatar rounded size={'medium'} source={{uri:'http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg'}}/>
                        <TouchableOpacity style={{flex:1}} onPress={()=>{props.navigation.navigate('Msg',{name:'Fry',avatar:'http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg'})}}>
                            <ListItem.Content style={{marginLeft:10}}>
                                <ListItem.Title style={{color:'white'}}>Fry</ListItem.Title>
                                <ListItem.Subtitle style={{color:'white'}}>私信</ListItem.Subtitle>
                            </ListItem.Content>
                        </TouchableOpacity>
                        <View style={{marginLeft:'auto'}}>
                            <Icon name={'camera'} type={'feather'} color={'white'} onPress={takeImage}/>
                        </View>
                    </View>
                </View>
                <View style={[style.postTitle,style.paddingBottom]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Avatar rounded size={'medium'} source={{uri:'https://images-na.ssl-images-amazon.com/images/I/41cuQnJf5kL._AC_.jpg'}}/>
                        <TouchableOpacity style={{flex:1}} onPress={()=>{props.navigation.navigate('Msg',{name:'Peter',avatar:'https://images-na.ssl-images-amazon.com/images/I/41cuQnJf5kL._AC_.jpg'})}}>
                            <ListItem.Content style={{marginLeft:10}}>
                                <ListItem.Title style={{color:'white'}}>Peter</ListItem.Title>
                                <ListItem.Subtitle style={{color:'white'}}>私信</ListItem.Subtitle>
                            </ListItem.Content>
                        </TouchableOpacity>
                        <View style={{marginLeft:'auto'}}>
                            <Icon name={'camera'} type={'feather'} color={'white'} onPress={takeImage}/>
                        </View>
                    </View>
                </View>
                <View style={[style.postTitle,style.paddingBottom]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Avatar rounded size={'medium'} source={{uri:'https://static.hollywoodreporter.com/wp-content/uploads/2020/12/Shameless_1103_2281_R-H-2020-1607034816-928x523.jpg'}}/>
                        <TouchableOpacity style={{flex:1}} onPress={()=>{props.navigation.navigate('Msg',{name:'Frank',avatar:'https://static.hollywoodreporter.com/wp-content/uploads/2020/12/Shameless_1103_2281_R-H-2020-1607034816-928x523.jpg'})}}>
                            <ListItem.Content style={{marginLeft:10}}>
                                <ListItem.Title style={{color:'white'}}>Frank</ListItem.Title>
                                <ListItem.Subtitle style={{color:'white'}}>私信</ListItem.Subtitle>
                            </ListItem.Content>
                        </TouchableOpacity>
                        <View style={{marginLeft:'auto'}}>
                            <Icon name={'camera'} type={'feather'} color={'white'} onPress={takeImage}/>
                        </View>
                    </View>
                </View>
                <View style={[style.postTitle,style.paddingBottom]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Avatar rounded size={'medium'} source={{uri:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg'}}/>
                        <TouchableOpacity style={{flex:1}} onPress={()=>{props.navigation.navigate('Msg',{name:'Ross',avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg'})}}>
                            <ListItem.Content style={{marginLeft:10}}>
                                <ListItem.Title style={{color:'white'}}>Ross</ListItem.Title>
                                <ListItem.Subtitle style={{color:'white'}}>私信</ListItem.Subtitle>
                            </ListItem.Content>
                        </TouchableOpacity>
                        <View style={{marginLeft:'auto'}}>
                            <Icon name={'camera'} type={'feather'} color={'white'} onPress={takeImage}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{marginTop:'auto'}}>
                <ListItem containerStyle={{backgroundColor:'#37435d'}} onPress={takeImage}>
                    <ListItem.Content style={{alignItems:'center',flexDirection:'row'}}>
                        <Icon name={'camera'} type={'feather'} color={'white'}/>
                        <ListItem.Title style={{color:'white',marginLeft:6}}>
                            Camera
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
    );
}

export default Subscription;