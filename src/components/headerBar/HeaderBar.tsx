import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

interface HeaderBarProps {
  from: string;
  to: string;
  fromCity: string;
  toCity: string;
  date: string;
  passenger: string;
  travelClass: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  from,
  to,
  fromCity,
  toCity,
  date,
  passenger,
  travelClass,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.route}><Text style={styles.bold}>{from}</Text> {fromCity} → <Text style={styles.bold}>{to}</Text> {toCity}</Text>
      <Text style={styles.details}>{date} · {passenger} · {travelClass}</Text>
    </View>
  );
};

export default HeaderBar; 