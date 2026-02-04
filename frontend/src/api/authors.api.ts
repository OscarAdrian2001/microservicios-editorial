import { http } from "./http";

const AUTHORS_URL = "http://localhost:3001/api/authors";

export const AuthorsAPI = {
  getAll: async () => {
    const response = await http.get(AUTHORS_URL);
    return response.data;
  },

  getById: async (id: number) => {
    const response = await http.get(`${AUTHORS_URL}/${id}`);
    return response.data;
  },

  create: async (author: {
    name: string;
    email: string;
    biography?: string;
  }) => {
    const response = await http.post(AUTHORS_URL, author);
    return response.data;
  },
};
