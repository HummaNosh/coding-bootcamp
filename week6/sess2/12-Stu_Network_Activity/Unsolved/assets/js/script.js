var requestUrl = "https://github.com/orgs/nodejs/repositories";

async function getApi(requestUrl) {
  const response = await fetch(requestUrl);
  const data = await response.json();
  console.log(data);
}
