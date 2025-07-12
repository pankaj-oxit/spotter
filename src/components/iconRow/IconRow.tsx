import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const IconRow: React.FC = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.icon}>👜</Text>
      <Text style={styles.icon}>🧳</Text>
    </View>
  );
};

export default IconRow; 