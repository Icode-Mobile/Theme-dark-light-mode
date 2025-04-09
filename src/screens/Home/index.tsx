import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/context/themeContext';
import { THEME_COLORS } from '@/utils/theme/colors';

const ButtonStyled = Animated.createAnimatedComponent(TouchableOpacity);

export default function Home() {
  const { toggleTheme, isDark } = useTheme();
  const progress = useSharedValue(isDark ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isDark ? 1 : 0, { duration: 800 });
  }, [isDark]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 0.5, 1],
        [THEME_COLORS.LIGHT.background, '#999', THEME_COLORS.DARK.background]
      ),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        progress.value,
        [0, 1],
        [THEME_COLORS.LIGHT.text, THEME_COLORS.DARK.text]
      ),
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [THEME_COLORS.LIGHT.flashyButton, THEME_COLORS.DARK.flashyButton]
      ),
    };
  });

  const textButtonStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        progress.value,
        [0, 1],
        [
          THEME_COLORS.LIGHT.textFlashyButton,
          THEME_COLORS.DARK.textFlashyButton,
        ]
      ),
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
