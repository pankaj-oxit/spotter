import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {clearAirports, searchFlights, searchInComplete} from '../../redux/slices/userSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import CityInputDropdown from '../../components/cityInputDropdown/CityInputDropdown';
import TripTypeSelector from '../../components/tripTypeSelector/TripTypeSelector';
import PassengerClassSelector from '../../components/passengerClassSelector/PassengerClassSelector';
import CalendarButton from '../../components/calenderButton/CalendarButton';
import {styles} from './styles';
import {TRIP_TYPES} from '../../constants/tripTypes';
import CalendarModal from '../../components/calenderModal/CalenderModal';
import LogoutButton from '../../components/logoutButton/Logout';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DashboardProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

const Dashboard = ({navigation}: DashboardProps) => {
  const dispatch: any = useDispatch();
  const calledRef = useRef(false);
  const {
    searchFlightsSessionId,
    tripType,
    searchLoading,
    searchInCompleteData,
    flightsLoading,
  } = useSelector((state: any) => state.user);

  const today = new Date();

  const [tripData, setTripData] = useState({
    from: {value: '', skyId: '', entityId: ''},
    to: {value: '', skyId: '', entityId: ''},
    date: today, // for oneway
    startDate: today, // for round
    endDate: today, // for round
  });

  const [calendarModal, setCalendarModal] = useState<{
    visible: boolean;
    type: 'oneway' | 'round';
  }>({visible: false, type: TRIP_TYPES.ONEWAY});

  const [passengerCount, setPassengerCount] = useState(1);
  const [selectedClass, setSelectedClass] = useState('Economy');

  // Trigger searchIncomplete
  useEffect(() => {
    if (!calledRef.current && searchFlightsSessionId !== null) {
      dispatch(
        searchInComplete({
          sessionId: searchFlightsSessionId,
        } as any),
      );
      calledRef.current = true;
    }

    if (searchInCompleteData !== null) {
      navigation.navigate('AllFlightDetail', {
        AllFlightData: searchInCompleteData,
      } as any);
    }
  }, [searchFlightsSessionId, searchInCompleteData, dispatch, navigation]);

  // City input change
  const handleCityChange = (field: 'from' | 'to', value: any) => {
    setTripData(prev => ({
      ...prev,
      [field]: {
        value: value.localizedName || value.value || '',
        skyId: value.skyId || '',
        entityId: value.entityId || '',
      },
    }));
  };

  // Date change for oneway or round
  const handleDateChange = (
    date: Date,
    type: 'oneway' | 'round',
    _unused?: any,
    rangeType?: 'start' | 'end',
  ) => {
    if (type === TRIP_TYPES.ONEWAY) {
      setTripData(prev => ({...prev, date}));
    } else {
      if (rangeType === 'start') {
        setTripData(prev => ({...prev, startDate: date}));
      } else if (rangeType === 'end') {
        setTripData(prev => ({...prev, endDate: date}));
      }
    }
    setCalendarModal(prev => ({...prev, visible: false}));
  };

  // Handle search API
  const handleSearch = () => {
    const searchParams = {
      originSkyId: tripData.from.skyId,
      destinationSkyId: tripData.to.skyId,
      originEntityId: tripData.from.entityId,
      destinationEntityId: tripData.to.entityId,
      date: (tripType === TRIP_TYPES.ROUND ? tripData.startDate : tripData.date)
        .toISOString()
        .slice(0, 10),
      ...(tripType === TRIP_TYPES.ROUND && {
        returnDate: tripData.endDate.toISOString().slice(0, 10),
      }),
      cabinClass: selectedClass.toLowerCase(),
      adults: passengerCount,
      sortBy: 'best',
      currency: 'USD',
      market: 'en-US',
      countryCode: 'US',
    };

    dispatch(searchFlights(searchParams));
  };

  const handleLogout = async () => {
  await AsyncStorage.removeItem('key');
  dispatch(clearAirports())
  navigation.reset({
    index: 0,
    routes: [{ name: 'Login' }],
  });
};

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
      <LogoutButton onPress={() => handleLogout()}/>
        <TripTypeSelector />

        <View style={styles.cardWrapper}>
          <CityInputDropdown
            value={tripData.from.value}
            onChangeText={text => handleCityChange('from', {value: text})}
            onSelect={airport => handleCityChange('from', airport)}
            placeholder="Where from?"
          />

          <CityInputDropdown
            value={tripData.to.value}
            onChangeText={text => handleCityChange('to', {value: text})}
            onSelect={airport => handleCityChange('to', airport)}
            placeholder="Where to?"
          />

          <CalendarButton
            tripType={tripType}
            singleTripDate={tripData.date}
            roundTripStartDate={tripData.startDate}
            roundTripEndDate={tripData.endDate}
            onPress={() =>
              setCalendarModal({
                visible: true,
                type: tripType as 'oneway' | 'round',
              })
            }
          />

          <PassengerClassSelector
            passengerCount={passengerCount}
            setPassengerCount={setPassengerCount}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSearch}
            disabled={flightsLoading}>
            {searchLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.searchButtonText}>Search</Text>
            )}
          </TouchableOpacity>
        </View>

        <CalendarModal
          visible={calendarModal.visible}
          onClose={() => setCalendarModal({...calendarModal, visible: false})}
          type={tripType as 'oneway' | 'round'}
          today={today}
          oneWayDate={tripData.date}
          roundStartDate={tripData.startDate}
          roundEndDate={tripData.endDate}
          onDateChange={handleDateChange}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
