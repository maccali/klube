import AsyncStorage from '@react-native-community/async-storage';

const auth = {
  getToken: async () => {
    const hash = await AsyncStorage.getItem('token');
    if (hash) {
      return `Bearer ${hash}`;
    } else {
      return null;
    }
  },
  setToken: async (token) => {
    await AsyncStorage.setItem('token', token);
  }
}

export default auth;
