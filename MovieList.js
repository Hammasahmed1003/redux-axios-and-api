import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies } from './redux/moviesActions';

const MovieList = ({ movies, loading, error, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View  style={style.container} >
             <View style={style.listing} >
          <Text  style={style.textmain} >{ "Title : "+" "  + item.title}</Text>
          <Text>{ "Year : " + " " +   item.releaseYear}</Text>

        </View>
        </View>
       
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchMovies })(MovieList);


const style = StyleSheet.create({

    container:{
        flex:1, 
        margin:30, 
        backgroundColor:"white",
        justifyContent:"center",
        alignSelf:"center"
    },
    listing:{
        height:200,
        width:260,
        justifyContent:"center",
    alignItems:"center",
    backgroundColor:"pink",
    borderRadius:10,
    elevation:10,
    borderColor:"lightgray",
    borderWidth:1,
    },
    textmain:{
        fontSize:30,
        fontWeight:"bold",
        color:"white",

    },
})