function decodeJwt(token) {
  const base64Url = value.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const decodedToken = JSON.parse(atob(base64));

  return decodedToken;
}

module.exports = decodeJwt;
