const code = new URL(window.location.href).searchParams.get('code')

// import { atom } from 'recoil';

// export const isLoggedInState = atom({
//   key: 'isLoggedInState',
//   default: true,
// });

// export const token = atom({
//   key: "token",
//   default: {
//     accessToken: undefined,
//     refreshToken: undefined,
//   },
//   effects_UNSTABLE: [localStorageEffect("ssafe_token")],
// });

// export const authTrigger = atom({
//   key: "authTrigger",
//   default: 0,
// });

// export const auth = selector({
//   key: "auth",
//   get: async ({ get }) => {
//     if (!!get(token).accessToken) {
//       const res = await axiosInstance({ url: "users/me" });
//       return res?.data;
//     }
//     return {
//       authCheck: "",
//       campus: "",
//       createdDate: "",
//       email: "",
//       likeJob: "",
//       modifiedDate: "",
//       nickname: "",
//       ordinal: "",
//       profileImg: "",
//       realName: "",
//       userId: "",
//     };
//   },
//   set: ({ set }, value) => {
//     if (value instanceof Recoil.DefaultValue) {
//       set(authTrigger, (v) => v + 1);
//     }
//   },
// });

// export const isLoginState = selector({
//   key: "isLoginState",
//   get: ({ get }) => {
//     return !!get(token).accessToken;
//   },
// });

// export const authState = selector({
//   key: "authState",
//   get: ({ get }) => {
//     return get(auth)?.authCheck;
//   },
// });

// export const accessToken = selector({
//   key: "accessToken",
//   get: ({ get }) => {
//     return get(token).accessToken;
//   },
// });

// export const refreshToken = selector({
//   key: "refreshToken",
//   get: ({ get }) => {
//     return get(token).refreshToken;
//   },
// });