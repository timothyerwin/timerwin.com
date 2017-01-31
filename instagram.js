const qs = require('querystring');
const fetch = require('node-fetch');

class Crawler {
  constructor(username) {
    this.username = username;
  }

  media() {
    let results = [];

    return new Promise((resolve) => {
      const crawl = (maxId) => {
        const location = `https://instagram.com/${this.username}/media?${qs.stringify({max_id: maxId})}`;

        fetch(location).then(r => r.json()).then((media) => {
          results = results.concat(media.items);

          if (media.more_available) {
            crawl(media.items[media.items.length - 1].id);
          } else {
            resolve(results);
          }
        });
      };

      crawl();
    });
  }
}

module.exports = username => new Crawler(username);
