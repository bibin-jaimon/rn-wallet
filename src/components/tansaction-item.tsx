import { StyleSheet, Text, View } from 'react-native';
import { Transaction } from '../screens/cards-list/card-list-type';
import { colors } from '../resource';

interface TransactionItemProp {
  data: Transaction;
}
const TransactionItem = (props: TransactionItemProp) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: colors.white }}>{data.note}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: colors.white }}>{data.currency}</Text>
          <Text style={{ color: colors.white }}>{data.amount}</Text>
        </View>
      </View>

      <Text style={{ color: colors.white }}>{data.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 1,
    marginVertical: 1,
    backgroundColor: colors.gray,
  },
});

export { TransactionItem };
