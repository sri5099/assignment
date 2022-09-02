import { StyleSheet, Text,LogBox } from 'react-native'
// import React from 'react'
import  React    from 'react'
import News from './news'
import { store } from './store'
import { Provider } from 'react-redux'

const App = () => {

  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
<News/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})