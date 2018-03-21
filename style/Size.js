import React from "react-native";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const x=window.width;
const y=window.height;
const r=x/360;
export default Size = {

// GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  //30
  PADDING: x/12,
  //10
  PADDING_SMALL:x/36,
  //20
  PADDING_MID:x/18,
  //35
  PADDING_TI: r*25,
  //40
  PADDING_LONG:x/9,
  //120
  MARGIN_LONG:x/3,
// BUTTON
  //300
  BUTTON_WIDTH: x*(5/6),
  //50
  BUTTON_HEIGHT: y/13,
  //46
  BUTTON_ICON:y/14,
  //60
  BUTTON_ROUND:x/6,
//TEXT INPUT
  TI_WIDTH:x*(7/9),
//Text
  TEXT_DETAILS: r*10,
  TEXT_DETAILM: r*10,
  TEXT_DETAILL: r*14,
  TEXT_LABELS: r*16,
  TEXT_LABELM: r*18,
  TEXT_LABELL: r*20,
  TEXT_TITLES: r*22,
  TEXT_TITLEM: r*24,
  TEXT_TITLE: r*32,
  TEXT_TITLEL: r*36,
//Image
  IMAGE_STEP: x/2,
  IMAGE_IDW: x*(5/6),
  IMAGE_IDH: x*(9/10),
//PICKER
  PICKER_WIDTH:r*280,
// Check
  CHECK:r*230,
//ELEVATION
  ELEVATION: r*5
};
