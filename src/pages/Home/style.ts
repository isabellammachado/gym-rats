import {StyleSheet} from 'react-native';

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
    fontSize: 24,
    flexDirection: "column",
    fontFamily: 'Nunito-ExtraBold' ,
    marginBottom: 5,
  },

  imageBanner:{
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius:10,
    
  },
  botaoRedondo:{
    backgroundColor: "#D33A2C",
    borderRadius: 50, 
    width:60,
    height:60,
    padding: 17,
    position: 'absolute',
    bottom: 20,
    right: 10
    
  }


});



