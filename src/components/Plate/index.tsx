import React from "react";

import { MotiImage } from 'moti';

import { styles } from "./styles";
import boll from "../../assets/prato2.png"

export function Plate (){
  return(
    <MotiImage 
      style={styles.plate}
      source={boll}
      resizeMode="contain"
      from={{
        rotate: '100deg',
        opacity: 0
      }}
      animate={{
        rotate: '0deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 2000,
        repeat: 3
      }}
    />
  );
}