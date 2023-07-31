const admin = ()=>
{
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    if(userName == 'admin' && password=='barmorad71!')
    {
        fetch('/admin',
        {
            headers : {
                "Content-Type": "application/json"
            },
            method : 'post',
            body : JSON.stringify({
                userName:userName,
                password:password
            })
        }).then((res)=>{return res.json()})
        .then((data)=>
        {
            if(data == 'admin')
            {
                window.location.href = '/admin.html'
            }
        }).catch((err) =>{return err})
    }
    else
    {
        alert('User Or Password Is Incorrect')
    }
}
