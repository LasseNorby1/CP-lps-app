import React, {useCallback} from 'react';
import {Platform, Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Image, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

const isAndroid = Platform.OS === 'android';

const History = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();



  return (
    <Block safe marginTop={sizes.md}>
      <Block
        scroll
        paddingHorizontal={sizes.s}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.padding}}>
          <Block flex={0} row>
            <Block flex={0} align="center" justify='center' width={sizes.width / 2}>
                <Image
                  width={150}
                  height={150}
                  radius={0}
                  marginBottom={sizes.sm}
                  source={assets.LPSNew}
                />
            </Block>
            <Block flex={0} width={sizes.width / 2} marginLeft={sizes.sm}>
              <Block marginBottom={sizes.xs} flex={0}>
                <Text p gray size={10}>Name:</Text>
                <Text h4 semibold>LPS Demo</Text>
              </Block>
              <Block marginBottom={sizes.xs} flex={0}>
                <Text p gray size={10}>Serialnumber:</Text>
                <Text p semibold>0123456789</Text>
              </Block>
              <Block marginBottom={sizes.xs} flex={0}>
                <Text p gray size={10}>Model:</Text>
                <Text p semibold>LPS II</Text>
              </Block>
              <Block marginBottom={sizes.xs} flex={0}>
                <Text p gray size={10}>Last reg.:</Text>
                <Text p semibold>31-03-2023</Text>
              </Block>
            </Block>
          </Block>
          <Block flex={0} color={colors.dark} padding={sizes.sm} marginTop={sizes.sm}>
            <Block marginBottom={sizes.xs} flex={0}>
                <Text h4 semibold>2023</Text>
            </Block>
            <Block flex={0} row>
              
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Alternator:</Text>
                <Text p semibold>396 kWh</Text>
              </Block>
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Super Charge</Text>
                <Text p semibold>0 kWh</Text>
              </Block>
            </Block>
            <Block flex={0} row>
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Mains:</Text>
                <Text p semibold>88 kWh</Text>
              </Block>
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Solar</Text>
                <Text p semibold>121 kWh</Text>
              </Block>
            </Block>
            
          </Block>

          <Block flex={0} color={colors.primary} padding={sizes.sm}>
            <Block flex={0} row align='center'>
                <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                  <Text h5 semibold color={colors.white} size={12}>Total:</Text>
                </Block>
                <Block width={sizes.width / 2}>
                  <Text h4 semibold>605 kWh</Text>
                </Block>
            </Block>
          </Block>


          <Block flex={0} color={colors.dark} padding={sizes.sm} marginTop={sizes.sm}>
            <Block marginBottom={sizes.xs} flex={0}>
                <Text h4 semibold>2022</Text>
            </Block>
            <Block flex={0} row>
              
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Alternator:</Text>
                <Text p semibold>231 kWh</Text>
              </Block>
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Super Charge</Text>
                <Text p semibold>0 kWh</Text>
              </Block>
            </Block>
            <Block flex={0} row>
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Mains:</Text>
                <Text p semibold>32 kWh</Text>
              </Block>
              <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                <Text p gray size={10}>Solar</Text>
                <Text p semibold>122 kWh</Text>
              </Block>
            </Block>
            
          </Block>

          <Block flex={0} color={colors.primary} padding={sizes.sm}>
            <Block flex={0} row align='center'>
                <Block marginBottom={sizes.xs} flex={0} width={sizes.width / 2}>
                  <Text h5 semibold color={colors.white} size={12}>Total:</Text>
                </Block>
                <Block width={sizes.width / 2}>
                  <Text h4 semibold>385 kWh</Text>
                </Block>
            </Block>
          </Block>
      </Block>
    </Block>
  );
};

export default History;
