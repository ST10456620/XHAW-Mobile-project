// App.tsx
import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Animated } from 'react-native';
import StackNavigation from './Navigation/StackNav/Stack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};


export default App;
