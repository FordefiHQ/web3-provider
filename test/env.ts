import * as dotenv from 'dotenv';

dotenv.config({ path: 'test/.env' });

interface Env {
  /** value of `apiUserToken` in {@link FordefiProviderConfig} */
  API_USER_TOKEN: string;
  /** value of `apiPayloadSignKey` in {@link FordefiProviderConfig} */
  API_PAYLOAD_SIGNING_KEY: string;
  /** API key to infura's API. Embedded into the `rpcUrl` passed to {@link FordefiProviderConfig} */
  INFURA_API_KEY: string;
}

const processEnv = process.env as unknown as Env;

export const env: Env = {
  API_USER_TOKEN: processEnv.API_USER_TOKEN,
  API_PAYLOAD_SIGNING_KEY: processEnv.API_PAYLOAD_SIGNING_KEY,
  INFURA_API_KEY: processEnv.INFURA_API_KEY,
};

const validateEnv = () => {
  const invalidEnvVars = Object.entries(env)
    .filter(([_name, value]) => !value)
    .map(([name]) => name);

  if (invalidEnvVars.length) {
    throw new Error(`Test environment is missing environment variables: ${invalidEnvVars.join(',')}`);
  }
};

export default validateEnv;
