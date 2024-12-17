 
    // filter the products
    
    const searchInput = document.getElementById("search_bar");
    const productItems = document.querySelectorAll(".product-item");
    
    if (searchInput && productItems) {
      searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        
        productItems.forEach(product => {
          const productName = product.querySelector(".product-name");
    
          if (productName) {
            const productText = productName.textContent.toLowerCase();
    
            if (productText.includes(filter)) {
              product.style.display = '';  // Show product
            } else {
              product.style.display = 'none';  // Hide product
            }
          }
        });
      });
    }
    
    

    // toggle the filter 

    const filterButton = document.getElementById('toggle');
    const widgetSection = document.getElementById('widget');

   
    filterButton.addEventListener('click', () => {
        
        if (widgetSection.style.display === 'none' || widgetSection.style.display === '') {
            widgetSection.style.display = 'block';  // Show the widget section
        } else {
            widgetSection.style.display = 'none';   // Hide the widget section
        }
    })




    // toggle the search_bar


    const searchIcon = document.getElementById('search_icon');
    const search = document.getElementById('search_bar');

   
    searchIcon.addEventListener('click', function() {
        
        if (search.style.display === 'none' || search.style.display === '') {
            search.style.display = 'block';  // Show the input field
        } else {
            search.style.display = 'none';   // Hide the input field
        }
    });


  // toggle the menu


    const menuButton = document.getElementById('menu_button');
    const menuList = document.getElementById('menu_list');

    menuButton.addEventListener('click', () => {
        if (menuList.style.display === 'none' || menuList.style.display === '') {
            menuList.style.display = 'block'; // Show the menu
        } else {
            menuList.style.display = 'none'; // Hide the menu
        }
    });


    
  
