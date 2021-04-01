import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {Avatar, Header, Icon, ListItem, Text,CheckBox} from "react-native-elements";

function NewMessage(props) {
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
            flex:1,
            padding:10
        },
        paddingBottom:{
            paddingBottom:15
        }
    })

    return (
        <View style={style.screen}>
            <Header
                leftComponent={{ icon: 'chevron-back', color: '#fff',type:'ionicon',onPress:()=>{props.navigation.goBack()}}}
                centerComponent={<Text style={style.headerTitle}>新消息</Text>}
                rightComponent={<Text style={{color:'white'}} onPress={()=>{}}>聊天</Text>}
                backgroundColor={'#37435d'}
            />
            <ScrollView style={style.content}>
                <Text style={{color:'white'}}>
                    发送给
                </Text>
                <TextInput placeholder={'搜索...'} autoFocus placeholderTextColor={'#4d5464'} style={{marginVertical:10,fontSize:13}}/>
                <Text style={{color:'white',marginBottom:20}}>
                    推荐
                </Text>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
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
                            <Icon name={'camera'} type={'feather'} color={'white'}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default NewMessage;