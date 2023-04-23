const menu = [
    {id: 1,
    category: 'dinner',
    image: 'lion1.jpg',
    name: 'Fried Steak',
    price: 30,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, et.'
    },
    {id: 2,
    category: 'shakes',
    image: 'lion1.jpg',
    name: 'Orange Parfait',
    price: 12,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, et.'
    },
    {id: 3,
    category: 'shakes',
    image: 'lion1.jpg',
    name: 'Milk Parfait',
    price: 15,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, et.'
    },
    {id: 4,
    category: 'lunch',
    image: 'lion1.jpg',
    name: 'Chicken Soup',
    price: 20,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, et.'
    },
    {id: 5,
    category: 'breakfast',
    image: 'lion1.jpg',
    name: 'Bacon',
    price: 5,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, et.'
    },
    {id: 6,
    category: 'lunch',
    image: 'lion1.jpg',
    name: 'Fried Rice',
    price: 20,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, et.'
    },
    {id: 7,
    category: 'breakfast',
    image: 'lion1.jpg',
    name: 'Tea & Bread',
    price: 10,
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, et.'
    }
]


const menuContainer = document.querySelector('.menu-container');
const btnContainer = document.querySelector('.menu-btns')

window.addEventListener('DOMContentLoaded', ()=>{
    updateMenuList(menu);
    
    updateMenuBtns();
    

})





function updateMenuList(arr){
    let newItems = arr.map(item => {
       return`<article>
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
        <div class="upper">
            <h3>${item.name}</h3>
            <h4 class="price">$ ${item.price}</h4>
        </div>
            <p class="desc">${item.desc}</p>
        </div>
    </article>`;
        
    }).join("");

    menuContainer.innerHTML = newItems;
}
//console.log(updateMenuList(menu));
function updateMenuBtns (){
    const finalBtns = menu.reduce((values, item) => {
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    }, ['all'])

    const newBtns = finalBtns.map((btn)=>{
        return `<button class="menu-btn" data-id="${btn}">${btn}</button>`
    }).join("");

    btnContainer.innerHTML = newBtns;
    const menuBtns = document.querySelectorAll('.menu-btn');

    menuBtns.forEach((btn) => {
        btn.addEventListener('click', (e)=>{
            const btnCategory = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((item)=>{
                if(item.category === btnCategory){
                    return item;
                }
            })
            if(btnCategory === 'all'){
                updateMenuList(menu)
            }else{
                updateMenuList(menuCategory)
            }
        })
    })
    
}
