import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '28547328-93a8d2ad13e96b0d78b6f83cd';

const getImages = async (searchValue, page) => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: API_KEY,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      page,
      per_page: 12,
    },
  });

  return response.data.hits;
};

export { getImages };
