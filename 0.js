console.log('hello!')
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>restaurant</title>
      <link rel="stylesheet" href="style.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
          href="https://fonts.googleapis.com/css2?family=Arimo&family=Bree+Serif&family=Bricolage+Grotesque:opsz@10..48&family=Caprasimo&family=Chewy&family=Corben&family=Dangrek&family=Delicious+Handrawn&family=Gochi+Hand&family=Handjet:wght@700&family=Lilita+One&family=Lumanosimo&family=Oswald:wght@200&family=Playfair+Display:wght@600;800&family=Poppins:wght@400;500;600;700&family=Preahvihear&family=Roboto:wght@300&family=Rubik+Wet+Paint&family=Sorts+Mill+Goudy&display=swap"
          rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
  </head>
  <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      width: 100%;
      height: 90%;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      background-color: rgb(218, 218, 218);
  }
  /* .allheaders{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap-reverse;
  } */
  
  /* hEADER-1 */
  
  .header1 {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      /* position: absolute; */
      /* align-items: flex-start; */
      top: 100px;
      z-index: 9;
      justify-content: space-between;
      /* border: 1px solid; */
  }
  
  /* LOGO */
  .logo {
      margin-left: 2%;
      font-weight: 600;
      /* border: 1px solid; */
      font-family: 'Sorts Mill Goudy', serif;
  }
  
  j {
      color: rgb(252, 85, 85);
  }
  
  /* NAVIGATON */
  
  .navigatio {
      display: flex;
  }
  
  ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      /* border: 1px solid green; */
      /* margin: 1px 20px; */
      /* padding: 0% 100%; */
      list-style: none;
      gap: 10%;
  }
  
  .tiam {
      /* margin: 0% 200px; */
      display: flex;
      /* font-weight: 1000; */
      /* gap: 1%; */
  }
  
  a {
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: rgb(189, 189, 189); */
      text-decoration: none;
      /* border-radius: 12px; */
      padding: 3px 15px;
      position: relative;
      /* border: 1px solid rgba(0, 0, 0, 0.172); */
      color: rgb(100, 92, 92);
  }
  
  a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 0;
      background-color: black;
      transition: all ease 1s;
  }
  
  a:hover::after {
      width: 100%;
  
  }
  
  
  
  
  /* SEARCH */
  .search {
      margin-right: 4%;
      width: 20%;
      display: flex;
      padding: 1%;
      /* border: 1px solid; */
      justify-content: space-around;
  
  }
  
  .input1 {
      filter:drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.401));
      border-radius: 10px;
      border: 1px solid;
      padding: 2px;
      /* background: transparent; */
  }
  
  .btn {
      cursor: pointer;
      border-radius: 20px;
      border: 1px solid black;
      padding: 0% 2%;
      font-weight: 600;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
      background-color: rgb(230, 130, 24);
  }
  
  .btn:hover {
      color: white;
  }
  .msearch{
      display: none;
  }
  
  /* HEADER-2 */
  .header2 {
      width: 100%;
      height: 90vh;
      display: flex;
      /* flex-wrap: wrap; */
      position: relative;
      overflow: hidden;
      /* border: 1px solid; */
      /* background-color: rgb(0, 0, 0); */
      /* z-index: -1; */
  }
  
  .text {
      width: 50%;
      height: 100%;
  
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      /* flex-wrap: wrap; */
      text-align: center;
      /* margin: 10%; */
      /* border: 1px solid; */
  
  
      /* position: absolute; */
      /* background-color: brown; */
  }
  
  .lika {
      margin: 2%;
      font-family: 'Preahvihear', sans-serif;
  }
  
  #welcome {
      font-size: 500%;
  }
  #Now{
      /* width: 10%; */
      font-size: 150%;
      padding: 1% 5%;
      margin-top: 10%;
      font-weight: 900;
  }
  .input{
      /* padding: 2px 20px; */
      font-size: 120%;
      font-weight: 100;
      margin-top: 2%;
      border-radius: 10px;
  filter:drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.401));
  
      border: 1px solid;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
  
  }
  .animation {
      width: 50%;
      height: 90vh;
  
  margin-top: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      /* border: 1px solid; */
  
      /* background-image: url(background.png); */
      /* background-color: aqua; */
  
  }
  
  .all-image {
      position: absolute;
      width: 350px;
      height: 350px;
      /* border: 1px solid; */
      /* background-color: blue; */
      /* animation: circle 20s infinite linear; */
      /* z-index: -1; */
      animation: circle 25s infinite linear;
  }
  
  .image01 {
      position: absolute;
      width: 400px;
      height: 300px;
      top: -25%;
      right: -45%;
      /* border: 1px solid; */
  border-radius: 5000px;
  filter:drop-shadow(0px 0px 5px);
      /* display: inline-block; */
      /* display: flex; */
      margin-top: 20%;
      animation: circle 7s infinite linear;
  
  
  }
  
  .image02 {
  border-radius: 5000px;
  /* border: 1px solid; */
  
      position: absolute;
      width: 200px;
      height: 200px;
      left: -20%;
      top: -10%;
  filter:drop-shadow(0px 0px 5px);
  
      animation: circle 10s infinite linear;
  
  }
  
  
  .image03 {
  border-radius: 5000px;
  /* border: 1px solid; */
  
      position: absolute;
      bottom: -35%;
      width: 150px;
      height: 150px;
      left: 30%;
      filter:drop-shadow(0px 0px 5px);
  
      animation: circle 15s infinite linear;
  
  }
  .manu{
      display: none;
  }
  
  
  @keyframes circle {
      0% {
          rotate: 0deg;
      }
  
      100% {
          rotate: 360deg;
      }
  }
  
  
  @media (max-width:1200px){
      *{
          margin: 0;
          padding: 0;
      }
      body{
          /* background-color: aqua; */
          width: 100vw;
          height: 100vh;
      }
      .search{
          display: none;
          
      }
      /* .msearch{
          display: inline;
          display: flex;
      } */
      /* a{
          display: inline;
          padding: none;
      } */
      .header1{
          width: 100%;
          height: 10vh;
      }
      .logo{
          font-size: 250%;
          padding: 0px;
      }
      .header1{
      align-items: center;
      justify-content: space-around;
      display: flex;
      }
      a{
          display: none;
  
      }
      .manu{
          display: initial;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          /* left: -10%; */
      }
      .msearch{
          display:initial;
          font-size: 200%;
      }
      #idmanu{
          margin: 0px 20%;
  
      }
  
      /* .allheaders{
          position: absolute;
      } */
      #div1and2{
          display: flex;
          width: 100vw;
          height: 50vh;
          position:absolute;
          flex-flow: column;
          border: 1px solid;
          
          
      }
      .text{
          display: flex;
          padding: 0;
          /* align-items: center; */
          justify-content: center;
  
      }
      .animation{
          margin-top:40vh;
          /* position: relative; */
          width: 50vw;
          height: 10vh;
          overflow: hidden;
      }
      
  
  
  
  }
  @media (max-width:500px){
      body{
          background-color: blueviolet;
      }
      .text{
          width: 50vw;
          height: 50vh;
      }
      /* .lika{
          width: 50%;
          height: 50%;
      } */
      .allheaders{
          display: flex;
          position: relative;
          flex-direction: column;
      }
      .logo{
          font-size: 100%;
      }
      .animation{
          display: none;
      }
  }
  
  </style>
  
  <body>
      
          <header class="header1">
              <div class="logo">
                  <h2>In<j>j</j>u House</h2>
              </div>
              <div class="navigation">
                  <ul>
                      <li class="itam"><a href="#">Menu</a></li>
                      <li class="itam"><a href="#">Categoried</a></li>
                      <li class="itam"><a href="#">About</a></li>
                      <li class="itam"><a href="#">Content</a></li>
                      <div class="manu" id="idmanu"><i class="ri-menu-3-line"></i></div>
                      <div class="msearch" id="idmanu"><i class="ri-search-2-line"></i></div>
                  </ul>
              </div>
              <div class="search">
                  <input type="text" class="input1">
                  <button class="btn">Search</button>
                  
             
          </header>
      <header class="allheaders">
  
          <header class="header2">
              <div class="text" id="div1and2">
                  <h1 class="lika" id="welcome">Welcome</h1>
                  <p class="lika">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis maiores veniam quos
                      saepe dolorem, hic iusto explicabo exercitationem architecto odio reprehenderit consectetur eveniet
                      molestiae provident asperiores est maxime cupiditate excepturi fuga ipsam tempore? Facere!</p>
                      <input type="text" class="input" placeholder="Order now">
                      <button class="btn" id="Now">Now</button>
              </div>
              <div class="animation" id="div1and2">
                  <img class="background" src="background.png" alt="">
                  <div class="all-image">
                      <img class="image01" src="01.png">
                      <img class="image02" src="02.png">
                      <img class="image03" src="03.png">
  
                  </div>
              </div>
  
          </header>
      </header>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});