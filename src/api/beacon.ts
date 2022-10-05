import axios from 'axios';
import { Endpoint } from '../forms/ConfigConnectionForm';

export const fetchSyncStatus = async ({ protocol, address, port }: Endpoint) =>
  await axios.get(`${protocol}://${address}:${port}/eth/v1/node/syncing`)