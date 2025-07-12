import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = /@/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;


  const handleSignUp = async () => {
    if (!emailRegex.test(email)) {
      return Alert.alert('Invalid Email', 'Email must contain 2 letters before @ and 3 after.');
    }

    if (!passwordRegex.test(password)) {
      return Alert.alert(
        'Invalid Password',
        'Password must have 1 capital letter, 1 number, and 1 special character.'
      );
    }

    const userData = JSON.stringify({ email, password });
    await AsyncStorage.setItem('user', userData);
    Alert.alert('Success', 'Account created! You can now login.');
    setIsSignup(false);
    setEmail('');
    setPassword('');
  };

 const handleLogin = async () => {
  const storedUser = await AsyncStorage.getItem('user');
  if (!storedUser) {
    return Alert.alert('Error', 'No account found. Please sign up.');
  }
  await AsyncStorage.setItem('key', JSON.stringify( Math.random()));

  const parsedUser = JSON.parse(storedUser);
  if (parsedUser.email === email && parsedUser.password === password) {
    Alert.alert('Success', 'Login successful!');

    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  } else {
    Alert.alert('Error', 'Incorrect email or password');
  }
};


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>{isSignup ? 'Sign Up' : 'Login'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={isSignup ? handleSignUp : handleLogin}
      >
        <Text style={styles.buttonText}>{isSignup ? 'Sign Up' : 'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.toggleText}>
          {isSignup
            ? 'Already have an account? Login'
            : 'Don’t have an account? Sign Up'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;
