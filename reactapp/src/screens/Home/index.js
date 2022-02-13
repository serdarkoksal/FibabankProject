import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Post from '../../components/Home/Post'
import { POSTS } from '../../data/posts'
const Home = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <Header />
        <ScrollView>
          {
            POSTS.map((post, index)=>(
              <Post post={post} key={index}/>
            ))
          }
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1
  }
})
export default Home