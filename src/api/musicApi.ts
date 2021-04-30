import axios from 'axios';

const API_URL = 'https://api.publicapis.org/';

class PublicApi {
  async getMusic() {
    const get_10_items_music_promise = () =>{
      return axios.get(API_URL + 'entries?category=music&https=true');
    } 
    const result = await get_10_items_music_promise();
    const items = result.data.entries.slice(0, 10).map((el: any) => {
      return el;
    });
    return items;
  }

  async getRandom() {
    const get_random_promise = () =>{
      return axios.get(API_URL + 'entries?category=music&https=true');
    } 
    const result = await get_random_promise();
    const random = Math.floor(Math.random() * result.data.entries.length)
    const items = result.data.entries[random];
    return items;
  }

  async get3Random() {
    const get_random_promise = () =>{
      return axios.get(API_URL + 'entries?category=music&https=true');
    } 
    const result = await get_random_promise();
    const random = Math.floor(Math.random() * result.data.entries.length - 3 )
    const items = result.data.entries.slice(random, random+3).map((el: any) => {
      return el;
    });
    return items;
  }
}

export default new PublicApi();


