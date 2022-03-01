
function engineerCard (engineerInput) {
  let output = '';
  console.log(engineerInput);
  for (var i = 0; i < engineerInput.length; i++) {
    output += `
    <div class="text-indigo-900 bg-indigo-50 rounded-lg shadow-2xl">
          <h4 class="bg-indigo-900 text-indigo-50 rounded-t-lg py-5 px-8">Engineer ${i+1}</h4>
          <div class="p-8">
              <p class="py-1">Name: ${engineerInput[i].name}</p>
              <p class="py-1">ID#: ${engineerInput[i].id}</p>
              <p class="py-1">Email: <a href="${engineerInput[i].email}">${engineerInput[i].email}</a></p>
              <p class="py-1">Github Page: <a href="${engineerInput[i].githubPage}">${engineerInput[i].githubName}</a></p>
          </div>
        </div>
    `
  }
  return output;
}

function internCard (internInput) {
  let output = '';
  console.log(internInput);
  for (var i = 0; i < internInput.length; i++) {
    output += `
    <div class="text-indigo-900 bg-indigo-50 rounded-lg shadow-2xl">
          <h4 class="bg-indigo-900 text-indigo-50 rounded-t-lg py-5 px-8">Engineer ${i+1}</h4>
          <div class="p-8">
              <p class="py-1">Name: ${internInput[i].name}</p>
              <p class="py-1">ID#: ${internInput[i].id}</p>
              <p class="py-1">Email: <a href="${internInput[i].email}">${internInput[i].email}</a></p>
              <p class="py-1">Github Page: <a href="${internInput[i].githubPage}">${internInput[i].githubName}</a></p>
          </div>
        </div>
    `
  }
  return output;
}

module.exports = input => {
    // console.log(response)
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>TeamHub-Generator</title>
</head>

<body class="bg-indigo-200">
<nav class="bg-indigo-800 text-indigo-50">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between">
        <div class="flex w-full lg:w-1/2 justify-center lg:justify-start">
          <h1 class="text-xl font-bold p-3">TeamHub-Generator</h1>
        </div>
        <div class="flex flex-row w-full lg:w-1/2 justify-center lg:justify-end">
            <div class="p-3 hover:bg-gray-100 hover:text-gray-700">Showing ${input.manager.name}'s team!</div>
        </div>
      </div>
    </div>
  </nav>

  <main class="py-24 flex items-center justify-center">
      <div class="text-indigo-900 bg-indigo-50 rounded-lg shadow-2xl">
        <h4 class="bg-indigo-900 text-indigo-50 rounded-t-lg py-5 px-8">Project Manager</h4>
        <div class="p-8">
            <p class="py-1">Name: ${input.manager.name}</p>
            <p class="py-1">ID#: ${input.manager.id}</p>
            <p class="py-1">Email: <a href="${input.manager.email}">${input.manager.email}</a></p>
            <p class="py-1">Phone Number: ${input.manager.number}</p>
        </div>
      </div>

      <div id='engineerContainer'>
        ${engineerCard(input.engineer)}
      </div>

      <div id='engineerContainer'>
        ${internCard(input.intern)}
      </div>

    </main>



</body>
</html>

`
}