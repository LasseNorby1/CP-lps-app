import {Dimensions, Platform} from 'react-native';
import {
  ICommonTheme,
  ThemeAssets,
  ThemeFonts,
  ThemeIcons,
  ThemeLineHeights,
  ThemeWeights,
} from './types';

const {width, height} = Dimensions.get('window');

// Naming source: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const WEIGHTS: ThemeWeights = {
  text: 'normal',
  h1: Platform.OS === 'ios' ? '500' : 'normal',
  h2: Platform.OS === 'ios' ? '500' : 'normal',
  h3: Platform.OS === 'ios' ? '500' : 'normal',
  h4: Platform.OS === 'ios' ? '500' : 'normal',
  h5: Platform.OS === 'ios' ? '500' : 'normal',
  p: 'normal',

  thin: Platform.OS === 'ios' ? '100' : 'normal',
  extralight: Platform.OS === 'ios' ? '200' : 'normal',
  light: Platform.OS === 'ios' ? '300' : 'normal',
  normal: Platform.OS === 'ios' ? '400' : 'normal',
  medium: Platform.OS === 'ios' ? '500' : 'normal',
  semibold: Platform.OS === 'ios' ? '600' : 'normal',
  bold: Platform.OS === 'ios' ? '700' : 'normal',
  extrabold: Platform.OS === 'ios' ? '800' : 'normal',
  black: Platform.OS === 'ios' ? '900' : 'normal',
};

export const ICONS: ThemeIcons = {
  alternator: require('../assets/icons/2x/alternator.png'),
  grid: require('../assets/icons/2x/grid.png'),
  solar: require('../assets/icons/2x/solar.png'),

  menu: require('../assets/icons/2x/menu.png'),
  home: require('../assets/icons/2x/home.png'),
  status: require('../assets/icons/2x/status.png'),
  history: require('../assets/icons/2x/history.png'),
  profile: require('../assets/icons/2x/profile.png'),
  register: require('../assets/icons/2x/register.png'),
  settings: require('../assets/icons/2x/settings.png'),
  articles: require('../assets/icons/2x/articles.png'),
  notifications: require('../assets/icons/2x/notifications.png'),
  batteryCharging: require('../assets/icons/2x/battery-charging.png'),


  apple: require('../assets/icons/apple.png'),
  google: require('../assets/icons/google.png'),
  facebook: require('../assets/icons/facebook.png'),
  arrow: require('../assets/icons/arrow.png'),
  basket: require('../assets/icons/basket.png'),
  bell: require('../assets/icons/bell.png'),
  calendar: require('../assets/icons/calendar.png'),
  chat: require('../assets/icons/chat.png'),
  check: require('../assets/icons/check.png'),
  clock: require('../assets/icons/clock.png'),
  close: require('../assets/icons/close.png'),
  components: require('../assets/icons/components.png'),
  document: require('../assets/icons/document.png'),
  documentation: require('../assets/icons/documentation.png'),
  extras: require('../assets/icons/extras.png'),
  flight: require('../assets/icons/flight.png'),
  hotel: require('../assets/icons/hotel.png'),
  image: require('../assets/icons/image.png'),
  location: require('../assets/icons/location.png'),
  more: require('../assets/icons/more.png'),
  notification: require('../assets/icons/notification.png'),
  office: require('../assets/icons/office.png'),
  payment: require('../assets/icons/payment.png'),
  rental: require('../assets/icons/rental.png'),
  search: require('../assets/icons/search.png'),
  star: require('../assets/icons/star.png'),
  train: require('../assets/icons/train.png'),
  users: require('../assets/icons/users.png'),
  warning: require('../assets/icons/warning.png'),
};

export const ASSETS: ThemeAssets = {
  // fonts
  GraphikLight: require('../assets/fonts/Graphik-Light.ttf'),
  GraphikRegular: require('../assets/fonts/Graphik-Regular.ttf'),
  GraphikSemiBold: require('../assets/fonts/Graphik-Semibold.ttf'),
  GraphikExtraBold: require('../assets/fonts/Graphik-Black.ttf'),
  GraphikBold: require('../assets/fonts/Graphik-Bold.ttf'),

  // backgrounds/logo
  // logo: require('../assets/images/logo.png'),
  logo: require('../assets/images/logo.svg'),
  header: require('../assets/images/header.png'),
  background: require('../assets/images/background.png'),

  LPS: require('../assets/images/LPS2-Transparent.png'),
  LPSNew: require('../assets/images/LPS2-new3.jpg'),

  // cards
  card1: require('../assets/images/card1.png'),
  card2: require('../assets/images/card2.png'),
  card3: require('../assets/images/card3.png'),
  card4: require('../assets/images/card4.png'),
  card5: require('../assets/images/card5.png'),

  // gallery photos
  photo1: require('../assets/images/photo1.png'),
  photo2: require('../assets/images/photo2.png'),
  photo3: require('../assets/images/photo3.png'),
  photo4: require('../assets/images/photo4.png'),
  photo5: require('../assets/images/photo5.png'),
  photo6: require('../assets/images/photo6.png'),
  carousel1: require('../assets/images/carousel1.png'),

  // avatars
  avatar1: require('../assets/images/avatar1.png'),
  avatar2: require('../assets/images/avatar2.png'),

  // cars
  x5: require('../assets/images/x5.png'),
  gle: require('../assets/images/gle.png'),
  tesla: require('../assets/images/tesla.png'),
};

export const FONTS: ThemeFonts = {
  // based on font size
  text: 'Graphik-Regular',
  h1: 'Graphik-Bold',
  h2: 'Graphik-Bold',
  h3: 'Graphik-Bold',
  h4: 'Graphik-Bold',
  h5: 'Graphik-SemiBold',
  p: 'Graphik-Regular',

  // based on fontWeight
  thin: 'Graphik-Light',
  extralight: 'Graphik-Light',
  light: 'Graphik-Light',
  normal: 'Graphik-Regular',
  medium: 'Graphik-SemiBold',
  semibold: 'Graphik-SemiBold',
  bold: 'Graphik-Bold',
  extrabold: 'Graphik-ExtraBold',
  black: 'Graphik-ExtraBold',
};

export const LINE_HEIGHTS: ThemeLineHeights = {
  // font lineHeight
  text: 22,
  h1: 60,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 22,
};

export const THEME: ICommonTheme = {
  icons: ICONS,
  assets: {...ICONS, ...ASSETS},
  fonts: FONTS,
  weights: WEIGHTS,
  lines: LINE_HEIGHTS,
  sizes: {width, height},
};
