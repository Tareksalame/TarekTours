let menu = document.getElementById('menuDiv');
let titleDiv = document.getElementById('titleDiv');
menu.style.display = 'none'
titleDiv.style.display = 'flex'
let flag = false 
let show =()=>
{
    if(flag == false)
    {
        flag = true
        titleDiv.style.display = 'none'
        menu.style.display = 'flex'
    }
    else
    {
        flag = false
        titleDiv.style.display = 'flex'

        menu.style.display = 'none'
    }
}
let imgArr = []
let attributeArr = [] 
for(let i = 1 ; i < 11 ; i++)
{
    let src = "./images/blogsImages/" + i + ".JPG"
    imgArr.push(src)
}
let arrFunction = (val,idx)=>
{
    let photosDiv = document.getElementById('blogDiv1');
    let img = document.createElement('img');
    photosDiv.appendChild(img)
    img.setAttribute('id','img'+idx)
    img.setAttribute('class','images')
    img.style.border = 'black solid 5px'
    img.style.borderRadius = '10px'
    img.src = val
}

imgArr.forEach((val,idx)=>
{
    arrFunction(val,idx)
})


const signNow = ()=>
{
    let fullName = document.getElementById('fullName')
    let email = document.getElementById('email')
    let makdema = document.getElementById('makdema')
    let phoneNumber = document.getElementById('phoneNumber')
    let selector = document.getElementById('selector')
    let message = document.getElementById('message')
    let signYourSelfButton = document.getElementById('signYourSelfButton')
    console.log(fullName.value, email.value,makdema.value, phoneNumber.value, selector.value,message.value)
    if(selector != 'click')
    {
        fetch('/register',{
          headers : {
            "Content-Type": "application/json"
        },
        method : 'post',
        body : JSON.stringify({
            fullName:fullName.value,
            email:email.value,
            makdema:makdema.value,
            phoneNumber:phoneNumber.value,
            selector:selector.value,
            message:message.value
        })
    }).then((res)=>{return res.json()}).then((data)=>
    {
        let register = document.getElementById('register')
        if(data != null)
        {
            register.innerHTML = 'تم التسجيل بنجاح، سنتواصل معك قريبًا'
            fullName.style.display = 'none'
            email.style.display = 'none'
            phoneNumber.style.display = 'none'
            makdema.style.display = 'none'
            selector.style.display = 'none'
            message.style.display = 'none'
            signYourSelfButton.style.display = 'none'
        }
    })
}}

let optionsArr = [];
let first = '05'
for(let i = 0 ; i <= 9 ; i ++)
{
    optionsArr.push(first + i)
}

const options = (val)=>
{
    let makdema = document.getElementById('makdema');
    let option = document.createElement('option');
    makdema.appendChild(option);
    option.value = val;
    option.text = val;
}

optionsArr.map((val)=>
{
    options(val)
})


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }else
        {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>{observer.observe(el)})