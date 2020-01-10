import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

const backgroundColor = '#227ebf';
export default class MH_Tim_kiem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
          backgroundColor:backgroundColor
        }}>
        <View style={{height: 150,alignItems: 'center'}} >
            <Image style={{height: 150, width:150}} source={require ("../icons/tbk.png")}></Image>
        </View>
        <View style={{height: 50, alignItems: 'center'}}>
            <View style={{flex:2, flexDirection:"row"}}>
                <Text style={{fontWeight:"bold", fontSize:20 ,color:"#ffffff"}}>Lớp:</Text>
                <Text style={{fontWeight:"bold", fontSize:20 ,color:"#ffffff"}}>React Native Cơ Bản LRAC_255C7N</Text>
            </View>
        </View>
        <View style={{height: 100, alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:20 ,color:"#a2fafa"}}>Họ Tên: Trần Bảo Khương</Text>
            <Text style={{fontWeight:"bold", fontSize:20 ,color:"#a2fafa"}}>Phone: 0987703934</Text>
            <Text style={{fontWeight:"bold", fontSize:20 ,color:"#a2fafa"}}>Email: khuongtb1989@gmail.com</Text>
        </View>
      </View>
    );
  }
}
