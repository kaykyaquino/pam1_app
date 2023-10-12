import { StyleSheet, Text, SafeAreaView, Image, View, TextInput, TouchableOpacity } from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      {/*IMAGEM DE LOGIN*/}
      <View style={styles.topo}>
        <Image
        style={styles.Login}
        source={require('../assets/imagem/login_small.png')}
        />
      </View>

      {/*TITULO DE LOGIN*/}
      <Text style={styles.texto}>Login</Text>

      {/*TEXTINPUT DE EMAIL*/}
      <View style={styles.containerTextimput}>
      <Materialicons name='email' size={20} color={'black'}/>
      <TextInput style={styles.TextInput} placeholder='E-MAIL' keyboardType='email-address'/>
      </View>

      {/*TEXTINPUT DE SENHA*/}
      <View style={styles.containerTextimput}>
      <Materialicons name='form-textbox-password' size={20} color={'black'}/>
      <TextInput style={styles.TextInput} placeholder='SENHA' SecureTextEntry={true}/>
      </View>
    
      {/*BOTAO DE TEXTO*/}
      <TouchableOpacity style={styles.btnlogin}>
        <Text style={styles.txtlogin}>LOGIN</Text>
      </TouchableOpacity>

      {/*LOGIN ALTERNATIVO (REDES SOCIAIS)*/}
      
      <Text style={styles.logarCom}>
        Logar com...
      </Text>

      <View style={styles.containerloginCom}> 
  <TouchableOpacity style={styles.btnloginCom}>
      <Image
          source={require('../assets/imagem/google.png')}
      />
  </TouchableOpacity>

  <TouchableOpacity style={styles.btnloginCom}>
      <Image
          source={require('../assets/imagem/facebook.png')}
      />
  </TouchableOpacity>
      </View>

    {/*CRIACAO DE USUARIO*/}
      <View style={styles.containerloginCom}>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('CreateUser');
        }}
        >
          <Text style={styles.botaoregistro}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:16
  },

  topo:{
    alignItems :'center',
    backgroundColor: '#fff',

  },

  Login:{
    width:'50%'
  },

  texto:{
    fontSize:28,
    fontWeight:'500',
    color: '#333',
    marginBottom: 30
  },

  containerTextimput:{
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth:1,
    paddingBottom:8,
    marginBottom:25,
    alignItems: 'center'
  },

  TextInput:{
    padding:10
  },

  btnlogin:{
    backgroundColor: '#3460EB',
    padding: 20,
    borderRadius:10,
    marginBottom:15
  },
  
  txtlogin:{
    textAlign: 'center',
    fontWeight: '700',
    fontSize:16,
    color: '#fff'
  },

  logarCom: {
    textAlign: 'center',
    color: 'black',
    marginBottom:15
  },

  containerloginCom: {
    flexDirection: 'row',
    justifyContent: 'center', 
    marginBottom:15

  },

  btnloginCom: {
    borderBlockColor:'#DDD',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 13
  },

  botaoregistro: {
    color: '#3480EB',
    fontWeight: '700'
  }
  
  

});
