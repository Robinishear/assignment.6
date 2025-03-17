function word_info(){
    document.querySelectorAll(".details").forEach(element => {
        element.addEventListener("click",async()=>{
          const id=element.getAttribute("data-id");
          if (!id) {
            console.log("No data-id found for this element");
            return; // Stop execution if there's no ID
          }
    
          const data= await data_fetch(`https://openapi.programming-hero.com/api/word/${id}`);
          console.log(id);
          const synonyms=data.synonyms;
          let el='';
                synonyms.forEach(element=>{
                     if(element!=null || element!=undefined) el+=`
                           <p class="bg-green-300 p-2 rounded-sm">${element}</p>
                     `
                }) 
            if(el==='') el=`<p class="bg-green-300 p-2 rounded-sm">"খুঁজে পাইনি"</p>`;

          document.querySelector(".popup").classList.remove("hidden");
          document.querySelector(".popup").innerHTML=`
                                <div class="popup-box space-y-5 min-w-80  rounded-xl fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-4">
                                <h1 class="inline-flex items-center justify-center gap-x-2 font-bold text-2xl">${data.word}(
                                    <span class="flex relative  flex-col items-center justify-start">
                                        <svg width="12.083008" height="20.555908" viewBox="0 0 18.083 24.5559" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs/>
                                            <path id="Vector" d="M5.16 16.79L0.09 16.79C0.4 18.95 1.47 20.92 3.12 22.34C4.76 23.77 6.86 24.55 9.04 24.55C11.21 24.55 13.31 23.77 14.96 22.34C16.6 20.92 17.68 18.95 17.99 16.79L12.91 16.79L12.91 14.21L18.08 14.21L18.08 10.34L12.91 10.34L12.91 7.75L17.99 7.75C17.68 5.6 16.6 3.63 14.96 2.2C13.31 0.78 11.21 0 9.04 0C6.86 0 4.76 0.78 3.12 2.2C1.47 3.63 0.4 5.6 0.09 7.75L5.16 7.75L5.16 10.34L0 10.34L0 14.21L5.16 14.21L5.16 16.79Z" fill="#000000" fill-opacity="1.000000" fill-rule="nonzero"/>
                                        </svg>
                                        <svg class="absolute -bottom-1" width="20.000000" height="14.208374" viewBox="0 0 31 14.2084" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <desc>
                                                Created with Pixso.
                                            </desc>
                                            <defs/>
                                            <path id="Vector" d="M28.41 0C28.41 3.08 27.18 6.03 25 8.21C22.82 10.39 19.87 11.62 16.79 11.62L14.2 11.62C11.12 11.62 8.17 10.39 5.99 8.21C3.81 6.03 2.58 3.08 2.58 0L0 0C0 3.76 1.5 7.37 4.16 10.04C6.83 12.7 10.44 14.2 14.2 14.2L16.79 14.2C20.55 14.2 24.16 12.7 26.83 10.04C29.49 7.37 30.99 3.76 31 0L28.41 0Z" fill="#000000" fill-opacity="1.000000" fill-rule="nonzero"/>
                                        </svg>                  
                                    </span>
                                    <p>:${data.pronunciation}</p>
                                    )</h1>

                                    <div>
                                    <p class="font-bold text-md">Meaning</p>
                                    <p>${data.meaning || "খুঁজে পাইনি"}</p>
                                    </div>

                                    <div>
                                    <p class="font-bold text-md">Example</p>
                                    <p>${data.sentence || "খুঁজে পাইনি"}</p>
                                    </div>

                                    <div>
                                      <p class="font-semibold text-md">সমার্থক শব্দ গুলো</p>
                                      <div class=" flex flex-wrap items-center justify-start gap-3">
                                         ${el}
                                       </div>  
                                    </div>

                                    <button class="complete bg-[#422AD5] px-6 py-2 rounded-md text-white" type="button">Complete Learning</button>
                            </div>
                     `; 

                     document.querySelector(".complete").addEventListener("click",()=>{
                        document.querySelector(".popup").classList.add("hidden");
                    })       
        })
    });

}