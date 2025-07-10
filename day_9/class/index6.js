const myPromise= async()=>{
    const response= await fetch("https://fakestoreapi.in/api/products");

    const res = await response.json()
    console.log(res.products)
    const data=res.products;
    showData(data)
}
myPromise()
 async function showData(data){
    const parent=document.getElementById("parent")
    // console.log(Data)
    data.forEach((ele) => {
        
        // console.log(ele)
        // const parent=document.getElementById("parent")
    
         const h2= document.createElement("h2")
        h2.innerText=ele.brand

        const image=document.createElement("img")
        image.src=ele.image
        image.style.width="100px"
        image.style.height="100px"

        const p1=document.createElement("p")
        p1.innerText=ele.title

        const p2=document.createElement("p")
        p2.innerText=ele.price

        const p3=document.createElement("p")
        p3.innerText=ele.discount

        const p4=document.createElement("p")
        p4.innerText=ele.model

        const btn=document.createElement("button")
        btn.innertext="By Now"
        btn.style.backgroundColor="grey"
        btn.style.width="50%"
        btn.style.height="50px"
        btn.style.borderRadius="20px"
        btn.style.marginLeft="50px"
        btn.style.padding="5px 10px"
        btn.style.marginTop="10px"
        btn.addEventListener("click",()=>{
            alert(`you click to buy:${ele.title}`);
        });
        
        const productDiv=document.createElement("div");
        productDiv.style.border="1px solid black"
        productDiv.style.padding="10px"
       
       productDiv.append(h2,image,p1,p2,p3,p4,btn)

        
        parent.append(productDiv)
    });
}