import { FlatList } from 'react-native';

export default class ExtendedFlatList<T> extends FlatList<T> {
  scrollToXY: (x: number, y: number) => void;
}
