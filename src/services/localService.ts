const USER_INFO_SHOP = 'USER_INFO_SHOP';
export const localUserService = {
  get: (): ObjString | null => {
    const jsonData = localStorage.getItem(USER_INFO_SHOP);
    return JSON.parse((jsonData as string));
  },
  set: (userInfo: ObjString) => {
    const jsonData = JSON.stringify(userInfo);
    localStorage.setItem(USER_INFO_SHOP, jsonData);
  },
  remove: () => {
    localStorage.removeItem(USER_INFO_SHOP);
  }
}