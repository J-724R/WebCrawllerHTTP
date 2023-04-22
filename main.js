const { crawlPage } = require("./crawl");

crawlPage

function main(){
  if (process.argv.length < 3){
    console.log("no website provided");
    process.exit(1)
  }
  if (process.argv.length > 3){
    console.log("too many website provided");
    process.exit(1)
  }

  const baseURL = process.argv[2]

  console.log(`Starting crawling ${baseURL}`);
  crawlPage(baseURL)
}


// Test url https://wagslane.dev arroung 20 links
main()