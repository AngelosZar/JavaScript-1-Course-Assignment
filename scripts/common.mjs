"use strict";
//                 .....   variables ......
export const baseApiUrl = "https://v2.api.noroff.dev";
// export const someIdToFetch = `${""}`;
export const rainyProdEndPoints = `${baseApiUrl}/rainy-days`;
// with template for url//need to create constants/vars

// fetch the api async
export async function doFetchData(url) {
  try {
    const res = await axios.get(url);
    console.log(res, res.data, res.data.data);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
