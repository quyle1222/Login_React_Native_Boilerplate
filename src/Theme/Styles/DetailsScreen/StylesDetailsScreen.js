import { StyleSheet } from 'react-native'

const StylesDetails = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    fontFamily: 'Rubik-Medium',
  },
  styleImageBackground: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleProfile: {
    fontFamily: 'Rubik-Medium',
    marginTop: '10%',
    marginLeft: '5%',
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  cardStyle: {
    fontFamily: 'Rubik-Medium',
    height: '78%',
    width: '90%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    marginLeft: '5%',
    marginTop: '20%',
    marginRight: '5%',
    backgroundColor: 'white',
  },
  userNameText: {
    marginTop: 30,
    fontSize: 26,
    alignSelf: 'center',
    fontFamily: 'Rubik-Medium',
  },
  userEmailText: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#B0B0B0',
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  iconSetting: {
    marginTop: 10,
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  iconEdit: {
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 10,
    width: 20,
    height: 20,
  },
  topContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#B0B0B0',
  },
  fieldContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  iconField: { marginTop: 2 },
  textField: {
    marginLeft: 10,
    marginTop: 5,
    fontFamily: 'Rubik-Medium',
    color: '#747474',
  },
  arrow_Left_Icon: {
    marginTop: 5,
    marginLeft: 'auto',
  },
  avatarStyle: {
    width: 80,
    height: 100,
    borderWidth: 2,
    zIndex: 1,
    position: 'absolute',
    marginLeft: '33%',
    marginTop: '25%',
    borderRadius: 80,
    borderColor: '#747474',
  },
})

export default StylesDetails
