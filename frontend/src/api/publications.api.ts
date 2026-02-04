import { http } from "./http";

const PUBLICATIONS_URL = "http://localhost:3002/publications";

export const PublicationsAPI = {
  getAll: async () => {
    const response = await http.get(PUBLICATIONS_URL);
    return response.data;
  },

  getById: async (id: number) => {
    const response = await http.get(`${PUBLICATIONS_URL}/${id}`);
    return response.data;
  },

  create: async (publication: {
    title: string;
    content: string;
    authorId: number;
    category?: string;
  }) => {
    const response = await http.post(PUBLICATIONS_URL, publication);
    return response.data;
  },
};
