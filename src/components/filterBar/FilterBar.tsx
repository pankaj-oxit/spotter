import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { styles } from './styles';

interface FilterBarProps {
  filters: { label: string; onPress: () => void }[];
  selectedIndex?: number;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, selectedIndex }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((filter, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.button, selectedIndex === idx && styles.buttonSelected]}
            onPress={filter.onPress}
          >
            <Text style={[styles.buttonText, selectedIndex === idx && styles.buttonTextSelected]}>{filter.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterBar; 