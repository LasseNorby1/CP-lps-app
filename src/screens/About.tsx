import React, {useCallback} from 'react';
import {Linking} from 'react-native';
import Constants from 'expo-constants';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Text} from '../components/';

const About = () => {
  const {t} = useTranslation();
  const {gradients, sizes} = useTheme();

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  return (
    <Block
      scroll
      padding={sizes.padding}
      contentContainerStyle={{paddingBottom: sizes.padding * 1.5}}>
      <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
        <Text h2 semibold marginBottom={sizes.sm}>
          {t('common.about')} {t('app.fullname')}
        </Text>
        <Text semibold align="left" marginBottom={sizes.s}>
        At Clayton Power we create innovative mobile power solutions which help our customers to adapt to greener energy solutions.
        </Text>
        <Text align="left" marginBottom={sizes.s}>
        Through technology leadership and sparring with our customers, we find solutions which challenge the climate changes, achieve improved energy efficiency and reduce the need for fossil fuel.
        </Text>
        <Text align="left" marginBottom={sizes.sm}>
        Clayton Power A/S was founded in 2000 and is based in Denmark, Odense.
        We always put our customers first, making sure we consistently meet their needs and exceed their expectations.
        We are today represented in more than 18 markets across the EU.
        </Text>
        <Button
          gradient={gradients.primary}
          onPress={() =>
            handleWebLink('https://www.creative-tim.com/templates/react-native')
          }>
          <Text white semibold>
            {t('common.visit')} {t('app.link')}
          </Text>
        </Button>
      </Block>
      <Block card flex={0} padding={sizes.sm}>
        <Text p semibold>
          {t('common.appDetails')}
        </Text>
        <Block flex={0} row justify="space-between" marginTop={sizes.sm}>
          <Text>{t('common.appName')}</Text>
          <Text semibold>{t('app.fullname')}</Text>
        </Block>

        <Block flex={0} row justify="space-between" marginTop={sizes.sm}>
          <Text>{t('common.appVersion')}</Text>
          <Text semibold>{Constants.nativeAppVersion}</Text>
        </Block>
        <Block flex={0} row justify="space-between" marginTop={sizes.sm}>
          <Text>{t('common.buildVersion')}</Text>
          <Text semibold>{Constants.nativeBuildVersion}</Text>
        </Block>
        <Block flex={0} row justify="space-between" marginTop={sizes.sm}>
          <Text>{t('common.expoVersion')}</Text>
          <Text semibold>{Constants.expoVersion}</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default About;
