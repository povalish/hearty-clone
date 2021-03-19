import { useRef, useState } from 'react';
import { Animated } from 'react-native';



export const useColorTransition = (startValue: string, endValue: string) => {
  // Default state 0 === from
  const colorTransition = useRef(new Animated.Value(0)).current;

  // Handle current state
  // just for utils syncing
  const [colorState, setColorState] = useState<number>(0);

  // Convert value to string color
  const color = colorTransition.interpolate({
    inputRange: [0, 1],
    outputRange: [startValue, endValue],
  });

  // Start animation to start value
  const setToStartValue = () => {
    // New value for Animated.Value
    const newValue = 0;
    // Start animation
    Animated.timing(colorTransition, {
      toValue: newValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
    // Sync with nornal state :)
    setColorState(newValue);
  };

  // Start animation to end value
  const setToEndValue = () => {
    // New value for Animated.Value
    const newValue = 1;
    // Start animation
    Animated.timing(colorTransition, {
      toValue: newValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
    // Sync with nornal state :)
    setColorState(newValue);
  };

  // Utils function to toggling
  const toggle = () => {
    if (colorState === 0) { setToEndValue(); }
    if (colorState === 1) { setToStartValue(); }
  };


  // Return current color (as string)
  return {
    color,
    toggle,
    setToStartValue,
    setToEndValue,
  };
};
