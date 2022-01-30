import React from "react";
import { View, Text } from "react-native";

import { MotiView } from 'moti'

import { styles } from './styles';
import { Button } from '../Button';

export function Footer() {
  return(
    <MotiView
      from={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 3000
      }}
    >
      <Text style={styles.label}>
        Detalhes
      </Text>

      <Text style={styles.text}>
        Ganhe 50% de desconto no Boll especial e delicioso 
        e fique ligado para mais descontos.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          R$ 220
        </Text>

        <Button />
      </View>
    </MotiView>
  );
}