import DetailsAPI from '@/Services/Details/DetailsAPI'
import React from 'react'
import { ImageBackground, View, Text, Image, ScrollView } from 'react-native'
import { Config } from '@/Config'
// import { useSelector } from 'react-redux'
import store from '@/Store/User/Store'
import StylesDetails from '@/Theme/Styles/DetailsScreen/StylesDetailsScreen'
import { ItemDetailsComponent } from '@/Components/Details/DetailsItem'
const DetailScreen = () => {
  DetailsAPI()
  // useDispatch(addNewUser(userInfo))
  // const data = useSelector(state => state.infoUser)
  const data = store.getState().infoUser
  console.log(data)
  return (
    <View style={StylesDetails.container}>
      <ImageBackground
        style={StylesDetails.styleImageBackground}
        source={require('@/Assets/Images/background.jpg')}
      >
        <Text style={StylesDetails.titleProfile}>Profile</Text>
        <Image
          style={StylesDetails.avatarStyle}
          source={{ uri: `${Config.BASE_URL}${data.userAvatarPath}` }}
        ></Image>
        <View style={StylesDetails.cardStyle}>
          <View style={StylesDetails.topContainer}>
            <View style={StylesDetails.iconContainer}>
              <Image
                style={StylesDetails.iconSetting}
                source={require('@/Assets/Images/setting.png')}
              />
              <Image
                style={StylesDetails.iconEdit}
                source={require('@/Assets/Images/edit.png')}
              />
            </View>
            <Text style={StylesDetails.userNameText}>{data.userFullName}</Text>
            <Text style={StylesDetails.userEmailText}>{data.userMail}</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {ItemDetailsComponent(`Họ và tên : ${data.userFullName}`)}
            {ItemDetailsComponent(`Tên : ${data.userFirstName}`)}
            {ItemDetailsComponent(`Họ : ${data.userLastName}`)}
            {ItemDetailsComponent(`Ngày sinh : ${data.userBirthDay}`)}
            {ItemDetailsComponent(`Địa chỉ : ${data.userAddress}`)}
            {ItemDetailsComponent(`Mô tả : ${data.userShortIntroduction}`)}
            {ItemDetailsComponent(`Chiều cao : ${data.userHeight}`)}
            {ItemDetailsComponent(`Cân nặng : ${data.userWeight}`)}
            {ItemDetailsComponent(`Tuổi : ${data.userAge}`)}
            {ItemDetailsComponent(`Thuận tay : ${data.userPreferredHand}`)}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  )
}
export default DetailScreen
