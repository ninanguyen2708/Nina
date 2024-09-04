import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TeacherView from '../screens/TeacherView';
import RecordingScreen from '../screens/RecordingScreen';
import TopicScreen from '../screens/TopicScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TopicScreen" component={TopicScreen} />
            <Stack.Screen name="TeacherView" component={TeacherView} />
            <Stack.Screen name="RecordingScreen" component={RecordingScreen} />
        </Stack.Navigator>
    );
}
