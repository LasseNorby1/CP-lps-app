import React from "react";
import { SvgXml } from "react-native-svg";  
export default function IconHome(){  
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g stroke-linecap="square" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="miter" class="nc-icon-wrapper" stroke-miterlimit="10"><polyline data-cap="butt" points="10 23 10 17 14 17 14 23" stroke-linecap="butt"></polyline><polyline data-cap="butt" points="1 11 12 2 23 11" stroke-linecap="butt"></polyline><line data-cap="butt" x1="4" y1="8.545" x2="4" y2="4" stroke-linecap="butt"></line><path d="M4,13v8c0,1.105,.895,2,2,2h12c1.105,0,2-.895,2-2V13"></path><rect x="11" y="11" width="2" height="2" fill="currentColor" stroke="none"></rect><rect x="11" y="11" width="2" height="2"></rect></g></svg>`;
  const Icon = () => <SvgXml xml={svgMarkup} width={20} />;  

  return <Icon />;
}