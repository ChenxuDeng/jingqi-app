import React,{useEffect,useState} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Search from "../screens/search";
import Upload from "../screens/upload";
import Activity from "../screens/activity";
import User from "../screens/user";
import {Icon} from "react-native-elements";
import * as ImagePicker from'expo-image-picker'
import {Text, TouchableOpacity} from "react-native";

function BottomTab(props) {
    const Tab=createBottomTabNavigator()

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result.uri);

        if (!result.cancelled) {
            setImage(result.uri);
        }

        props.navigation.navigate('Upload',{pickedImage:result.uri})
    };

    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            tabBarOptions={{
                showLabel:false,
                style:{
                    backgroundColor:'#37435d'
                },
                keyboardHidesTabBar:true
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return focused?<Icon name={'home'} type={'ionicon'} size={27} color={'white'}/>:<Icon name={'home-outline'} type={'ionicon'} size={27} color={'white'}/>
                    } else if (route.name === 'Search') {
                        return focused?<Icon name={'md-search'} type={'ionicon'} size={27} color={'white'}/>:<Icon name={'search-outline'} type={'ionicon'} size={27} color={'white'}/>
                    }
                    else if (route.name === 'Upload') {
                        return focused?
                            <Icon name={'add-circle'} type={'ionicon'} size={27} color={'white'}/>:<Icon name={'add-circle-outline'} type={'ionicon'} size={27} color={'white'} onPress={()=>{pickImage()}}/>
                    }
                    else if (route.name === 'Activity') {
                        return focused?<Icon name={'heart'} type={'antdesign'} size={27} color={'white'}/>:<Icon name={'hearto'} type={'antdesign'} size={27} color={'white'}/>
                    }
                    else if (route.name === 'User') {
                        return focused?<Icon name={'person'} type={'ionicon'} size={27} color={'white'}/>:<Icon name={'person-outline'} type={'ionicon'} size={27} color={'white'}/>
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Upload" component={Upload}/>
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    );
}

export default BottomTab;