import React from "react";
import { SvgXml } from "react-native-svg";
import { useTheme } from "../../hooks";
export default function IconMenu(){
  const {colors} = useTheme();

  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" class="nc-icon-wrapper"><path data-color="color-2" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path> <path d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path> <path d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path></g></svg>`;
  const Icon = () => <SvgXml xml={svgMarkup} width={24} color={colors.white} />;  

  return <Icon />;
}