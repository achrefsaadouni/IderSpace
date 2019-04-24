const scrapedin = require('./scrapedin/scrapedin')
const crawl = require('./crawler')




  module.exports = async (config) => new Promise((resolve => {
    console.log(config)
      scrapedin(config)
        .then((profileScraper) => crawl(config,profileScraper, config.rootProfiles).then(res=>resolve( res)))

  }))

