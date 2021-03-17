import axios from "axios";

const baseUrl = 'https://incapital-4gly5z3b00512dc4-1305204328.ap-shanghai.app.tcloudbase.com/next-ssr-echo'

export class IndexReq {
  static async getContact(params) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "get",
      url: `${baseUrl}?page=contact`,
      data: params
    };
    const axiosRes = await axios(config);
    return axiosRes.data.data[0];
  }

  
  static async getindex(params) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "get",
      url: `${baseUrl}?page=index`,
      data: params
    };
    const axiosRes = await axios(config);
    return axiosRes.data.data;
  }
}
