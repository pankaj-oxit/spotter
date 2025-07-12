import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

interface LogoutButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.logutButton}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
