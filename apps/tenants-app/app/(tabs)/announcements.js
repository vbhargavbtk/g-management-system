import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const AnnouncementsScreen = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // TODO: Replace with actual API call to /api/announcements
    // axios.get('http://localhost:5000/api/announcements')
    //   .then(response => setAnnouncements(response.data))
    //   .catch(error => console.error(error));

    setAnnouncements([
      { _id: '1', title: 'Water supply issue', description: 'There will be no water supply tomorrow from 10 AM to 12 PM.', date: new Date() },
      { _id: '2', title: 'Electricity maintenance', description: 'Power cut is scheduled for tomorrow from 2 PM to 3 PM.', date: new Date() },
    ]);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>
      <FlatList
        data={announcements}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 10,
    textAlign: 'right',
    color: 'gray',
  },
});

export default AnnouncementsScreen;
