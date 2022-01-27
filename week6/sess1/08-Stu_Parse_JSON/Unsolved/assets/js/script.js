// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = "https://api.github.com/repos/twitter/chill/issues?per_page=5";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Github Repo Issues \n----------");
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      let issue = data[1];
      console.log(issue);
      console.log(issue.url);
      console.log(issue.user.login);

      // TODO: Loop through the response
      // TODO: Console log each issue's URL and each user's login
    }
  });
