import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

interface FlightCardProps {
  airlineLogo: any;
  airlineName: string;
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  arrivalCity: string;
  date: string;
  duration: string;
  isDirect: boolean;
  price: string;
  tags?: string[];
  icons?: React.ReactNode;
  note?: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  airlineLogo,
  airlineName,
  departureTime,
  arrivalTime,
  departureCity,
  arrivalCity,
  date,
  duration,
  isDirect,
  price,
  tags = [],
  icons,
  note,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={airlineLogo} style={styles.logo} />
        <View style={styles.timeSection}>
          <Text style={styles.time}>{departureTime}</Text>
          <Text style={styles.city}>{departureCity} · {date}</Text>
        </View>
        <View style={styles.durationSection}>
          <Text style={styles.direct}>{isDirect ? 'Direct' : ''}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
        <View style={styles.timeSection}>
          <Text style={styles.time}>{arrivalTime}</Text>
          <Text style={styles.city}>{arrivalCity} · {date}</Text>
        </View>
      </View>
      <Text style={styles.airline}>{airlineName}</Text>
      <View style={styles.iconRow}>{icons}</View>
      {note && <Text style={styles.note}>{note}</Text>}

      <View style={styles.tagRow}>
        {tags.map((tag, idx) => (
          <Text key={idx} style={styles.tag}>{tag}</Text>
        ))}
      </View>
    </View>
  );
};

export default FlightCard; 