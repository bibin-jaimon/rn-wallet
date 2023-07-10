import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { strings } from '../resource';

interface BackButtonProp {
  title?: string;
}

const BackButton = (props: BackButtonProp) => {
  const navigation = useNavigation();
  const { title = strings.done } = props;
  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
});

export { BackButton };
