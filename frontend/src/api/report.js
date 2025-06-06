import axios from 'axios'
import { API_BASE_URL } from '../config.js'

export default class ReportAPI {
  async get_report(userInput) {
    const data = {
      from_county: userInput.fromCountry,
      to_country: userInput.toCountry,
      expirience_level: userInput.expirienceLevel,
      local_lang_level: userInput.localLevel,
      english_level: userInput.englishLevel,
      savings: userInput.savings,
      tech_stack_scope: userInput.techStackScope,
      tech_stack_tools: userInput.techStackTools,
      dependents: {
        adults: userInput.adults,
        children: userInput.childs
      }
    }
    const response = await axios.post(`${API_BASE_URL}/report`, data)

    return await response.data
  }
}
