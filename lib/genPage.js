const fs = require('fs');
// const Form = require('../lib/Form');

module.exports = response => {
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
            <div class="p-3 hover:bg-gray-100 hover:text-gray-700">Showing ${response.manager.name}'s team!</div>
        </div>
      </div>
    </div>
  </nav>

  <main class="py-24 flex items-center justify-center">
      <div class="text-indigo-900 bg-indigo-50 rounded-lg shadow-2xl">
        <h4 class="bg-indigo-900 text-indigo-50 rounded-t-lg py-5 px-8">Project Manager</h4>
        <div class="p-8">
            <p class="py-1">Name: ${response.manager.name}</p>
            <p class="py-1">ID#: ${response.manager.id}</p>
            <p class="py-1">Email: <a href="${response.manager.email}">${response.manager.email}</a></p>
            <p class="py-1">Phone Number: ${response.manager.number}</p>
        </div>
      </div>

    </main>



</body>
</html>

`
}