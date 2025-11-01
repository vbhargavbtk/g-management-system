import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const FoodMenuScreen = () => {
  const [foodMenu, setFoodMenu] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call to /api/food/today
    // axios.get('http://localhost:5000/api/food/today')
    //   .then(response => setFoodMenu(response.data))
    //   .catch(error => console.error(error));

    setFoodMenu({
      day: 'Monday',
      breakfast: 'Poha',
      lunch: 'Roti, Sabzi, Dal, Rice',
      dinner: 'Roti, Sabzi, Dal, Rice',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Menu</Text>
      {foodMenu ? (
        <View>
          <Text>Breakfast: {foodMenu.breakfast}</Text>
          <Text>Lunch: {foodMenu.lunch}</Text>
          <Text>Dinner: {foodMenu.dinner}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
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

export default FoodMenuScreen;
