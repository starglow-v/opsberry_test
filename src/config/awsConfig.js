const { IAMClient } = require('@aws-sdk/client-iam');
const { fromIni, fromEnv } = require('@aws-sdk/credential-provider-env');

module.exports = (accessKeyId, secretAccessKey) => {
  const client = new IAMClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId,
      secretAccessKey
    }
  });

  return client;
};