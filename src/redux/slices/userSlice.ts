import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import {
  SKY_SCRAPPER_BASE_URL,
  SKY_SCRAPPER_ENDPOINTS,
  getSkyScrapperHeaders,
} from '../../constants/urls';

interface Airport {
  skyId: string;
  entityId: string;
  navigation: {
    localizedName: string;
  };
}

interface TripType {
  tripType: 'oneway' | 'round';
}

interface SearchFlightParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  returnDate?: string;
  cabinClass: string;
  adults: number;
  sortBy: string;
  currency: string;
  market: string;
  countryCode: string;
}

interface SearchIncompleteParams {
  sessionId: string;
  currency?: string;
  market?: string;
  countryCode?: string;
}

interface FlightsData {
  context?: {
    sessionId?: string;
  };
  [key: string]: any;
}

interface UserState {
  tripType: 'oneway' | 'round';
  airports: Airport[];
  airportsLoading: boolean;
  airportsError: string | null;
  flightsData: FlightsData | null;
  searchFlightsData: FlightsData | null;
  searchFlightsSessionId: string | null;
  searchFlightError: string | null;
  searchFlightCallFlag: boolean;
  flightsLoading: boolean;
  flightsError: string | null;
  searchLoading: boolean;
  searchInCompleteData: FlightsData | null;
}

const initialState: UserState = {
  tripType: 'oneway',
  airports: [],
  airportsLoading: false,
  airportsError: null,
  flightsData: null,
  searchFlightsData: null,
  searchFlightsSessionId: null,
  searchFlightError: null,
  searchFlightCallFlag: false,
  flightsLoading: false,
  flightsError: null,
  searchLoading: false,
  searchInCompleteData: null,
};

export const searchAirports = createAsyncThunk<
  Airport[],
  string,
  { rejectValue: string }
>('user/searchAirports', async (query, thunkAPI) => {
  try {
    const response = await axios.get(
      `${SKY_SCRAPPER_BASE_URL}${SKY_SCRAPPER_ENDPOINTS.searchAirport}`,
      {
        params: { query, locale: 'en-US' },
        headers: getSkyScrapperHeaders(),
      },
    );
    return response?.data?.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data as string || err.message);
  }
});

export const searchFlights = createAsyncThunk<
  {
    searchFlightsData: FlightsData;
    searchFlightsSessionId: string | null;
  },
  SearchFlightParams,
  { rejectValue: string }
>('user/searchFlights', async (params, thunkAPI) => {
  try {
    const response = await axios.get(
      `${SKY_SCRAPPER_BASE_URL}${SKY_SCRAPPER_ENDPOINTS.searchFlights}`,
      {
        params,
        headers: getSkyScrapperHeaders(),
      },
    );
    const { data } = response?.data;
    return {
      searchFlightsData: data,
      searchFlightsSessionId: data?.context?.sessionId || null,
    };
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data as string || err.message);
  }
});

export const searchInComplete = createAsyncThunk<
  FlightsData,
  SearchIncompleteParams,
  { rejectValue: string }
>('user/searchInComplete', async ({ sessionId, currency = 'USD', market = 'en-US', countryCode = 'US' }, thunkAPI) => {
  try {
    const response = await axios.get(
      `${SKY_SCRAPPER_BASE_URL}${SKY_SCRAPPER_ENDPOINTS.searchIncomplete}?sessionId=${sessionId}&currency=${currency}&market=${market}&countryCode=${countryCode}`,
      {
        headers: getSkyScrapperHeaders(),
      },
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data as string || err.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTripType: (state, action: PayloadAction<'oneway' | 'round'>) => {
      state.tripType = action.payload;
    },
    clearAirports: state => {
      state.airports = [];
      state.airportsError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchAirports.pending, state => {
        state.airportsLoading = true;
        state.airportsError = null;
      })
      .addCase(searchAirports.fulfilled, (state, action) => {
        state.airportsLoading = false;
        state.airports = action?.payload;
      })
      .addCase(searchAirports.rejected, (state, action) => {
        state.airportsLoading = false;
        state.airportsError = action?.payload || 'Error';
      })
      .addCase(searchFlights.pending, state => {
        state.searchLoading = true;
        state.searchFlightError = null;
        state.searchFlightCallFlag = false;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchFlightsData = action?.payload?.searchFlightsData;
        state.searchFlightsSessionId = action?.payload?.searchFlightsSessionId;
        state.searchFlightCallFlag = true;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchFlightError = action?.payload || 'Error';
        state.searchFlightCallFlag = false;
      })
      .addCase(searchInComplete.pending, state => {
        state.flightsLoading = true;
        state.flightsError = null;
      })
      .addCase(searchInComplete.fulfilled, (state, action) => {
        state.flightsLoading = false;
        state.searchInCompleteData = action?.payload;
      })
      .addCase(searchInComplete.rejected, (state, action) => {
        state.flightsLoading = false;
        state.flightsError = action?.payload || 'Error';
      });
  },
});

export const { setTripType, clearAirports } = userSlice.actions;

export default userSlice.reducer;
