import axios from "axios";
const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 2VzfhXASu0xwy_5mVX3aoH6KhHa9fFFu36rqxoK75Vk",
      },
      params: {
        query: term,
      },
    });
   
 
    return response.data.results;
  };
  export default searchImages;