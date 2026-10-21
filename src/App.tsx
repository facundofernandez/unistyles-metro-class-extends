import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
// A library in node_modules that does `class X extends FlatList`
import ExtendedFlatList from 'class-extends-flatlist';

const DATA = Array.from({ length: 20 }, (_, index) => `Row ${index + 1}`);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unistyles Metro + class extends FlatList</Text>
      <ExtendedFlatList
        data={DATA}
        keyExtractor={(item: string) => item}
        renderItem={({ item }: { item: string }) => (
          <Text style={styles.row}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top + 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: theme.colors.accent,
  },
  row: {
    paddingVertical: 8,
    color: theme.colors.text,
  },
}));
