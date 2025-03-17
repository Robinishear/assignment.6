function login(){
    let name=document.getElementById("name").value;
    let pass=document.getElementById("pass").value;
          name=name.replace(/\s/g, '');
          pass=parseInt(pass);
     if(name===null || name===undefined || name===''){
             alert("Please enter your name");
             return;
        }
     if(pass!==123456) {
        alert("Wrong password");
        return;
     } 
     setTimeout(()=>{
            document.querySelector(".success").classList.add("hidden");
            document.querySelector(".success").classList.remove("inline-flex");
            document.querySelector(".show").classList.remove("hidden");
            document.querySelector(".show").classList.add("flex");
            document.querySelector(".show2").classList.remove("hidden");
            document.querySelector(".show2").classList.add("block");
            document.querySelector(".herro").classList.remove("flex");
            document.querySelector(".herro").classList.add("hidden");
     },1500)

     document.querySelector(".success").classList.remove("hidden");
     document.querySelector(".success").innerHTML=`
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="font-[600]">Login successful!</span>
                               `
     document.querySelector(".success").classList.add("inline-flex");
     document.querySelector(".success").classList.add("bg-[#422AD5]");
     document.querySelector(".success").classList.remove("bg-red-800");

    console.log(name,pass);
}