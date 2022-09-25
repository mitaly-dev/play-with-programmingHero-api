const loadData=async()=>{
    let res=await fetch(`https://openapi.programming-hero.com/api/course/curriculum?fbclid=IwAR1wueNtqHyQYNyZ5ZQ0_p32d7YQ67oXdlHJQZiAML9C4lGpEs-VYfk24u0`)
    let data=await res.json()
    data=data.data
    let accordion=document.getElementById('accordions')
    
    data.forEach(milestone => {
        let {name,image,modules,_id}=milestone
        let div=document.createElement('div')
        div.classList.add('accordion-item')
        div.innerHTML=
        `         <h2 class="accordion-header" id="panelsStayOpen-heading${_id}">
                        <button onclick='imgChange("${image}")' class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${_id}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${_id}">
                          ${name}
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapse${_id}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${_id}">
                        <div id="${name}-accor" class="accordion-body">
                        ${modules.map(module=>{
                          return `<p class="item">${module.name}</p>`
                        }).join('')}
                        </div>
                      </div>
        `
        accordion.appendChild(div)
    });
}
loadData()

const imgChange=(image)=>{
  let img=document.getElementById('milestone-img')
  img.src=image
  console.log(image)
}