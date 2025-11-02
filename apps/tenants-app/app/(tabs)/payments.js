import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentsScreen = () => {
  const handlePayment = () => {
    const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID; // Access from environment variables

    if (!RAZORPAY_KEY_ID || RAZORPAY_KEY_ID === 'YOUR_RAZORPAY_KEY_ID') {
      alert('Razorpay Key ID is not configured. Please configure it in the .env file.');
      return;
    }

    const options = {
      description: 'Rent Payment',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: RAZORPAY_KEY_ID,
      amount: '5000', // TODO: Replace with the actual amount
      name: 'My Awesome PG',
      prefill: {
        email: 'test@example.com',
        contact: '9999999999',
        name: 'Test User'
      },
      theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <Button title="Pay Rent" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PaymentsScreen;
