import { Platforms, SettingTypes } from 'src/common/constant';

declare global {
  namespace Settings {
    type PlatformOptions = {
      platform: Platforms
      settingType: SettingTypes
    };

    type OpenAISelectOptions = {
      apiKey: string
    };

    type IFlyTekSelectOptions = {
      appid: string
      apiSecret: string
      apiKey: string
    };

    type SelectOptions = OpenAISelectOptions | IFlyTekSelectOptions;

    type Options = {
      platforms: Platforms[]
      types: SettingTypes[]
    }
  }
}
