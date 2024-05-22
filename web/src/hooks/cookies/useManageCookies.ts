import { useCookies } from "react-cookie";
import { ManageCookiesKeys } from "./manageCookieKeys.ts"


interface useManageMarketCookiesReturn {
  addCookie: (key: ManageCookiesKeys, cookieData: any) => void;
  removeCookie: (key: ManageCookiesKeys) => void;
};

export function useManageCookies(): useManageMarketCookiesReturn {
  const [ cookies, setCookies, removeCookies ] = useCookies();


  function addCookie(key: ManageCookiesKeys, cookieData: any) {
    setCookies(key, cookieData);
    return;
  };

  function removeCookie(key: ManageCookiesKeys) {
 
    const cookieAlredyExists = getCookies(key);

    if(!cookieAlredyExists) {
      console.error("cookie not found.")
      return;
    };

    removeCookies(key);
    return;
  };

  function getCookies(key: ManageCookiesKeys): any | boolean {

    const cookieFound = cookies[key];

    if(!!cookieFound) {
      return cookieFound;
    };

    return false;
  };

  return {
    addCookie,
    removeCookie,
  };
};