export default class magicGif {  
  static getGif(search) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  static getTrendingGif() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let trending = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=20&rating=g`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", trending, true);
      request.send();
    });
  }
  
  static getRandomGif() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let random = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", random, true);
      request.send();
    });
  }
} 