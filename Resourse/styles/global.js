import {StyleSheet} from 'react-native'; 

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    
    textBold:{
        fontFamily: "Nunito-ExtraBold",
        fontSize: 20,
    },
    
    text:{
        fontFamily: "Nunito-Regular",
        fontSize: 20,
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10,
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    headerText:{
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%'
      }

});
