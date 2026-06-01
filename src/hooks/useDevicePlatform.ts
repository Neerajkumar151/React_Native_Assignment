import { Platform } from 'react-native';

const useDevicePlatform = () => {
  return {
    os: Platform.OS,
    isIos: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
    isWeb: Platform.OS === 'web',
    version: Platform.Version,
    isMac: Platform.OS === 'macos',
    isWindows: Platform.OS === 'windows',
  };
};

export default useDevicePlatform;
