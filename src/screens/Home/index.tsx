import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/context/themeContext';

const ButtonStyled = Animated.createAnimatedComponent(TouchableOpacity);

export default function Home() {
  const { toggleTheme, isDark, theme } = useTheme();
  const progress = useSharedValue(isDark ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isDark ? 1 : 0, { duration: 800 });
  }, [isDark]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        ['#f0f0f0', '#999', '#121212']
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(progress.value, [0, 1], ['#000', '#fff']),
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: progress.value == 1 ? '#43D9AE' : '#011623',
    };
  });

  const textButtonStyle = useAnimatedStyle(() => {
    return {
      color: progress.value == 1 ? '#000' : '#fff',
    };
  });

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        animatedStyle,
      ]}
    >
      <Animated.Text
        style={[
          {
            fontWeight: 'bold',
            fontSize: 16,
            color: theme.text,
          },
          textStyle,
        ]}
      >
        Bem Vindo ao Início
      </Animated.Text>
      <ButtonStyled
        style={[
          {
            padding: 12,
            backgroundColor: theme.flashyButton,
            borderRadius: 8,
          },
          buttonStyle,
        ]}
        activeOpacity={0.7}
        onPress={toggleTheme}
      >
        <Animated.Text style={textButtonStyle}>
          Trocar para tema {isDark ? 'claro' : 'escuro'}
        </Animated.Text>
      </ButtonStyled>
    </Animated.View>
  );
}
