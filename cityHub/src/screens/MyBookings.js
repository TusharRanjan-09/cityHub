import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function MyBookings({navigation}) {
  const {colors} = useTheme()
  return (
    <View style={{flex: 1,backgroundColor: colors.profile,alignItems: 'center',alignContent:'center',justifyContent:'center' ,  }}>
        <Text style={{color:colors.txt}}>My Bookings Screen</Text>       
    </View>
  );
}

