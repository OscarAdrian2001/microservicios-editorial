import axios from "axios";

export class AuthorsClient {
  private baseUrl = process.env.AUTHORS_SERVICE_URL || "http://localhost:3001/api/authors";

  async authorExists(authorId: number): Promise<boolean> {
    try {
      await axios.get(`${this.baseUrl}/${authorId}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}

