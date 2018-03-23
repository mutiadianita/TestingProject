import React from "react-native";

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
const x=window.width;
const y=window.height;
const r=x/360;
const s=y/640;
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
  //25
  PADDING_TI: r*25,
  //40
  PADDING_LONG:x/9,
  //65
  PADDING_CONFIRM:r*65,
  //75
  PADDING_CONFIRML:r*75,
  //120
  MARGIN_LONG:x/3,
// BUTTON
  //260
  BUTTON_RISK: r*260,
  //300
  BUTTON_WIDTH: x*(5/6),
  //Size.BUTTON_HEIGHT: y/13
  BUTTON_HEIGHT: y/13,
  //46
  BUTTON_ICON:y/14,
  //60
  BUTTON_ROUND:x/6,
//TEXT INPUT
  TI_WIDTH:x*(7/9),
//Text
  TEXT_DETAILS: r*10,
  TEXT_DETAILM: r*12,
  TEXT_DETAILL: r*14,
  TEXT_LABELS: r*16,
  TEXT_LABELM: r*18,
  TEXT_LABELL: r*20,
  TEXT_TITLES: r*22,
  TEXT_TITLEM: r*24,
  TEXT_TITLEE: r*28,
  TEXT_TITLE: r*32,
  TEXT_TITLEL: r*36,
  TEXT_TITLEXL: r*40,
//Image
  //180
  IMAGE_STEP: x/2,
  //300
  IMAGE_IDW: x*(5/6),
  //324
  IMAGE_IDH: x*(9/10),
  IMAGE_NW: r*200,
  IMAGE_NH: s*180,
//PICKER
  PICKER_WIDTH:r*280,
// Check
  CHECK:r*230,
//ELEVATION
  ELEVATION: r*5,
//Pager
  PAGER_WIDTH:r*320,
  PAGER_HEIGHT:s*600,
//PROGRESS
  PROGRESS_BORDER:r*6,
//MAINMENU
  CONTENT_HEADER:s*110,
  CONTENT_HEIGHT:s*160,
  OPTION_HEIGHT:s*80,
  CBOX_HEIGHT:s*250,
  BOX_HEIGHT:s*70,
//BORDER
  BORDER: r*3,
//BANK WIDTH
  BANK_WIDTH:r*130,
//DELETE
  DELETE_WIDTH:r*50,
  DELETE_HEIGHT:s*100
  };
