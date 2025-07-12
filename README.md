# Spotter Flight Booking App

A professional React Native flight booking app with:
- Modern, beautiful UI
- Centralized color palette in `src/utlils/colors.ts`
- Login/SignUp with strong validation and AsyncStorage
- Flight search and booking flows

## Features
- **Sign Up & Login**: Secure, validated with AsyncStorage
  - Email:  `@` is required
  - Password: At least 1 capital letter, 1 special character, 1 number, min 6 chars
- **Flight Search**: Oneway and round trip
- **Centralized Colors**: All app colors are defined in `src/utlils/colors.ts` for easy theming
- **Reusable Styles**: Consistent, scalable design

## Setup
1. Clone the repo https://github.com/pankaj-oxit/spotter.git
2. Run `npm install` or `yarn install`
3. Install pods for iOS: `cd ios && pod install && cd ..`
4. Start Metro: `npx react-native start`
5. Run on device:
   - Android: `npx react-native run-android`
   - iOS: `npx react-native run-ios`
6. Api is required to add if exceed the limit in `constants/urls`
  
## Color System
- All colors are defined in `src/utlils/colors.ts`:
  ```js
  export const colors = {
    primary: '#0071c2',
    background: '#fff',
    textColor: '#222',
    error: 'red',
    border: '#ccc',
    quinary: '#f7f7fa',
    link: '#0071c2',
    black: '#000',
  };
  ```
- To use a color: `import { colors } from '../../utlils/colors';`
- To add a new color, add it to the `colors` object and use it in your styles.

## Login/SignUp Usage
- On first launch, tap "Sign Up" and create an account.
- Email and password are validated as above.
- Credentials are stored securely with AsyncStorage.
- After sign up, log in with the same credentials.

## Validation Rules
- **Email**: Must have at least 2 characters before `@` and at least 3 after (e.g. `ab@xyz.com` is valid)
- **Password**: Must have at least 1 capital letter, 1 special character, 1 number, and be at least 6 characters long

## Professional UI
- All screens use a modern, clean design
- Responsive and accessible
- Consistent color and spacing

---

**Enjoy your flight booking experience!**
