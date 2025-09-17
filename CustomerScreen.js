import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getCustomerInfo } from './api';

export default function CustomerScreen({ route }) {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = route.params.token;

  useEffect(() => {
    getCustomerInfo(token)
      .then(setCustomer)
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  if (!customer) return <Text>No customer info found.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer Info</Text>
      <Text>Name: {customer.name}</Text>
      <Text>Email: {customer.email}</Text>
      <Text>Account #: {customer.accountNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 28, marginBottom: 20, textAlign: 'center' },
});
