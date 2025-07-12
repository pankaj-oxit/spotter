// ✅ Create a reusable Modal component with CalendarPicker
import React from 'react';
import { Modal, View, Pressable, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { TRIP_TYPES } from '../../constants/tripTypes';
import { styles } from './styles';

interface CalendarModalProps {
  visible: boolean;
  onClose: () => void;
  type: 'oneway' | 'round';
  today: Date;
  oneWayDate: Date;
  roundStartDate: Date;
  roundEndDate: Date;
  onDateChange: (
    date: Date,
    type: 'oneway' | 'round',
    _unused?: any,
    rangeType?: 'start' | 'end'
  ) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  visible,
  onClose,
  type,
  today,
  oneWayDate,
  roundStartDate,
  roundEndDate,
  onDateChange,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {type === TRIP_TYPES.ONEWAY ? (
            <CalendarPicker
              onDateChange={(date) => onDateChange(date, TRIP_TYPES.ONEWAY)}
              selectedStartDate={oneWayDate}
              minDate={today}
            />
          ) : (
            <CalendarPicker
              onDateChange={(date, rangeType) =>
                onDateChange(
                  date,
                  TRIP_TYPES.ROUND,
                  undefined,
                  rangeType === 'END_DATE' ? 'end' : 'start'
                )
              }
              selectedStartDate={roundStartDate}
              selectedEndDate={roundEndDate}
              allowRangeSelection
              minDate={today}
            />
          )}

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;
