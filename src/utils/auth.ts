/**
 * Simulate JWT auth
 */

import cookies from "js-cookie";

const AUTH_TOKEN = "u_tok";

export function setAuthUser(value) {
  cookies.set(AUTH_TOKEN, value);
}

export function getAuthUser() {
  return cookies.get(AUTH_TOKEN);
}

export function removeAuthUser() {
  cookies.remove(AUTH_TOKEN);
}
