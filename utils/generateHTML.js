const generateHTML = (data) => {
  let content = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>${data.title}</title>
  </head>
  <body ontouchstart="" class="bg-dark text-white">
    <header class="jumbotron display-4 text-center pt-4">Hi, My Name is ${data.name}</header>
    <main>
      <div class="text-center mt-5"><h2>${data.description}</h2></div>
      <div class="card mx-auto mt-5 pb-4 bg-light" style="width: 24rem;">
        <img style="-webkit-user-drag: none;"src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2796&q=80" class="card-img-top" alt="background abstract image">
        <div class="card-body">
          <h5 class="card-title text-center text-dark pb-3">Contact Me:</h5>
          <div class="card-text text-center">
          <a href="${data.github}" class="btn btn-primary" target="_blank">GitHub</a>
          <a href="${data.linkedin}" class="btn btn-primary" target="_blank">LinkedIn</a>
          <a href="mailto:${data.email}?subject=Contact From Website&body=Hi ${data.name}," class="btn btn-primary" target="_blank">Email</a>
        </div>
      </div>
      </div>
    </main>
    
  </body>
  </html>
  `

  return content;
};

module.exports = generateHTML;