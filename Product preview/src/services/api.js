import axios from 'axios';

export const getAll = async () => {
    try {
      const response = await axios.get('http://localhost:8083/api/perfume');
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
};


export const save = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8083/api/perfume/save', formData);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const deletePerfume = async (id) => {
  try {
    const response = await axios.delete('http://localhost:8083/api/perfume/delete/' + id)
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};