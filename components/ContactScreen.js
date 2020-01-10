import React, {Component} from 'react';
import {View,Image,Text, TextInput,StyleSheet } from 'react-native';
import Button from 'react-native-button';
function UselessTextInput(props) {
    return (
        <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        />
    );
}
export default class ContactScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            Email:'',
            Content:'',
        }
    }

    ShowAlert(){
        let email__ = this.state.Email;
        let content__ = this.state.Content;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email__) == false){
            alert("Bạn đã nhập sai định dạng email hoặc đang rỗng, vui lòng nhập lại");
            this.setState({Email:''});
        } else if(!content__){
            alert("Bạn vui lòng kiểm tra lại nội dung cần gửi, sẽ tốt hơn nếu nội dung được điền và cụ thể.");
        } else { 
            alert("Email:" + email__ + "\n" +"Vừa gửi liên hệ với nội dung như sau: \n \n" + this.state.Content );
        }  
    }

    render(){
        return(
            <View style={style.container}>
                <View style={style.inputContainer}>                    
                    <Text style={style.text}>Liên Hệ</Text>
                </View>
                <View style={{alignItems:"center",marginTop:20}}>
                    <Image style={style.image} source={require('../icons/email.png')}></Image>  
                </View> 
                <View style={{flex:1, justifyContent:"flex-start"}}>
                    <TextInput 
                        onChangeText={(Email)=>this.setState({Email})} value={this.state.Email} 
                        placeholder='Email'  style={style.input}/>
                    <View
                    style={{
                        backgroundColor: '#e4e9ed',
                        borderColor: '#000000',
                        borderWidth: 1,
                        borderRadius: 15,
                        margin: 5,
                    }}>
                        <UselessTextInput
                            multiline
                            numberOfLines={4}
                            onChangeText={(Content)=>this.setState({Content})}
                            value={this.state.Content}
                            placeholder='Nội Dung'
                        />
                    </View>
                    <Button style={{fontSize:16, color:'#ffffff'}}
                        containerStyle={{
                                        padding:8, marginLeft:120, 
                                        marginRight:120, height:40, 
                                        borderRadius:5, backgroundColor:'#4387fd', marginTop:10}}
                        onPress={this.ShowAlert.bind(this)}
                    >
                            Đồng ý
                    </Button>
                </View>          
            </View>       
        );
    }
}
const style= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#DFDFDF',
      justifyContent:'center'
    },
    inputContainer: {
        borderColor: '#ffffff',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height:50,
        flexDirection: 'row',
        alignItems:'center',               
    },
    text:{
        marginRight:5, 
        borderBottomColor: '#FFFFFF', 
        flex:1, 
        color:'#ffffff', 
        fontSize:18, 
        textAlign:'center', 
        justifyContent:'center'  
    },
    inputIcon:{
        width:26, 
        height:26, 
        tintColor:'#ffffff', 
        marginLeft:5, 
        justifyContent: 'center'
    },

    input:{
        height:44,
        paddingHorizontal:10,
        backgroundColor:'#ffffff',
        margin:5,
        borderRadius:5
    },
    button:{
        height:46,
        borderRadius:5,
        borderWidth: 1,
        borderColor:'#ffffff',
        margin:5,
        backgroundColor:'#4387fd',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:100,
        width:100,
        marginBottom:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    }
})