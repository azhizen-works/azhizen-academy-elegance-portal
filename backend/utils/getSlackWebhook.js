const {
  SecretsManagerClient,
  GetSecretValueCommand
} = require("@aws-sdk/client-secrets-manager");

// CHANGE REGION if needed
const client = new SecretsManagerClient({
  region: "ap-southeast-2"
});

async function getSlackWebhook(secretId) {
  const command = new GetSecretValueCommand({
    SecretId: secretId // 👈 your secret name
  });

  const response = await client.send(command);

  // Secret stored as key-value JSON
  const secret = JSON.parse(response.SecretString);

  return secret.SLACK_WEBHOOK_URL;
}

module.exports = getSlackWebhook;
