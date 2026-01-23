 interface AuthConfig {
  clientId: string;
  redirectUri: string;
}

export const decodeClient = (base64String: string): AuthConfig => {
  const jsonString = decodeURIComponent(atob(base64String).split("").map((c) => {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
  
  return JSON.parse(jsonString);
};

export const getSSOParams = () => {
  const p = new URLSearchParams(window.location.search);
  const client: string | null = p.get("client");
  let clientId: string = "";
  let redirectUri: string = "";

  if (client) {
    const clientJSON = decodeClient(client);
    clientId = clientJSON?.clientId || "";
    redirectUri = clientJSON?.redirectUri || "";
  }

  return {
    clientId,
    redirectUri,
    state: `UmVzdHUgR2FudGVuZw==_${new Date().getTime()}`,
  }
}
