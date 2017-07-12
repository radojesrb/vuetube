import axios from 'axios'

let prefix = ''

export function create (url, options = {}) {
  const instance = axios.create(Object.assign({ baseURL: url }, options))
  return instance
}

export const videos = axios.create({ baseURL: `${prefix}` })
