import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './styles';

const CLASS_OPTIONS = ['Economy', 'Premium Economy', 'Business', 'First'];

interface Props {
  passengerCount: number;
  setPassengerCount: (n: number) => void;
  selectedClass: string;
  setSelectedClass: (cls: string) => void;
}

const PassengerClassSelector: React.FC<Props> = ({
  passengerCount,
  setPassengerCount,
  selectedClass,
  setSelectedClass,
}) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);
  return (
    <View style={styles.row}>
      {/* Passenger count */}
      <View style={styles.passengerSelector}>
        <TouchableOpacity
          style={[styles.passengerButton, passengerCount <= 1 && styles.disabled]}
          onPress={() => setPassengerCount(Math.max(1, passengerCount - 1))}
          disabled={passengerCount <= 1}
        >
          <Text style={[styles.passengerButtonText, passengerCount <= 1 && styles.disabledText]}>-</Text>
        </TouchableOpacity>
        <Text style={styles.passengerCountText}>{passengerCount} adult</Text>
        <TouchableOpacity
          style={styles.passengerButton}
          onPress={() => setPassengerCount(passengerCount + 1)}
        >
          <Text style={styles.passengerButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Class dropdown */}
      <View style={styles.classSelectorWrapper}>
        <TouchableOpacity
          style={styles.classSelector}
          onPress={() => setDropdownVisible((prev) => !prev)}
        >
          <Text style={styles.classSelectorText}>{selectedClass}</Text>
          <Text style={styles.classSelectorArrow}>▼</Text>
        </TouchableOpacity>

        {dropdownVisible && (
          <View style={styles.dropdownContainer}>
            <View style={styles.classDropdown}>
              {CLASS_OPTIONS?.map((cls) => (
                <TouchableOpacity
                  key={cls}
                  style={styles.classDropdownItem}
                  onPress={() => {
                    setSelectedClass(cls);
                    setDropdownVisible(false);
                  }}
                >
                  <Text style={styles.classDropdownItemText}>{cls}</Text>
                </TouchableOpacity>

              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default PassengerClassSelector;
