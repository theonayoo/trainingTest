import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from './style';

// Icons
import Cart from '@assets/icons/cart';

const OrderContent = props => {
  console.log('order ::::',props.data)
  return (
    <>
      {props.data ? (
        props.data.map(item => (
          <View style={styles.container} key={item.id}>
            <View style={styles.leftContianer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.productInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  {props.priceText} : {item.price} {item.currency}
                </Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={styles.deletBtn}
                activeOpacity={0.8}
                onPress={props.delete}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.emptyCartContainer}>
          <Cart width={hp(5)} height={hp(5)} colors={'#9C9C9C'} />
          <Text style={styles.cartTitle}>Empty Cart</Text>
        </View>
      )}
    </>
  );
};

export default OrderContent;
