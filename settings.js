require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAARXC1uGdpJOUQQAAHEHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGkABkaquWkAFtBFvqLg1DwECRK6GIOKU*30Ku3t6HnZne3kKSeqc73yX*AB5gSu0QC2Qf4CS4CukqFvStkRABmodhoiAPggghUAGkbq0GypijkCHzbh62eAde5xwBacwDrG3l0TKMP868afOC3j0QVl7Kfb*UPDonWIzbGxulm33Vzyvpddgo7WMu4uEmV6+JorqbErkL3fSC3h0FSEmOI+mZYwyRGC6QO0KYvI1+MWKSIp+vvH2oE1vLbMdDUlYGU4b8d5RvQ2S7abws0h3j8nX4BvScRRzBRfURrTJLP7SVpf5cnNOGp3Tat0exKhMrQVl9s4b*ApHOQrMAOUU0*brvOtTZZkIzWS2iUPOKfbuVW83iaIFocFgvbYnyFcD2psn*NeA1zWaHazJNPATcrhW9tYWTWPOzArkeEx6LNnBfEAR09ZY+h34inx4Jfk*vDe6wPsngfBD54b5uFnQ2XnnuHgaucbV2EulsbieougeOuzX4EfjODwc497JWO1vVuv40lUx6tN+i6wFUgkzvGP2MMnbYsZ+woe0Jn9CeRqLquGobhM2pqDN1dQN0o3lnL36nCyTjPFWurW5E5aGOl2enXAdFKMWervdZDsUL*devLXvhwG+0nOjFONY5JiLqkYvz4kS1JoBkLlHHxAU4YoSSHGRd3si3wcwuG6RTxB9sguKqXFoKm555OZ51iuahbpMDIuh9XrhMJtmOM4ybWqKkxtXvIA+KEnho6pCgYErWpDWQlUFI1QB+e*vfZCjG33Tres25PogxKSiTl6XaQGDD1E*DqHvF3VOt23ua90CESCzn9uIUpxHVUdjnUPix*iKtBjSCsghTCv0a0BEUABkSmr0K7RaEXS8uydVt4ZjHfRB9tQDB0AGA4EfjSWJG0j8SB4N*6q+NV1ZWJbfckRBH6TPa5zI8+PRSBwJ*EDiB93N7uDxC2FXMEAU4rQCMtCsiyuueGNq2a4grXVd4SNFixTwOdGHM96oN3ZLtJ9g85bud6nGt1y1ily1gs1S06JTyXqCotpzNfbu*Ms*FAEy8LPSGkDHU5TkYqJUTKXkvNN5Sjh7gRLWNFMhZlat7uhnlW3wRXjl7lM9yAcCKqa6MN9Jop7k4*Vp2ZvBqeIXqZmozUvXLUBX7KPfmzW2XnFXrXTPLp3HXHnY+NqU8xzT5qzFjBMEesr8o4LSlvdMbVsf6tluNjvzy7s1Ohqsye0v67PtlK8LYnmKKxFHN5X1m2efmUnf3yr8tFOnVfcbYvSMfg47Bf9buzfgncXYR*+3Gu+Pyb8EUt2w92O65rF12jvCuraoN+F1xdOryToqdBjovbWyw2v3IPXA4*G9D8oU0rAgGZABzANS4AD0ASnqzrNmHhZ*aKYppjl9T2sKK6p85mCHM1RRmJVA5kYCP2bHI1F8u7UiRWnAKu6cueBjg+9M3SpluaWQfsQKKN23Egbg8RNQSwECFAMUAAAICAAEVwtbhnaSTlEEAABxBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254798812847',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Loree54',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
