import { google } from "googleapis";
import nodemailer from "nodemailer";

const CLIENT_EMAIL = process.env.EMAIL_CLIENT_ID;
const EMAIL_CLIENT_ID = process.env.EMAIL_CLIENT_ID;
const EMAIL_CLIENT_SECRET = process.env.EMAIL_CLIENT_SECRET;
const EMAIL_REFRESH_TOKEN = process.env.EMAIL_REFRESH_TOKEN;
const EMAIL_REDIRECT_URI = process.env.EMAIL_REDIRECT_URI;

const OAuth2Client = new google.auth.OAuth2(
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_REDIRECT_URI
);

OAuth2Client.setCredentials({ refresh_token: EMAIL_REFRESH_TOKEN });

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: CLIENT_EMAIL,
    clientId: EMAIL_CLIENT_ID,
    clientSecret: EMAIL_CLIENT_SECRET,
    refreshToken: EMAIL_REFRESH_TOKEN,
  },
});

transporter.set("oauth2_provision_cb", async (user, renew, callback) => {
  const accessToken = await OAuth2Client.getAccessToken();
  if (!accessToken) {
    return callback(new Error("Unknown user"));
  } else {
    return callback(null, accessToken.token);
  }
});

transporter.on("token", (token) => {
  console.log("A new access token was generated");
  console.log("User: %s", token.user);
  console.log("Access Token: %s", token.accessToken);
  console.log("Expires: %s", new Date(token.expires));
});
