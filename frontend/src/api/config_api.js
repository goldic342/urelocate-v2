import axios from 'axios'
import { API_BASE_URL } from '../config'

export class ConfigAPI {
  async countriesList() {
    const response = await axios.get(
      `${API_BASE_URL}/probability-config/countries/`
    )

    return response
  }

  async techStackList() {
    const response = await axios.get(`${API_BASE_URL}/techstack`)
    return response
  }
}
