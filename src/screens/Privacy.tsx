import React from 'react';

import {Block, Text} from '../components/';
import {useTheme} from '../hooks/';

const Privacy = () => {
  const {sizes} = useTheme();

  return (
    <Block padding={sizes.padding} marginBottom={sizes.sm}>
      <Block
        card
        scroll
        paddingHorizontal={sizes.sm}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Text h2 marginBottom={sizes.sm} semibold align="left">
          Our Privacy and Terms of Use
        </Text>
        <Text h5>1. Application</Text>
        <Text p marginBottom={sizes.sm} align="left">
        1.1 Application. The standard terms and conditions of sale and delivery (“the Terms and Conditions”) apply to all contracts involving the sale and delivery of products, spare parts and related services by Clayton Power ApS, Business reg. no. 29821631, (“the Company”) to business customers.
        </Text>
        <Text h5>2. Contractual basis</Text>
        <Text p marginBottom={sizes.sm} align="left">
        2.1 Contractual basis. The Terms and Conditions together with the Company’s quotations and order confirmations constitute the entire contractual basis for the Company’s sale and delivery of products, spare parts and related services to the customer (“the Contractual Basis”). The customer’s terms and conditions of purchase printed on orders or otherwise provided to the Company do not form part of the Contractual Basis.
        </Text>
        <Text h5>3. Products, spare parts and services</Text>
        <Text p marginBottom={sizes.sm} align="left">
        3.1 Limitation of liability. Products, spare parts and related services sold and delivered by the Company to the customer are designed to be used in a dry and dust-free environment. Regardless of any contradictory terms and conditions in the Contractual Basis, the Company shall under no circumstances be liable for loss or damage caused by inappropriate use of the product. The customer shall indemnify the Company to the extent the Company is held liable for such loss or damage.
        </Text>
      </Block>
    </Block>
  );
};

export default Privacy;
