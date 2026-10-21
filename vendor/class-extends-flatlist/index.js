'use strict';
// Same pattern as react-native-pdf/PdfViewFlatList.js
import { FlatList } from 'react-native';

export default class ExtendedFlatList extends FlatList {
  scrollToXY = (x, y) => {
    this._listRef._scrollRef.scrollTo({ x, y, animated: false });
  };
}
