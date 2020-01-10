import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Du_lieu from '../Xu_ly/Xu_ly_3L';
import { format_number } from '../Xu_ly/Dung_chung';

class FlatListItem extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={{ flex: 1, flexDirection: "row", backgroundColor: this.props.index % 2 == 0 ? "#e5f6ff" : "#e5f6ff" }}>
                        <Image style={{ height: 80, width: 120, margin: 5 }} source={{ uri: "https://servicedatajs.herokuapp.com/" + this.props.item.Ma_so + ".png" }}></Image>
                        <View style={{ flex: 1, flexDirection: "column", height: 30 }}>
                            <Text style={styles.itemText}>{this.props.item.Ten}</Text>
                            <Text style={styles.itemText}>Đơn giá: {format_number(this.props.item.Don_gia_Ban)} VND</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class AndroidList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            so: 0,
            getData: false
        }
    }
    refreshFlatList() {
        this.setState({ so: this.state.so + 1 });
    }

    componentDidMount() {
        
        var url = `https://servicedatajs.herokuapp.com/Danh_sach_Dien_thoai`
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                let Androidlist = responseData.filter((item)=>{ 
                    let ptt = new RegExp("^ANDROID\_[0-9]*");
                    return ptt.test(item.Ma_so); 
                });
                Du_lieu.AndroidPhoneList = Androidlist;
                this.refreshFlatList();
                this.setState({ getData: true })
            })
            .catch((error) => {
                console.error(error);
            })
            
    }


    render() {
        if (this.state.getData) {
            return (
                <View style={{ marginTop: 2 }}>
                    <FlatList
                        data={Du_lieu.AndroidPhoneList}
                        keyExtractor={(item) => item.Ma_so}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index} navigation={this.props.navigation}></FlatListItem>
                            );
                        }}>
                    </FlatList>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <ActivityIndicator style={{ paddingTop: 100 }} size="large" color="#0000ff" />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    itemText: {
        color: "#000000",
        padding: 5,
        fontSize: 14
    }
})


