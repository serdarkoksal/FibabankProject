import { ActivityIndicator, View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { POSTS } from '../../data/posts'
import { Icon } from 'react-native-elements'

//import React, { useEffect, useState, Component } from 'react';











const Deneme = () => {
  const getDataUsingGet = () => {
    //GET request
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const getDataUsingPost = () => {
    //POST json
    var dataToSend = {title: 'foo', body: 'bar', userId: 1};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          {/*Running GET Request*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingGet}>
            <Text style={styles.textStyle}>
              Get Data Using GET
            </Text>
          </TouchableOpacity>
          {/*Running POST Request*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingPost}>
            <Text style={styles.textStyle}>
              Get Data Using POST
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


















const GetPhotos = () => {

  const getDataUsingGet = () => {
      //for (let i=1; i < 10; i++) {

          //fetch(`https://jsonplaceholder.typicode.com/photos/${i}`, {
          fetch(`https://jsonplaceholder.typicode.com/photos/1`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(JSON.stringify(responseJson));
          console.log(responseJson);
          //return responseJson
        })
        .catch((error) => {
          alert(JSON.stringify(error));
          console.error(error);
        });

      //}

  };

//   const images = () => {
//   const imageUrls = [];
//   imageUrls.push(
//     <View key={getDataUsingGet.url}>
//     <Text>{getDataUsingGet.url}</Text>
//     </View>
//   );
// }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
      paddingRight: 5,
      paddingLeft: 5,
    },
    logo: {
      width: 325,
      height: 150,
    },
  });


  return (
    
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>


          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingGet}>
            <Text style={styles.textStyle}>
              Get Data Using GET
            </Text>
          </TouchableOpacity>


          {/* <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingGet}>
            <Text style={styles.textStyle}>
              Görselleri Getir
            </Text>
            <Image
            style={styles.logo}
            source={{uri: getDataUsingGet}}
          />
          </TouchableOpacity> */}


        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Fetch
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },
});





// const Post = ({post}) => {
//   return (
//     <View style = {{matginBottom:30}}>
//       <Divider width={1} orientation = 'vertical' />
//       <PostHeader post={post} />
//       {/* <PostImage post={post} />
//       <PostFooter post={post} /> */}
//     </View>
//   )
// }

// const PostHeader = ({post}) => (
//   <View style={{flexDirection:'row', justifyContent:'space-between', margin:5, alignItems:'center'}}>
//     <View style = {{flexDirection:'row', alignItems:'center'}}>
//       {/* <Image  stye={styles.story} source = {{url:post.imageUrl}} /> */}
//       <Text style={{color:'white', marginleft:10, fontWeight:'700'}}>
//         Post Header
//         {/* {post.user} */}
//       </Text>
//     </View>
//     <TouchableOpacity>
//       {/* <Icon style={styles.Icon} name="ellipsis-horizontal-outline" size={25} color="#fff" /> */}
//     </TouchableOpacity>
//   </View>
// )



// // const PostImage = ({post}) => (
// //   <View style={{width:'100%', height:450}}> 
// //   <Image style = {{height='100%', resizeMode:'cover'}} source={{url:post.Image}} />
// //   </View>
// // )

// const PostFooter = ({post}) => (
//   <View style={{flexDirection:'row'}}>
//     <View style={{flexDirection:'row', width:'32%', justifyContent:'space-between'}}>
//     <TouchableOpacity>
//         <Icon style={styles.Icon} name="ellipsis-horizontal-outline" size={25} color="#fff" />
//     </TouchableOpacity>
//     <TouchableOpacity>
//         <Icon style={styles.Icon} name="ellipsis-horizontal-outline" size={25} color="#fff" />
//     </TouchableOpacity>
//     <TouchableOpacity>
//         <Icon style={styles.Icon} name="ellipsis-horizontal-outline" size={25} color="#fff" />
//     </TouchableOpacity>
//       </View> 
//   </View>
// )

// const styles = StyleSheet.create({
//   story:{
//     width:35,
//     height:35,
//     marginleft:5,
//     borderWidth:3,
//     borderColor:'#ff8501',
//     borderRadius:35
//   },
//   icon:{
//     width:25,
//     height:25,
//     marginLeft:10
//   },
// })

export default Deneme;