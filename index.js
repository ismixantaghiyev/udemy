let data = [
    {
        id:1,
        img:"http://127.0.0.1:5503/images/Screenshot%20(1).png",
        name:"(40+ Saat) Python | Sıfırdan İleri Seviye Programlama...",
        author:"Mustafa Murad Coşkun",
        price:74.99,
    },
    {
        id:2,
        img:"http://127.0.0.1:5503/images/Screenshot%20(2).png",
        name:"(100+ Saat) Aranan Programcı Olma Kamp...",
        author:"Engin Demiroğlu",
        price:64.99,
    },
    {
        id:3,
        img:"http://127.0.0.1:5503/images/Screenshot%20(3).png",
        name:"Python Programlama Eğitimi A-Z™ - (71.000+ ...",
        author:"Mehmet TEK, Rexven Academy",
        price:119.99,
    },
    {
        id:4,
        img:"http://127.0.0.1:5503/images/Screenshot%20(4).png",
        name:"Python 3: A' dan Z' ye Programlama...",
        author:"Volkan Tasci",
        price:34.99,
    },
    {
        id:5,
        img:"http://127.0.0.1:5503/images/Screenshot%20(5).png",
        name:"Python Programlamaya Giriş İçin Temel Kurs ...",
        author:"Engin Demiroğ",
        price:44.99,
    },
]

const boxHTML = document.querySelector(".boxFlex")


function show(){
    data.map((element) =>{
        boxHTML.innerHTML +=`
                        <div   class="boxContent">
                        
                        <div><img src="${element.img}" alt=""></div>
                        <h3>${element.name}</h3>
                        <p>${element.author}</p>
                        <div class="iconAndSpan">
                            <span>4,4</span>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <span >${element.price}</span>
                        </div>
                        <h4>74,99 $</h4>
                        <button onclick="addToBusket(${element.id})" >En çok satan</button>
                    </div>`
})
}

show()


// const busket = document.querySelector("busket")
function addToBusket(id) {
    console.log(id);
    // busket.innerHTML = id
}