 const menu=[
     {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
     },
     
     {
        id: 2,
        title: "dinner double",
        category: "lunch",
        price: 13.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
     },
     
     {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
     {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
 ]

 const btnConatiner = document.querySelector(".btn-container")
 const foodItems = document.querySelector(".food-items")

 window.addEventListener("DOMContentLoaded", function(){
     displayMenuItems(menu)
     displayMenuButtons()
 })

 function displayMenuItems(menuItems){
     let displayMenu = menuItems.map(function(item){
         return `<article class="food-item">
                  <img src= ${item.img} />
                  <div class="food-info">
                   <header>
                      <h3 class="food-title">${item.title}</h3>
                      <h4 class="price">$${item.price}</h4>
                   </header>
                     <p class="food-detail">
                     ${item.desc}
                     </p>
                  </div>
                  </article>`;

     })
     displayMenu= displayMenu.join("") // converts array obtained from .map into string
     foodItems.innerHTML= displayMenu;
 }

 function displayMenuButtons(){
     const category = menu.reduce (function( values, items){
      if(!values.includes(items.category)){
          values.push(items.category)
      }
      return values
     },
     ["all"]
     );
     let btnCategory = category.map(function(item){
       return `<button class="filter-btn" data-id=${item}>${item}
               </button>`
   })
     btnCategory =btnCategory.join("")
     btnConatiner.innerHTML=btnCategory;
   
  const filterBtn = btnConatiner.querySelectorAll(".filter-btn");

  filterBtn.forEach(function(btn){
      btn.addEventListener("click", function(e){
          const button = e.currentTarget.dataset.id
          const menuCategory = menu.filter(function(item){
              if(item.category === button)
              return item
          });
          if(button ==="all"){
              displayMenuItems(menu)
          }else{
            displayMenuItems(menuCategory)
          }
          
      });
  });
 }
 