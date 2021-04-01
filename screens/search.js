import React from 'react';
import {View, StyleSheet, Platform, TouchableOpacity, ScrollView, Image, Dimensions} from "react-native";
import {Header, Icon, Text} from "react-native-elements";
import { SearchBar } from 'react-native-elements';
import {useSelector} from "react-redux";

function Search(props) {
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
        searchAndroid:{
            backgroundColor:'#4d5464',
            borderRadius:10,
            height:40
        },
        searchIos:{
            backgroundColor:'transparent'
        }
    })

    const dummyImage=useSelector((state)=>{
        return state.comment.dummyImage
    })

    return (
        <View style={style.screen}>
            <Header
                centerComponent={<Text style={style.headerTitle}>搜索</Text>}
                backgroundColor={'#37435d'}
            />
            <View style={style.content}>
                <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                    <View style={{flex:1,marginRight:10}}>
                        <SearchBar platform={Platform.OS==='android'?'android':'ios'}
                                   containerStyle={Platform.OS==='android'?style.searchAndroid:style.searchIos}
                                   inputContainerStyle={{height:25}}
                                   placeholder={'搜索...'}
                                   inputStyle={{fontSize:14}}
                        />
                    </View>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('CodeScan')}}>
                        <Icon name={'scan1'} type={'antdesign'} style={{marginLeft:'auto'}} color={'white'}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{flexDirection:'row',flexWrap:"wrap"}}>
                        {dummyImage.map((image,index)=>{
                            return <View style={{height:Dimensions.get('window').width/3,width:Dimensions.get('window').width/3,marginBottom:2,paddingLeft:index%3!==0?2:0}} key={index}>
                                <Image source={{uri:image.image}} style={{height:'100%',width:'100%'}}/>
                            </View>
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Search;