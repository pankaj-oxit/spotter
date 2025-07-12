import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import { styles } from './styles';

interface CalendarButtonProps {
  tripType: string;
  singleTripDate: Date;
  roundTripStartDate: Date;
  roundTripEndDate: Date;
  onPress: () => void;
}

const CalendarButton: React.FC<CalendarButtonProps> = ({
  tripType,
  singleTripDate,
  roundTripStartDate,
  roundTripEndDate,
  onPress,
}) => {
  const today = new Date();

  const renderDateContent = () => {
    switch (tripType) {
      case 'round':
        return (
          <Text style={styles.normalText}>
            {roundTripStartDate ? format(roundTripStartDate, 'EEE, dd MMM') : format(today, 'EEE, dd MMM')}
            {'  '}–{'  '}
            {roundTripEndDate ? format(roundTripEndDate, 'EEE, dd MMM') : format(today, 'EEE, dd MMM')}
          </Text>
        );
      default:
        return (
          <Text style={styles.normalText}>
            {singleTripDate ? format(singleTripDate, 'EEE, dd MMM') : format(today, 'EEE, dd MMM')}
          </Text>
        );
    }
  };

  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.icon}>📅</Text>
      {renderDateContent()}
    </TouchableOpacity>
  );
};



export default CalendarButton; 