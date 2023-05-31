import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Linking, StyleSheet} from 'react-native';
import Svg, { Path } from "react-native-svg";

import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';
import {Block, Text, Switch, Button, Image} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const {colors} = useTheme();
  const isDrawerOpen = useIsDrawerOpen();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: colors.card,
          borderWidth: isDrawerOpen ? 1 : 0,
        },
      ])}>
      {/*  */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  const {navigation} = props;
  const {isDark, handleIsDark} = useData();
  const {t} = useTranslation();
  const [active, setActive] = useState('Home');
  const {assets, colors, gradients, sizes} = useTheme();
  const labelColor = isDark ? colors.white : colors.text;

  const handleNavigation = useCallback(
    (to) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  );

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  // screen list for Drawer menu
  const screens = [
    // {name: t('screens.home'), to: 'Home', icon: assets.home},
    {name: t('screens.status'), to: 'Status', icon: assets.status},
    {name: t('screens.history'), to: 'History', icon: assets.history},
    // {name: t('screens.components'), to: 'Components', icon: assets.components},
    {name: t('screens.articles'), to: 'Articles', icon: assets.articles},
    // {name: t('screens.rental'), to: 'Rentals', icon: assets.rental},
    {name: t('screens.profile'), to: 'Profile', icon: assets.profile},
    
    {name: t('screens.register'), to: 'Register', icon: assets.register},

    {name: t('screens.settings'), to: 'Settings', icon: assets.settings},
    // {name: t('screens.notifications'), to: 'Notifications', icon: assets.settings},
    // {name: t('screens.extra'), to: 'Extra', icon: assets.extras},
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{paddingBottom: sizes.padding}}>
      <Block paddingHorizontal={sizes.padding}>
        <Block flex={0} row align="center" marginBottom={sizes.l}>
          

        <Svg 
        viewBox="0 0 714 201.39" 
        fill={colors[isDark ? 'white' : 'primary']}
        width={150}
        height={40}>
          <Path d="M162.84,93.98l18.18-52.15c0.24-0.72,0.24-1.68,0.24-2.4c0-3.59-4.54-3.82-8.85-3.82h-31.34l-1.2,2.63
      c2.63,0.48,5.26,1.67,5.26,3.35c0,0.96-0.24,1.68-0.48,2.4l-0.71,2.63l-19.62,56.93c-0.48,0.95-0.72,1.67-0.72,2.87
      c0,2.63,5.02,3.11,8.13,3.11h50.95c7.42,0,9.57-0.95,11.01-5.98l9.98-14.6l0,0c-3.83,4.78-15.25,5.04-21.23,5.04H162.84
      L162.84,93.98z"></Path>
          <Path d="M254.04,104.6c0.24,4.07,1.91,5.03,7.65,5.03h32.53l0.96-2.87c-5.5-0.72-6.7-2.87-6.94-6.45l-8.85-58.37
      c-0.24-5.02-1.2-6.22-9.33-6.22h-43.53l-1.2,2.87c2.63,0.24,4.79,0.96,4.79,2.87c0,1.2-1.2,2.39-2.16,3.59l-44.74,57.89
      c-1.43,1.44-2.63,2.87-1.91,4.55c0.48,1.67,2.87,2.16,5.27,2.16h30.14l1.2-2.87c-2.63-0.24-5.02-1.19-5.02-3.11
      c0-1.44,0.96-2.39,1.68-3.59l32.29-47.6l7.42,51.91"></Path>
          <Path d="M349.64,80.82l39.48-40.67c0.47-0.48,0.95-0.96,1.19-1.68c1.2-2.39-3.11-2.87-5.75-2.87h-30.38l-0.96,2.87
      c1.44,0,3.11,0.24,3.82,1.44c0.72,1.44-1.19,3.11-2.15,4.31L338.4,62.4l-8.13-22.49c-1.2-3.35-2.87-4.3-8.14-4.3H290.8l-0.96,2.87
      c6.46,0.72,8.37,3.11,10.04,7.18l14.36,35.17l-7.41,21.52c-0.48,1.2-0.72,2.15-0.96,3.35c-0.72,3.11,4.06,3.83,7.66,3.83h32.77
      l0.96-2.87c-2.39-0.48-5.02-1.44-5.02-3.35c0-0.72,0.24-1.44,0.48-2.4l0.71-2.39L349.64,80.82L349.64,80.82z"></Path>
          <Path d="M450.13,50.44h18.42c7.18,0,8.14-1.68,9.58-5.74l4.54-12.44h-5.02c-2.15,2.87-4.06,3.59-8.85,3.59h-63.4
      c-7.65,0-9.8,0.72-11.48,5.74l-4.55,12.68l1.43,0.48c5.74-4.07,8.62-4.3,14.12-4.3h9.33l-18.18,52.39
      c-0.24,0.96-0.47,1.91-0.71,2.87c-0.48,2.87,3.58,4.06,7.17,4.06h33.97l1.19-2.87c-2.87-0.24-5.5-1.19-5.5-3.1
      c0-0.96,0-1.68,0.25-2.63l0.96-2.39L450.13,50.44L450.13,50.44z"></Path>
          <Path d="M571.94,55.46c0-9.09-3.11-16.51-17.94-19.38c-7.17-1.44-15.07-0.99-22.72-0.99c-14.59,0-30.86,0.04-41.86,7.45
      c-10.77,7.18-16.5,20.57-19.85,30.38c-1.92,5.74-4.07,12.2-4.07,18.18c0,17.22,17.69,18.42,39.47,18.42
      c13.63,0,29.42,0.72,40.66-5.27c11.96-6.22,17.46-18.9,21.05-28.46C568.83,70.29,571.94,61.2,571.94,55.46 M535.82,57.37
      c0,3.83-1.44,7.42-2.64,10.76c-2.63,7.42-5.02,14.83-10.05,21.53c-2.39,3.11-6.45,5.5-11.96,5.5c-6.7,0-9.56-2.87-9.56-6.94
      c0-2.39,0.48-4.55,1.19-6.94c1.67-5.74,3.83-11.24,6.47-16.75c2.63-5.74,6.22-14.83,17.69-14.35
      C533.43,50.44,535.82,53.54,535.82,57.37"></Path>
          <Path d="M657.62,109.52l23.69-67.94c0.48-0.95,0.72-1.67,0.72-2.39c0.24-3.11-4.55-3.59-7.89-3.59h-27.28l-0.95,2.87
      c2.64,0.48,5.26,1.19,5.26,3.35c0,1.43-0.47,3.11-1.19,4.78l-7.66,21.53l-16.03-28.94c-1.68-2.88-3.11-3.59-7.66-3.59h-34.21
      l-0.94,2.87c2.38,0.48,5.02,1.44,5.02,3.35c0,1.43-0.72,3.11-1.43,4.78l-19.15,55.26c-0.47,1.19-0.95,2.39-1.19,3.59
      c-0.72,3.34,4.54,4.06,8.14,4.06h26.79l0.95-2.87c-2.39-0.48-5.02-1.44-5.02-3.35c0-0.72,0.24-1.44,0.47-2.4l0.72-2.39l9.09-26.32
      L627,105.93c1.67,3.35,3.59,3.59,8.61,3.59H657.62L657.62,109.52z"></Path>
          <Path d="M124.61,35.09H75.31c-16.7-0.24-23.04,0.3-31.7,12.22c-4.22,6.32-9.77,14.64-12.21,20.96
      c-3.78,8.85-8.55,17.88-8.55,27.09c0,4.33,3.77,9.21,10.21,11.74c7.1,2.71,17.64,2.71,26.08,2.89l15.98,0.18
      c8.66,0,29.97,0.36,36.19-0.36l6.42-16.61c-27.3,0.36-47.38,0.18-48.71-4.69c-0.66-1.81-0.22-3.79,0.45-5.6
      c1.32-4.34,2.49-6.36,4.27-10.34c2-4.33,2.39-4.61,5.05-8.59c4.88-7.58,11.66-7.31,25.42-7.31h12.87c8.44,0,11.32-1.54,13.09-6.06
      l6.22-15.53H124.61z"></Path>
          
              <Path d="M337.41,164.21c-5.56,3.59-14.85,3.09-20.18,3.09h-16.86l-3.96,10.08h-13.37l16.22-41.27h30.89
      c2.17,0,4.28,0,6.43,0.06c4.19,0.06,9.03,0.5,11.02,3.46c1.91,2.85-0.42,8.79-1.91,12.56C344.12,156.17,341.84,161.3,337.41,164.21
      z M328.49,146.51c-1.05,0-2.15-0.06-3.2-0.06h-16.73l-4.13,10.52h19.89c5.07,0,6.4-0.87,8.27-5.63
      C334.36,146.82,332.72,146.64,328.49,146.51z"></Path>
              <Path d="M412.09,164.02c-1.71,3.84-3.97,8.6-8.53,11.14c-2.35,1.3-4.75,1.86-7.11,2.17
      c-4.66,0.62-9.09,0.68-13.57,0.68c-5.53,0-11.09,0.06-16.57-0.06c-4.59-0.06-11.61-0.12-14.38-2.78c-2.58-2.47-1.08-7.3,0.23-11.14
      c0.82-2.41,1.7-4.83,2.65-7.24c0.95-2.41,1.96-4.83,3.04-7.24c1.71-3.84,4.04-8.6,8.53-11.14c2.29-1.3,4.77-1.92,7.13-2.23
      c4.46-0.62,8.83-0.68,13.11-0.68c5.73,0,11.39,0,17.07,0.12c4.59,0.06,11.54,0.12,14.32,2.78c2.58,2.47,1.08,7.3-0.23,11.14
      c-0.82,2.41-1.7,4.83-2.65,7.24C414.18,159.2,413.24,161.61,412.09,164.02z M403.84,149.67c0.08-2.23-1.15-2.78-3.33-3.09
      c-2.12-0.31-4.29-0.31-6.53-0.31h-11.13c-10.14,0-11.13,1.67-14.63,10.58l-0.95,2.41c-0.83,2.1-1.95,5.14-0.6,6.56
      c1.39,1.48,7.69,1.55,10.26,1.55c3.42,0,6.87-0.06,10.32-0.12c2.44,0,6.45,0,8.99-1.42c2.45-1.36,3.78-4.58,4.58-6.62
      C401.86,156.54,403.77,152.02,403.84,149.67z"></Path>
              <Path d="M491.19,177.39h-20.61l3.07-30.25l-20.59,30.25h-20.74l-0.31-41.27h13.63l-0.35,30.87h2.44l22.08-30.87h16.14
      l-2.13,30.87h2.5l23.99-30.87h14.16L491.19,177.39z"></Path>
              <Path d="M518.12,177.39l16.22-41.27h48.6l-3.82,9.71h-35.43l-2.36,6h33.65l-3.55,9.03h-33.65l-2.6,6.62h35.69
      l-3.89,9.9H518.12z"></Path>
              <Path d="M641.41,158.08c-2.37,2.35-5.18,2.97-8.03,3.34c6.55,0.43,6.32,3.53,4.08,9.22l-2.65,6.74h-13.17
      c0.37-0.93,0.71-1.79,1.07-2.72c0.61-1.55,1.26-3.22,1.48-4.76c0.44-2.78-1.47-2.97-4.1-2.97h-22l-4.11,10.46h-13.37l16.22-41.27
      h32.73c2.31,0,4.52,0.06,6.76,0.06c4.98,0.06,10.71-0.43,11.91,4.21c0.67,2.66-0.92,6.37-2.09,9.34
      C645.07,152.45,643.88,155.67,641.41,158.08z M628.53,146.45h-22.39l-3.99,10.15h18.84c0.99,0,2-0.06,2.99-0.06
      c4.86-0.12,6.22-0.25,8.17-5.2C633.82,147.07,632.88,146.45,628.53,146.45z"></Path>
          
      </Svg>
          
        </Block>

        {screens?.map((screen, index) => {
          const isActive = active === screen.to;
          return (
            <Button
              row
              justify="flex-start"
              marginBottom={sizes.s}
              key={`menu-screen-${screen.name}-${index}`}
              onPress={() => handleNavigation(screen.to)}>
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.md}
                height={sizes.md}
                marginRight={sizes.s}
                >
                <Image
                  radius={0}
                  width={24}
                  height={24}
                  source={screen.icon}
                  color={colors[isActive ? 'primary' : 'icon']}
                />
                
              </Block>
              <Text p semibold={isActive} color={labelColor}>
                {screen.name}
              </Text>
            </Button>
          );
        })}

        <Block
          flex={0}
          height={1}
          // marginRight={sizes.md}
          marginVertical={sizes.sm}
          color={colors.secondary}
        />

        

        <Block row justify="space-between" marginTop={sizes.sm}>
          <Text color={labelColor}>{t('darkMode')}</Text>
          <Switch
            checked={isDark}
            onPress={(checked) => handleIsDark(checked)}
          />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

/* drawer menu navigation */
export default () => {
  const {isDark} = useData();
  const {gradients} = useTheme();

  return (
    <Block gradient={gradients[isDark ? 'dark' : 'light']}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
          flex: 1,
          width: '60%',
          borderRightWidth: 0,
          backgroundColor: 'transparent',
        }}>
        <Drawer.Screen name="Screens" component={ScreensStack} />
      </Drawer.Navigator>
    </Block>
  );
};
