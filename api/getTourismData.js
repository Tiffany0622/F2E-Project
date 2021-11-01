import { staticApi } from "~/plugins/axios/instance";

export const API = {
  getTourismData:
    "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON", // 取得所有觀光景點資料
};

export const getTourismData = () => staticApi().get(API.getTourismData);
