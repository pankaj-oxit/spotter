import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import HeaderBar from '../../components/headerBar/HeaderBar';
import FilterBar from '../../components/filterBar/FilterBar';
import IconRow from '../../components/iconRow/IconRow';
import FlightCard from '../../components/flightCard/FlightCard';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import LogoutButton from '../../components/logoutButton/Logout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearAirports } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const mapFlightData = (legs: any[] = []) => {
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  return legs.map((leg: any) => {
    const segment = leg.segments[0];
    const lastSegment = leg.segments[leg.segments.length - 1];
    const airlineName = leg.carriers.marketing.map((c: any) => c.name).join(', ');
    const airlineLogo = { uri: leg.carriers.marketing[0].logoUrl };
    const departureTime = formatTime(leg.departure);
    const arrivalTime = formatTime(leg.arrival);
    const date = formatDate(leg.departure);
    const hours = Math.floor(leg.durationInMinutes / 60);
    const minutes = leg.durationInMinutes % 60;
    const duration = `${hours}h ${minutes}m`;
    return {
      airlineLogo,
      airlineName,
      departureTime,
      arrivalTime,
      departureCity: segment.origin.displayCode,
      arrivalCity: lastSegment.destination.displayCode,
      date,
      duration,
      isDirect: leg.stopCount === 0,
      price: leg.priceFormatted || '',
      tags: leg.tags || [],
      note: undefined
    };
  });
};


const sortOptions = [
  { label: 'Best', value: 'best' },
  { label: 'Cheapest', value: 'cheapest' },
  { label: 'Fastest', value: 'fastest' },
];

const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^\d]/g, ''), 10);
const parseDuration = (durationStr: string) => {
  const match = durationStr.match(/(\d+)h\s*(\d+)m/);
  if (!match) return 0;
  return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
};


type Props = NativeStackScreenProps<RootStackParamList, 'AllFlightDetail'>;

const AllFlightDetails: React.FC<Props> = ({ route ,navigation }) => {
  const allFlightData = route?.params?.AllFlightData || []
  const [sortBy, setSortBy] = useState('best');
  const [flights, setFlights] = useState<any[]>([]);
  const dispatch: any = useDispatch();

  let headerData = {
    from: '',
    to: '',
    fromCity: '',
    toCity: '',
    date: '',
    passenger: '1 adult',
    travelClass: 'Economy',
  };
  const itineraries = allFlightData.data?.itineraries || [];
  if (itineraries.length > 0 && itineraries[0].legs && itineraries[0].legs.length > 0) {
    const firstLeg = itineraries[0].legs[0];
    headerData.from = firstLeg.origin.displayCode;
    headerData.to = firstLeg.destination.displayCode;
    headerData.fromCity = firstLeg.origin.city || firstLeg.origin.name;
    headerData.toCity = firstLeg.destination.city || firstLeg.destination.name;
    // Use departure date of first leg
    const depDate = new Date(firstLeg.departure);
    const day = depDate.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[depDate.getMonth()];
    headerData.date = `${day} ${month}`;
  }

  useEffect(() => {
    const itineraries = allFlightData.data?.itineraries || [];
    let allLegs: any[] = [];
    itineraries.forEach(itin => {
      (itin.legs || []).forEach(leg => {
        (leg as any).priceFormatted = itin.price?.formatted?.replace('$', '₹ ');
        (leg as any).tags = itin.tags || [];
        allLegs.push(leg);
      });
    });
    const processedFlights = mapFlightData(allLegs);
    setFlights(processedFlights);
  }, []);

  const getSortedFlights = () => {
    let sorted = [...flights];
    if (sortBy === 'cheapest') {
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'fastest') {
      sorted.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
    } else {
      sorted.sort((a, b) => {
        const aBest = a.tags.includes('Best') ? -1 : 0;
        const bBest = b.tags.includes('Best') ? -1 : 0;
        return aBest - bBest;
      });
    }
    return sorted;
  };

  const handleSort = (value: string) => {
    setSortBy(value);
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
    <ScrollView style={styles.mainContainer}>
      <LogoutButton onPress={()=>handleLogout()}/>
      <HeaderBar
        from={headerData.from}
        to={headerData.to}
        fromCity={headerData.fromCity}
        toCity={headerData.toCity}
        date={headerData.date}
        passenger={headerData.passenger}
        travelClass={headerData.travelClass}
      />
      <FilterBar
        filters={sortOptions.map(opt => ({
          label: `Sort by: ${opt.label}`,
          onPress: () => handleSort(opt.value),
        }))}
        selectedIndex={sortOptions.findIndex(opt => opt.value === sortBy)}
      />
      <View style={{ paddingHorizontal: 12 }}>
        <Text style={{ color: '#444', marginBottom: 8 }}>73 flights found</Text>
        {getSortedFlights().map((flight, idx) => (
          <FlightCard
            key={idx}
            {...flight}
            icons={<IconRow />}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default AllFlightDetails; 