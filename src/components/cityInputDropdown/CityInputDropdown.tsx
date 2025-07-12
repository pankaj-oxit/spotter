import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchAirports, clearAirports } from '../../redux/slices/userSlice';
import useDebounce from '../../hooks/useDebounce';
import { styles } from './styles';

interface CityInputDropdownProps {
  value: string;
  onChangeText: (text: string) => void;
  onSelect: (city: any) => void;
  placeholder?: string;
}

const CityInputDropdown: React.FC<CityInputDropdownProps> = ({
  value,
  onChangeText,
  onSelect,
  placeholder,
}) => {
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(value, 500);
  const { airports, airportsLoading } = useSelector((state: any) => state.user);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Handle API calls after debounce
  useEffect(() => {
    if (debouncedValue && debouncedValue.length > 1) {
      dispatch(searchAirports(debouncedValue));
      setDropdownVisible(true);
    } else {
      dispatch(clearAirports());
      setDropdownVisible(false);
    }
  }, [debouncedValue, dispatch]);

  return (
    <View style={{ position: 'relative', marginVertical:5 }}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        onFocus={() => {
          if (value.length > 1) setDropdownVisible(true);
        }}
        onBlur={() => {
          setTimeout(() => setDropdownVisible(false), 150);
        }}
        autoCorrect={false}
        autoCapitalize="words"
      />
   {dropdownVisible && (
  <View style={styles.dropdown}>
    {airportsLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#555" />
        <Text style={styles.loadingText}>Searching...</Text>
      </View>
    ) : airports?.length > 0 ? (
      airports.map((item: any) => (
        <TouchableOpacity
          key={item.skyId}
          style={styles.dropdownItem}
          onPress={() => {
            onSelect({
              localizedName: item.navigation.localizedName,
              skyId: item.skyId,
              entityId: item.entityId,
            });
            setDropdownVisible(false);
          }}>
          <Text>{item.skyId}</Text>
          <Text style={styles.dropdownItemText}>
            {item.navigation.localizedName}
          </Text>
        </TouchableOpacity>
      ))
    ) : (
      <Text style={styles.noResultText}>No results found</Text>
    )}
  </View>
)}

    </View>
  );
};

export default CityInputDropdown;
