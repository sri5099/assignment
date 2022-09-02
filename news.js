import { StyleSheet, Text, View , SafeAreaView , Image, TextInput , TouchableOpacity , FlatList} from 'react-native'
import React , {useEffect, useState} from 'react'
import { useGetNewsQuery } from './services'
import moment from 'moment'




const News = () => {
    const { data, error, isLoading } = useGetNewsQuery()
    const [search, setSearch] = useState('')
    const [resdata, setResData] = useState()
      
    //  function searchData (=() =>{
    //     useGetNewsQuery(search)
    //   })
    function searchData(search) {
        
        useGetNewsQuery(search)
    }
  

    useEffect(() => {
        if (!isLoading) {
        //   setResponseData(data.data.data);
        console.log(data.data.articles , 'data');
        setResData(data.data.articles)
        }
      }, [data]);
    
    useEffect(() => {
        if (!isLoading) {
        console.log(error, 'error');
        }
        }, [error])
    
          
    const renderItem = ({ item }) => 
   
    (
        // console.log(item.urlToImage)
        <View style={styles.item}>
        <Image source={{uri: item.urlToImage}} style={styles.resultimage}/>

        <Text style={styles.resultheader}>{item.title}</Text>

        <Text style={styles.resultcontent}>{item.content}</Text>

        <Text style={styles.resultcontent}>{item.description}</Text>

        <Text style={styles.resultpublisheddate}> published at: {moment(item.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</Text>
        <Text style={styles.resultpublisheddate}>published in   {item.author}</Text>
      </View>
      );
  return (
    <SafeAreaView>
         <View style={styles.headerbar}>
            <Image source={{ uri:'https://miro.medium.com/max/1400/0*0ZgS_Z1-5VBdbN3u.png'}} style={styles.image}/>
      <Text style={{color:'white'}}>News</Text>
      <TextInput  placeholder="Search Key Word" style={styles.searchinputbox} onChangeText={(e)=>setSearch(e)}/>
      <TouchableOpacity style={styles.searchbutton} onPress={searchData()}>
      <Image source={{ uri:'https://www.seekpng.com/png/detail/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}} style={styles.searchimage}/>
      </TouchableOpacity>
    </View>
    <View style={styles.flatlistview}>

    <FlatList data={resdata} renderItem={renderItem}></FlatList>
    </View>
    </SafeAreaView>
   
  )
}

export default News

const styles = StyleSheet.create({
    image:{width:'10%', height:'100%'},
    headerbar:{flexDirection:'row' , height:'5%' , alignItems:'center' , backgroundColor:'black'},
    searchinputbox:{borderStyle:"solid", borderWidth: 1, height:'100%', margin:'2%', backgroundColor: 'white', marginLeft: '40%'},
    searchbutton:{height:'100%', width:'12%' , alignItems:'center' , borderWidth: 1, marginEnd:1},
    searchimage:{width:'50%', height:'50%' ,marginVertical:'25%' },
    resultimage:{width: '100%', height: 200},
    item:{alignItems:'center', borderWidth: 1, margin: 10,borderColor:'grey' },
    flatlistview:{marginTop: '10%'},
    resultheader:{},
    resultcontent:{fontSize: 9},
    resultpublisheddate:{fontSize: 9 , color:'grey' , marginVertical: 15},
    resultpublishedsite:{fontSize: 9}

})