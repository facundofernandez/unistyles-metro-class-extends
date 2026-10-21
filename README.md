# Unistyles Metro integration: `class X extends FlatList` in node_modules crashes

Minimal repro for `react-native-unistyles/metro` (3.6.0). A library in `node_modules` that subclasses a
React Native component (`class ExtendedFlatList extends FlatList`, the same pattern as
`react-native-pdf`'s `PdfViewFlatList.js`) crashes at module load, because the resolver swaps its
`react-native` import for Unistyles' `FlatList`, an arrow function component (`createUnistylesElement`)
that can't be used as a constructor.

- Expo SDK 58, React Native 0.88.0, Hermes, New Architecture
- `react-native-unistyles@3.6.0`, `react-native-nitro-modules@0.37.1`
- `vendor/class-extends-flatlist`: stand-in library, installed from a tarball so it is a real copy in `node_modules`

## Run

```bash
npm install
npx expo run:ios
```

Verified on the iOS simulator (iPhone Air, iOS 26.5). The same crash shows up on Android in a bare
React Native 0.87 app with `react-native-pdf`.

**Metro integration (default):** red screen at startup

```
TypeError: Object is not a constructor
  at node_modules/class-extends-flatlist/index.js
    class ExtendedFlatList extends _reactNative.FlatList {
```

(`_reactNative` is `react-native-unistyles/src/components/native/index.ts`.)

With Babel's class transform instead of native classes the same crash reads
`TypeError: Object prototype argument must be an Object or null` (`_inherits` → `Object.create(undefined)`).

**Control, Babel plugin:** the app renders the list with Unistyles styles

```bash
UNISTYLES_BABEL=1 npx expo start --clear
```

`UNISTYLES_BABEL=1` skips `withUnistylesConfig` in `metro.config.js` and adds
`react-native-unistyles/plugin` with `root: 'src'` in `babel.config.js`. The plugin doesn't touch
`node_modules`, so the library keeps React Native's `FlatList`.
