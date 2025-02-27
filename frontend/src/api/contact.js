import axios from "axios";
import { API_BASE_URL } from "../config";

export class ContactAPI {
  async contactMessage(name, username) {
    const response = await axios.post(`${API_BASE_URL}/contact`, {
      tg_username: username,
      name,
    });

    return await response.data;
  }
}
