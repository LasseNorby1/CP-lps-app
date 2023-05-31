import React, {useCallback} from 'react';
import {Platform, Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Image, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';

const isAndroid = Platform.OS === 'android';

const Status = () => {
  const {user} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();

  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;

  

  return (
    <Block safe marginTop={sizes.l}>
      {/* Input */}
      <Block
        flex={0}
        radius={sizes.sm}
        marginTop={-sizes.l}
        marginHorizontal="4%">
        <Block
          row
          flex={0}
          intensity={100}
          radius={sizes.sm}
          overflow="hidden"
          tint={colors.blurTint}
          justify="space-evenly"
          paddingVertical={sizes.sm}
          renderToHardwareTextureAndroid>
          <Block align="center">
            <Block
              flex={0} 
              align="center"
              justify="center"
              shadow={false}
              radius={sizes.l}
              marginHorizontal={sizes.sm}
              width={64}
              height={64}
              color={colors.primaryq}
              >
              <Image
                height={24}
                width={24}
                radius={0}
                source={assets.alternator}
                color={colors.icon}
              />
              <Block
                position='absolute'
                right={-32}
                flex={0} 
                align="center"
                justify="center"
                shadow={false}
                radius={sizes.l}
                marginHorizontal={sizes.sm}
                width={32}
                height={32}
                color={colors.primaryDark}>
                  <Text p size={12} margin={0} lineHeight={0} color={colors.white}>SC</Text>
                </Block>
            </Block>
            <Text p size={12}>Alternator</Text>
            <Text size={10}>-</Text>
          </Block>
          
          <Block align="center">
            <Block
              flex={0} 
              align="center"
              justify="center"
              shadow={false}
              radius={sizes.l}
              marginHorizontal={sizes.sm}
              width={64}
              height={64}
              color={colors.primary}
              >
              <Image
                height={24}
                width={24}
                radius={0}
                source={assets.grid}
                color={colors.icon}
              />
            </Block>
            <Text p size={12} margin={0} lineHeight={0}>Grid</Text>
            <Text p size={9}>-</Text>
          </Block>

          <Block align="center">
            <Block
              flex={0} 
              align="center"
              justify="center"
              shadow={false}
              radius={sizes.l}
              marginHorizontal={sizes.sm}
              width={64}
              height={64}
              color={colors.primary}
              >
              <Image
                height={24}
                width={24}
                radius={0}
                source={assets.solar}
                color={colors.icon}
              />
            </Block>
            <Text p size={12}>Solar</Text>
            <Text size={10}>-</Text>
          </Block>
          
        </Block>
      </Block>


      {/* Loading bars */}
      <Block
        row
        flex={0}
        intensity={100}
        radius={sizes.sm}
        overflow="hidden"
        tint={colors.blurTint}
        justify="space-evenly"
        marginHorizontal={sizes.xl}
        marginTop={-sizes.sm}
        paddingVertical={sizes.sm}
        renderToHardwareTextureAndroid>
        <Block color={colors.primary} height={sizes.xs} marginHorizontal={sizes.xs} radius={sizes.sm} tint={0.5}></Block>
        <Block color={colors.primary} height={sizes.xs} marginHorizontal={sizes.xs} radius={sizes.sm}></Block>
        <Block color={colors.primary} height={sizes.xs} marginHorizontal={sizes.xs} radius={sizes.sm}></Block>
        <Block color={colors.primary} height={sizes.xs} marginHorizontal={sizes.xs} radius={sizes.sm}></Block>
        <Block color={colors.primary} height={sizes.xs} marginHorizontal={sizes.xs} radius={sizes.sm}></Block>
      </Block>

      <Block
        paddingHorizontal={sizes.s}
        contentContainerStyle={{paddingBottom: sizes.padding}}>
        <Block flex={0}>
          <Block flex={0} align="center">
              <Image
                width={400}
                height={300}
                radius={0}
                marginBottom={sizes.sm}
                source={assets.LPSNew}
              />
          </Block>
        </Block>
        <Block
          flex={0}
          radius={sizes.sm}
          marginTop={-sizes.xl}
          marginHorizontal="4%">
          <Block
            row
            flex={0}
            intensity={100}
            radius={sizes.sm}
            overflow="hidden"
            tint={colors.blurTint}
            justify="space-evenly"
            paddingVertical={sizes.sm}
            renderToHardwareTextureAndroid>
            <Block align="center">
              <Block
                flex={0} 
                align="center"
                justify="center"
                shadow={false}
                radius={sizes.l}
                marginHorizontal={sizes.sm}
                width={64}
                height={64}
                color={colors.primary}
                >
                <Text p size={12} semibold color={colors.white}>12 V</Text>
                
              </Block>
              <Text size={10}>-</Text>
            </Block>
            
            <Block align="center">
              <Text h2 semibold>-</Text>
            </Block>

            <Block align="center">
              <Block
                flex={0} 
                align="center"
                justify="center"
                shadow={false}
                radius={sizes.l}
                marginHorizontal={sizes.sm}
                width={64}
                height={64}
                color={colors.primary}
                >
                <Text p size={12} semibold>230 V</Text>
              </Block>
              <Text size={10}>-</Text>
            </Block>
            
          </Block>
        </Block>


        <Block
          flex={0}
          radius={sizes.sm}
          marginTop={-sizes.sm}
          marginHorizontal="4%">
          <Block
            row
            flex={0}
            intensity={100}
            radius={sizes.sm}
            overflow="hidden"
            tint={colors.blurTint}
            justify="space-evenly"
            paddingVertical={sizes.sm}
            renderToHardwareTextureAndroid>
            

            <Block align="center">
              {/* Battery charging indicator */}
              {/* <Image
                height={24}
                width={24}
                radius={0}
                source={assets.batteryCharging}
                color={colors.icon}
              /> */}
              <Text p semibold size={11}>-</Text>
              <Text h5 semibold>-</Text>
            </Block>

            
            
          </Block>
        </Block>
      </Block>

      

    </Block>
  );
};

export default Status;
