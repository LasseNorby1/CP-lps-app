import React from 'react';
import dayjs from 'dayjs';
import {TouchableWithoutFeedback} from 'react-native';

import Text from './Text';
import Block from './Block';
import Image from './Image';
import {useTheme, useTranslation} from '../hooks/';
import {IArticle} from '../constants/types';

const Article = ({
  title,
  description,
  image,
  category,
  rating,
  location,
  timestamp,
  user,
  onPress,
}: IArticle) => {
  const {t} = useTranslation();
  const {colors, gradients, icons, sizes} = useTheme();

  // render card for Newest & Fashion

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Block card padding={sizes.sm} marginTop={sizes.sm}>
          <Image height={170} resizeMode="cover" radius={0} source={{uri: image}} />
          <Block
            row
            flex={0}
            intensity={100}
            radius={sizes.sm}
            overflow="hidden"
            tint={colors.blurTint}
            paddingVertical={sizes.sm}
            renderToHardwareTextureAndroid
            marginLeft={sizes.xs}
            >
            
            {/* article category */}
            {category?.name && (
              <Text
                h5
                semibold
                size={11}
                // transform="uppercase"
                marginRight={sizes.xs}
                color={colors.primary}>
                {category?.name}
              </Text>
            )}

            <Text h5 semibold gray size={11}>
              {t('common.posted', {
                date: dayjs(timestamp).format('DD MMMM') || '-',
              })}
            </Text>
          </Block>
          

          {/* article description */}
          {description && (
            <Text
              p
              
              marginLeft={sizes.xs}
              marginBottom={sizes.sm}>
              {description}
            </Text>
          )}

          

          
        </Block>
      </TouchableWithoutFeedback>
    );
  

  
};

export default Article;
