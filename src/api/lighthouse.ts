import axios from 'axios'
import { Endpoint } from '../forms/ConfigConnectionForm'

export const fetchVersion = async ({ protocol, address, port }: Endpoint, apiToken: string) =>
  await axios.get(`${protocol}://${address}:${port}/lighthouse/version`, {
    headers: {
      authorization: `Bearer ${apiToken}`,
    },
  })

export const fetchValidatorValidatorInfo = async (baseValidatorUrl: string, token: string) => await axios.get(`${baseValidatorUrl}/validators`, {
  headers: { Authorization: `Bearer ${token}` },
})