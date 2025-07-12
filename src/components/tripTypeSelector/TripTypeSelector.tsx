import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setTripType} from '../../redux/slices/userSlice';
import {styles} from './styles';

const tripTypes = [
  {label: 'Round trip', value: 'round'},
  {label: 'One way', value: 'oneway'},
];

const TripTypeSelector: React.FC = () => {
  const tripType = useSelector((state: any) => state.user.tripType);
  const dispatch = useDispatch();

  return (
    <View style={styles.tripTypeRow}>
      {tripTypes.map(type => {
        return (
          <View key={type.value} style={styles.tripTypeItem}>
            <TouchableOpacity
              onPress={() => dispatch(setTripType(type.value))}
              style={styles.radioCircle}>
              {tripType === type.value && <Text style={styles.radioDot} />}
            </TouchableOpacity>
            <Text style={styles.tripTypeLabel}>{type.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default TripTypeSelector;
