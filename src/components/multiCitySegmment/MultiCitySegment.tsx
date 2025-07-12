import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CityInputDropdown from '../cityInputDropdown/CityInputDropdown';
import { format } from 'date-fns';
import { styles } from './styles';

interface Props {
  from: string;
  to: string;
  date: Date | null;
  onChange: (field: 'from' | 'to', value: string) => void;
  onDatePress: () => void;
  cityList: string[];
}

const MultiCitySegment: React.FC<Props> = ({ from, to, date, onChange, onDatePress, cityList }) => (
  <View style={styles.segment}>
    <View style={styles.row}>
      <Text style={styles.icon}>✈️</Text>
      <View style={{ flex: 1 }}>
        <CityInputDropdown
          value={from}
          onChangeText={(v) => onChange('from', v)}
          onSelect={(v) => onChange('from', v)}
          placeholder="Where from?"
          cityList={cityList}
        />
      </View>
    </View>
    <View style={styles.row}>
      <Text style={styles.icon}>✈️</Text>
      <View style={{ flex: 1 }}>
        <CityInputDropdown
          value={to}
          onChangeText={(v) => onChange('to', v)}
          onSelect={(v) => onChange('to', v)}
          placeholder="Where to?"
          cityList={cityList}
        />
      </View>
    </View>
    <TouchableOpacity style={styles.dateRow} onPress={onDatePress}>
      <Text style={styles.dateIcon}>📅</Text>
      <Text style={styles.dateText}>{date ? format(date, 'EEE, d MMM') : format(new Date(), 'EEE, d MMM')}</Text>
    </TouchableOpacity>
  </View>
);


export default MultiCitySegment; 