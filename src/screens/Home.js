import React, {Component} from 'react';
import {View,
    Text,
    StatusBar, 
    ImageBackground, 
    StyleSheet, 
    TextInput, 
    Button, 
    RefreshControl, 
    FlatList, 
    TouchableOpacity, 
    ToastAndroid,
    Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const Separator = () => (
  <View style={styles.separator} />
);

const Home = ({navigation}) => {  
   const [text, handleText] = React.useState({ 
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }  
  
  return (
    <>
      <View style={{flex:1}}>
          <ImageBackground source={require('../images/bg.png')} resizeMode='cover' style={{width:360, height:1200}}>
          <StatusBar barStyle='light-content' backgroundColor="#4fd914"/>

          <Text style={styles.header}>Healing.id</Text>
          <View style={styles.viewForm}>
            <Text style={styles.variabelForm}>Lokasi Keberangkatan</Text>
            <TextInput placeholder='Tentukan lokasi keberangkatan' style={styles.TextInput} onChangeText={getText('keberangkatan')} value={text.keberangkatan}/>

            <Text style={styles.variabelForm}>Lokasi Tujuan</Text>
            <TextInput placeholder='Tentukan lokasi tujuan' style={styles.TextInput} onChangeText={getText('kedatangan')} value={text.kedatangan}/>

            <Text style={styles.variabelForm}>Tanggal Keberangkatan</Text>
            <TextInput placeholder='Tentukan Tanggal Keberangkatan' style={styles.TextInput} onChangeText={getText('tanggal')} value={text.tanggal}/>

            <Button
                title="Temukan"
                color='#ed3511'
                onPress={() => navigation.navigate('Details', {text})}
            />
            <Separator />
        </View>

        <Text style={styles.footer}>Gilang Rizky Ramadhan - 119140081</Text>

          </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    footer: {
        textAlign:'center',
        marginTop:130,
        color: '#360606'
    },


    variabelForm: {
        fontWeight: 'bold',
        color: '#360606',
        fontSize:14
    },

    viewForm: {
      marginTop: 50,
      marginHorizontal: 40,
      backgroundColor:'#FFFFFF',
      padding:20,
      elevation: 3,
      borderRadius: 20,
    },
    

    separator: {
        marginVertical: 8,
        
    },

    flatList: {
        marginBottom:10, 
        backgroundColor:'#ed3511', 
        marginHorizontal:20, 
        borderRadius:30, 
        justifyContent:'center', 
        alignItems:'center'
    },

    TextInput: {
      borderBottomWidth: 1,
      borderWidth:1,
      marginHorizontal:0,
      paddingHorizontal:10,
      borderColor:'#360606',
      borderRadius:4,
      marginTop:10,
      color:'#ed3511',
      fontSize: 12,
      paddingVertical:5,
      marginBottom:35,
    },
});

export default Home;