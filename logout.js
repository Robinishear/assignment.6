function logout(){
    setTimeout(()=>{
           document.querySelector(".success").classList.add("hidden");
           document.querySelector(".success").classList.remove("inline-flex");
           document.querySelector(".show").classList.add("hidden");
           document.querySelector(".show").classList.remove("flex");
           document.querySelector(".show2").classList.add("hidden");
           document.querySelector(".show2").classList.remove("block");
           document.querySelector(".herro").classList.add("flex");
           document.querySelector(".herro").classList.remove("hidden");
    },1500)
    
    document.querySelector(".success").classList.remove("hidden");
    document.querySelector(".success").innerHTML=`
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                                   <span class="font-[600]">Logout successful!</span>
                              `
    document.querySelector(".success").classList.add("inline-flex");
    document.querySelector(".success").classList.remove("bg-[#422AD5]");
    document.querySelector(".success").classList.add("bg-red-800");
}