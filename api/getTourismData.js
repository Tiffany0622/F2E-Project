import { $axios } from "~/plugins/axios/instance";

export const API = {
  getTourismData:
    "/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON", // 取得所有觀光景點資料
};

export const getTourismData = () => $axios().get(API.getTourismData);
