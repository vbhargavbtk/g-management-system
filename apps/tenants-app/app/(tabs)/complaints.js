import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ComplaintsScreen = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('other');

  const handleSubmit = () => {
    // TODO: Replace with actual API call to /api/complaints/add
    // axios.post('http://localhost:5000/api/complaints/add', { description, category, tenant: 'TENANT_ID' })
    //   .then(response => alert('Complaint submitted!'))
    //   .catch(error => console.error(error));

    console.log({ description, category });
    alert('Complaint submitted!');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>File a Complaint</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        style={styles.input}
        multiline
      />
      {/* TODO: Add a category picker */}
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
    minHeight: 100,
  },
});

export default ComplaintsScreen;
