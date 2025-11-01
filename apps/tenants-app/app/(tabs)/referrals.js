import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ReferralsScreen = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // TODO: Replace with actual API call to /api/referrals/add
    // axios.post('http://localhost:5000/api/referrals/add', { referredEmail: email, tenant: 'TENANT_ID' })
    //   .then(response => alert('Referral submitted!'))
    //   .catch(error => console.error(error));

    console.log({ email });
    alert('Referral submitted!');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refer a Friend</Text>
      <TextInput
        placeholder="Friend's Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
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
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default ReferralsScreen;
