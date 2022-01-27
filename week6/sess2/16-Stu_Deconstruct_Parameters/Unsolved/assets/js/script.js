fetch(
  // Explain each parameter in comments below.

  "https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// Parameter explanation.

// nodejs is the owner
// node is the repo
// issues ....10 per page
//10 per page
// return open issues
// sort results by created
//direction DESC which is descending- descending by default...

// is this url a filter of the above parameters?
// give me 10 of the issues in the node repo, make sure theyre open issues, and are created issues going down, with the most recent first....
