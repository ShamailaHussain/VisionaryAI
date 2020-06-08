module.exports = {
  FB_PAGE_TOKEN: process.env.FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN:process.env.FB_VERIFY_TOKEN,
  FB_APP_SECRET: process.env.FB_APP_SECRET,
  FB_APP_ID: process.env.FB_APP_ID,
  SERVER_URL: process.env.SERVER_URL,
  GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
  DF_LANGUAGE_CODE: process.env.DF_LANGUAGE_CODE,
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY:process.env.GOOGLE_PRIVATE_KEY.replace(new RegExp("\\\\n", "\g"), "\n"),
  CALENDAR_ID: process.env.CALENDAR_ID,
  PG_CONFIG: {
    user: process.env.PG_CONFIG_USER,
    database: process.env.PG_CONFIG_DATABASE,
    password: process.env.PG_CONFIG_PASSWORD,
    host: process.env.PG_CONFIG_HOST,
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
  }
};




// module.exports = {
//   FB_PAGE_TOKEN: 'EAAIYSMeRTI0BAMintkloZBq8dPDSUfwzKl0m9b6UrzOT5LsWIXBxkZAZCB2MFseQtHvU26r6219BumhrHCiA5LxR5LyLkc1ddKhoNsZBMwSW2Nnu1ZAZCR8VFR88i4ZBooxA4E7ZCygsPR7ZBGOWUqPGZBMAnql3QhGTr1vhQlkSZCeu9YyN0aDqXNx',
//   FB_VERIFY_TOKEN:'botsmakemeangry3',
//   FB_APP_SECRET: 'ac6a73c57c9cec54176c0186fc95e2cf',
//   FB_APP_ID: '589650818321549',
//   SERVER_URL: 'https://hidden-brushlands-73748.herokuapp.com/',
//   GOOGLE_PROJECT_ID: 'businessgrowthmentor-lgxlwf',
//   DF_LANGUAGE_CODE: 'en-US',
//   GOOGLE_CLIENT_EMAIL: 'dialogflow-client@businessgrowthmentor-lgxlwf.iam.gserviceaccount.com',
//   GOOGLE_PRIVATE_KEY:"-----BEGIN PRIVATE KEY----- MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCogjuF5lfurVmA QdRwlwKbyLpp7PRlCL/0aOKiTxHm7PXEOp7IahmelBVbD3vE7lN5D0wZPC54txj4 GwJgxJO7dvD5zWKFhSnF8fGUAENPcjimBRJF+x1qnllj+kpafr5CDNMaSrJ8ey6p oigRR2n72mSmfkm0Xu320ofvk2Y56RoPLhGbj7DOOfpypygD3jRTFXLOfzycdrGm sSgIyXF589avg5G3PIxzOT1E2XAXpKmHhX1BnP7VeBXWQpJW6MX+9Cxt4rA4ozta HcAR/RAnVCZWDYsBR+XRHrovB7cogXrxNkdUQGMq9M7uvSSZJ3ecF7kMj7WWDOfj F3OTFpCNAgMBAAECggEAA2FJXqcRmZxNsLd8wEH5eNlX5i92TTrMjuWjsZCgdnGi 7YdJxlrKeVZnph1hG5wkNH7e6eYZItIrrcLs7rbVAOw0/TbmTZWdW3bQWyEQgbhP YgLZvrLAybr9HS20XBqfTKWVx5RfbCmCGT/Vbnxwg4GezzlIsugVtChPySdNv6Hg tpMl4Bb+IKbW2wfO3EKdSbsIN27HajLYv3MtdabXQsCrmSw/yIWWk5vW6TXsqCPV kKqYNH/mhzMiqqXr9hoz8Ir4bDYsWQuAwtjX1PZZ9zHJi5kTaaCmWRDLQLzstMVW M/kZqPgm4mUrVPjEqgLFl1Seuwo6Q91ZaELMAq0IAQKBgQDgRjUmRrD8BMMxc8vM A5ZMvNXJ381v96LJRdQbOt0vkX87dlPYMWWPeHb9LIQoRNqDRqQTpbMf/SqCnHDu DjYx/g92bgs38cN2kVzBvBmjtTWu6wa1A113RV3JMv61HNUB9PCTT1CL7c8VO6bh ykcUoLWNKPsfkCvnqaLjOISfjQKBgQDAWI0AShLasQRDNN2M83mDJSAtiyCi4+2m 1Q3yjDWGUC6ZMfugVaqm1pE91PUMjd4DxTeYomcjg1m7DPg/oFq22xp+aEX5LiSw Wg0zEIZvbXAOxHx8G4EN5h0E8G1vcApCUHrpMpkumTij+POOjKnTWuBZ6fWXOqUp pBPdPWD1AQKBgEfeF6AJXSOVPxt0uOTKbXpvtK55GjL8Dt0ilEKZjVF19WiPlXSc 96eO+cpNXpgs4DzbAS8OlST2Eo5CJWoTgchpWnkf8FZgEbvH/wpSBYFRSz+fLsoI pwXWY6RaxAYzlAqJfCIoc24zqX1rXSHTmQ2CJktyy24k2/zjfkAD13PtAoGAWr6s LxHDWWegMjDTwXbwwf2W88WqrQ7JhScJAIBDlE1p3p6lLxybeUDLnxdEURrxPmgh 9aHQ9QE4KTZSPHpjsdcm5bI+KPQrHQQvLANE2XcRIfZzIH49YZhJ4pWnm6aJQIYF ptVXTZO+FCYUihE04eEC7YiidCmX2FBvirY1cwECgYEAkTFi6d+PC+Qnh3k8PCWv 0l/m0XXmQSyZ82h8VacYsioxC3M187cCJlk7V0o2hJHGcfpUzs4cwhvQC3U/891Z 9xxYr+Hz9GKkfzDiKJ7HbEg+qKPcYzpByNOoQE/RzKt3bGje2Tdj/PTS8c8KIkaP Nids2XkDwwIKf/RpEklm8sI= -----END PRIVATE KEY-----",
//   CALENDAR_ID: '9lrf9c1bauder43sot6mc18qtg@group.calendar.google.com',
//   PG_CONFIG: {
//     user: 'peoilkvmiibbbv',
//     database: 'da15t8qdhf7s2g',
//     password: 'f8b6c8a4d367566ce6555c9a367a8f24e8f6d860f7be56d81b6a55d06dad724a',
//     host: 'ec2-34-233-186-251.compute-1.amazonaws.com',
//     port: 5432,
//     max: 10,
//     idleTimeoutMillis: 30000,
//   }
// };


