require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAE6MFVvmfojoTgQAAHEHAAAKAAAAY3JlZHMuanNvbpVU246jOBT8F78mmgRCgERqaQMESAgJdO6s5sEBAybcYhtoepR*X5G+TGulHfXyZGyrTp06Vf4F8gJTZKEWTH+BkuAaMtQtWVsiMAVKFYaIgD4IIINgCipjl9QWs1dCcdXwMNytNvYZ6u2hEXVU5LJa8IalWmXGC0*g3gdldUmx*wdAZ*NK2rHo1NbA9+SUw9px6QQ4GxfXuFFITKpR5Av8WtXdJ3DvECEmOI*mZYwyRGBqodaBmHyP*m05jG8kDZvi2RK55WhOl0NZTXzj5m+QelDkptxcm9t2kzffox*jW1qb8eAG23MmjtfzML*u7HQoSr3tXA*O+ZwksC6956R5o09xlKNgEaCcYdZ+W*ee3WtF6JmLwA*Uk+DpmRcnR+LpRzuR5*GqDRd27YUn0Zx9jzjhTUftDZRic9Zk7bReb9dblx8uzYFh67tBZL7e9NNhoq4y+Stxh3x45fp*dMdaYS*sBiUjSKVBO0K3nWSj0FgeGv3I4Z647S04X7XW2TfpW+pCnx*oia6Eip21ah5MvNvIgkEV+1KpGDPBlEvdNsr9F*qQVeRPLM9J49XJBAkpEU062xF1485xsCd8LCTLZHW5qVf+PN5MMG3G2irT*X38OglGVLYq9wLzDAUrnPGhkolibV21VjqlcfT06OiK2kUApty9DwiKMGUEMlzk3Z4k9AEM6i3yCWIPdcHLhB*CHnL5ZwcGzzQ*WlaaceehD71GDJLR2nKerVVNYCg8gT4oSeEjSlFgYsoK0tqIUhghCqZ**+yDHL2wt7l11UZcH4SYULbPqzItYPAx1I9D6PtFlbNtm*tqt0AETIe*txFjOI9oJ2OVQ+LHuEZqDBkF0xCmFH02iAgKwJSRCn2GVi2CTndX4biRZ9mgD7LHPHAApoAfC9JEljleFqSpJP5FfzQdLCzLHzlioA*SxzVOFISJJInSWOBlge9udgf3T4YdYIAYxCkFU6Da1Vl0BHO+bF9yf28Ys0U0U6MZ+N3RhzPepDd3a3TQ8OIlPexSVWg56kRnhcJmraqRVw4v45myWSrx5fUh*b9BukZwxE4WZ9wk15iwIQ3HlV+ts8LYVUbKWYXDy+ZLMpGTVs1gb3BaH6FOjGh1PNnMtQOouL1r+boebKTVgKFbaQbn86x56qoFqMY++lqsNg6ivveqsZVEzi1S917aSkSslsfrxXG1Frn+mSvtA+1VilHMm55lJrqmKFs+pfFxrmlLjZfrl42HYYM2fn1VR4vo3bOPzKTvbxV+2KmbVfcbYvSIfg4z9J3ZvRHvLDa8979gvD8m*xFI5Xn4ekpdAdveYT92K5tdNMGYXQyquVFhwMDoubMdds9HuQfu9599UKaQhQXJwBTAPCAFDkAfkKLqPLvIw+IPxdTZYjF*7zyFlM1+52CHM0QZzEow5aTxWJpIojh6u+WQojQhjTtnWkJsCp2p21lZbhlkH7ECs+4zvTW4*wNQSwECFAMUAAAICABOjBVb5n6I6E4EAABxBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB2BAAAAAA=',
  
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
