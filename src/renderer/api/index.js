import ajax from "./config/request";

// 获取私人FM
export function getPrivateFM(params) {
  let url = "/personal_fm";
  return ajax.get(url, params);
}
