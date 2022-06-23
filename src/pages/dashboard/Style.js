import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#27364A',
  },
  profileImage: {
    backgroundColor: '#365870',
    marginTop: hp(10),
    width: hp(15),
    height: hp(15),
    borderRadius: hp(20),
    borderWidth: hp(1),
    borderColor: '#284459',
    alignItems: 'center',
    justifyContent: 'center',
    // overflow: 'hidden',
    zIndex: 1,
    position: 'relative',
  },
  background: {
    marginTop: hp(10),
    width: hp(18),
    height: hp(18),
    borderRadius: hp(20),
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: hp(1),
    borderRadius: hp(20),
    borderColor: '#365870',
    resizeMode: 'cover',
  },

  liveContainer: {
    backgroundColor: 'red',
    width: '70%',
    paddingVertical: wp(0.6),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 0,
    zIndex: 5,
    borderRadius: wp(1.5),
  },
  liveText: {
    color: '#fff',
    fontSize: hp(1.4),
    marginRight: hp(0.5),
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: hp(2),
  },

  profileName: {
    color: '#fff',
    fontSize: hp(2.5),
  },

  profileEmail: {
    color: '#979EA8',
    fontSize: hp(1.8),
  },
  logout: {
    color: '#ff8800',
  },
  logoutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green',
    paddingHorizontal: hp(1),
    marginTop: hp(10),
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
