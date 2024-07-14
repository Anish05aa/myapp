import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import GetStartedScreen from './screen/getstart';
import CardScreen from './screen/home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('GetStarted');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onSignup={() => setCurrentScreen('Signup')} onLogin={() => setCurrentScreen('Card')} />;
      case 'Signup':
        return <SignupScreen onLogin={() => setCurrentScreen('Login')} onSignup={() => setCurrentScreen('Card')} />;
      case 'Card':
        return <CardScreen />;
      case 'GetStarted':
      default:
        return (
          <GetStartedScreen
            onLogin={() => setCurrentScreen('Login')}
            onSignup={() => setCurrentScreen('Signup')}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
