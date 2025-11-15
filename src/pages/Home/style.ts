import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F8F8F8',
    overflow: 'hidden',
    padding:20,
    paddingTop:70
    
  },

  wrapper:{
    paddingTop: 20
  },

  icone: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop:10,
    paddingBlockEnd:10
  },
  title:{
    fontSize: 25,
    flexDirection: "column"
  },

  imageBanner:{
    width: '100%',
    height: 150,
    resizeMode: 'contain'
    
  },
  botaoRedondo:{
    backgroundColor: "#D03A2B",
    borderRadius: 50, 
    width:60,
    height:60,
    padding: 17,
    position: 'absolute',
    bottom: 20,
    right: 10
    
  }


});



