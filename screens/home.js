import React,{useEffect,useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {Text, Header, Divider, Icon, ListItem} from "react-native-elements";
import Post from "../components/post";
import * as ImagePicker from 'expo-image-picker';
import {BottomSheet} from "react-native-elements";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as MediaLibrary from "expo-media-library";
import CameraRoll from "@react-native-community/cameraroll";

function Home(props) {
    const style=StyleSheet.create({
        headerTitle:{
            color:'white',
            fontSize:16,
            fontWeight:'bold'
        },
        screen:{
            flex:1,
            backgroundColor:'#353338'
        },
        bottomNav:{
            paddingHorizontal:20,
            paddingVertical:10,
            backgroundColor: '#37435d',
            flexDirection:'row',
            justifyContent:'space-between',
            borderTopColor:'#353338',
            borderTopWidth:0.5
        }
    })

    const [bottomSheet,setBottomSheet]=useState(false)
    const [index,setIndex]=useState(0)
    const [image, setImage] = useState(null);

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
            aspect:[4,3],
            quality:1
        })
        if (!result.cancelled) {
            setImage(result.uri);
        }
        await MediaLibrary.saveToLibraryAsync(result.uri)
        props.navigation.navigate('Upload',{pickedImage:result.uri})
    }

    const bottomSheetHandler=()=>{
        setBottomSheet(true)
    }

    return (
        <View style={style.screen}>
            <Header
                leftComponent={{ icon: 'camera', color: '#fff',type:'feather',onPress:()=>{takeImage()}}}
                centerComponent={<Text style={style.headerTitle}>惊奇事件簿</Text>}
                rightComponent={{ icon: 'send', color: '#fff',type:'feather',onPress:()=>{props.navigation.navigate('Sub')}}}
                backgroundColor={'#37435d'}
            />
            <ScrollView>
                <Post bottomSheetHandler={bottomSheetHandler} navigation={props.navigation}/>
            </ScrollView>
            <TouchableWithoutFeedback onPress={()=>{setBottomSheet(false)}}>
                <BottomSheet isVisible={bottomSheet} containerStyle={{padding:10}}>
                    <ListItem bottomDivider onPress={()=>{setBottomSheet(false)}} containerStyle={{backgroundColor:'#4d5464'}}>
                        <ListItem.Content style={{alignItems:'center'}}>
                            <ListItem.Title style={{color:'white'}}>
                                举报
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider onPress={()=>{setBottomSheet(false)}} containerStyle={{backgroundColor:'#4d5464'}}>
                        <ListItem.Content style={{alignItems:'center'}}>
                            <ListItem.Title style={{color:'white'}}>
                                分享
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem onPress={()=>{setBottomSheet(false)}} containerStyle={{backgroundColor:'#4d5464'}}>
                        <ListItem.Content style={{alignItems:'center'}}>
                            <ListItem.Title style={{color:'white'}}>
                                取消关注
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem onPress={()=>{setBottomSheet(false)}} style={{marginTop:10}} containerStyle={{backgroundColor:'#4d5464'}}>
                        <ListItem.Content style={{alignItems:'center'}}>
                            <ListItem.Title style={{color:'white'}}>
                                cancel
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </BottomSheet>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Home;