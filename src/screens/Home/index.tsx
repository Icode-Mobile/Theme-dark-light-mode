import { Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        Bem Vindo ao Início
      </Text>
      <TouchableOpacity
        style={{
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#000',
        }}
        activeOpacity={0.7}
        onPress={() => {}}
      >
        <Text
          style={{
            color: '#fff',
          }}
        >
          Trocar para tema escuro
        </Text>
      </TouchableOpacity>
    </View>
  );
}
