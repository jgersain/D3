import { post } from 'axios'

const clientId = 'a092e5e65a11490c9af4d0cd736c76dd'
const clientSecret = 'sGevcGuuT9EI2y4eAcmCvFpsRvYS0Z6E'

const region = 'eu'

const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
