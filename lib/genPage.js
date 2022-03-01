
function engineerCard (engineerInput) {
  let output = '';
  console.log(engineerInput);
  for (var i = 0; i < engineerInput.length; i++) {
    output += `
    <div class="bg-indigo-50 rounded-lg shadow-2xl m-8">
          <h4 class="bg-indigo-900 text-indigo-50 rounded-t-lg py-5 px-8">Engineer ${i+1}</h4>
          <div class="p-8">
          <p class="py-1"><span class="font-medium">Name:</span> ${engineerInput[i].name}</p>
              <p class="py-1">ID#: ${engineerInput[i].id}</p>
              <p class="py-1"><span class="font-medium">ID#:</span> <a href="mailto:${engineerInput[i].email}" class="hover:text-indigo-900 hover:bg-indigo-100 hover:rounded hover:p-1">${engineerInput[i].email}</a></p>
              <p class="py-1"><span class="font-medium">Github Page:</span> <a href="${engineerInput[i].githubPage}" class="hover:text-indigo-900 hover:bg-indigo-100 hover:rounded hover:p-1">${engineerInput[i].githubName}</a></p>
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
    <div class="bg-indigo-50 rounded-lg shadow-2xl m-8">
          <h4 class="bg-indigo-900 text-indigo-50 rounded-t-lg py-5 px-8">Intern ${i+1}</h4>
          <div class="p-8">
              <p class="py-1"><span class="font-medium">Name:</span> ${internInput[i].name}</p>
              <p class="py-1"><span class="font-medium">ID#:</span> ${internInput[i].id}</p>
              <p class="py-1"><span class="font-medium">Email:</span> <a href="mailto:${internInput[i].email}" class="hover:text-indigo-900 hover:bg-indigo-100 hover:rounded hover:p-1">${internInput[i].email}</a></p>
              <p class="py-1"><span class="font-medium">University:</span> ${internInput[i].school}</p>
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

<body class="bg-indigo-200 text-black">
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

  <main>

    <section class="mt-8 flex center-items justify-center">
      <div class="bg-indigo-50 rounded-lg shadow-2xl m-8">
        <h4 class="bg-indigo-900 text-indigo-50 rounded-t-lg py-5 px-8">Project Manager</h4>
        <div class="p-8">
            <p class="py-1"><span class="font-medium text-indigo-900">Name:</span> ${input.manager.name}</p>
            <p class="py-1"><span class="font-medium text-indigo-900">ID#:</span> ${input.manager.id}</p>
            <p class="py-1"><span class="font-medium text-indigo-900">Email:</span> <a href="mailto:${input.manager.email}" class="hover:text-indigo-900 hover:bg-indigo-100 hover:rounded hover:p-1">${input.manager.email}</a></p>
            <p class="py-1"><span class="font-medium">Phone Number:</span> ${input.manager.number}</p>
        </div>
      </div>
    </section>

    <div class="flex center-items justify-center">
      <div class="grid grid-flow-col">
        <section id='engineerContainer'>
          ${engineerCard(input.engineer)}
        </section>

        <section id='engineerContainer'>
          ${internCard(input.intern)}
        </section>
      </div>
    </div>
  </main>



</body>
</html>

`
}