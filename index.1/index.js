
const showUser = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
  .then(response => response.json())
  .then(data => displayLessonsBtns(data.data))
};
function displayLessonsBtns(lessons) {
    let lessonsContainer = document.getElementById("lessons-container");
    console.log( lessons)
    for (let i = 0; i < lessons.length; i++) {
      let lessonBox = document.createElement("div");
      lessonBox.innerHTML = `<button onclick="getWords(${lessons[i].level_no})" id="btn-${i}" class="border border-[#422AD5] rounded-sm px-3 py-2 text-[#422AD5] flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white group"
            >
              <img
                class="group-hover:brightness-0 group-hover:invert"
                id="img-${i}"
                src="./assets/fa-book-open.png"
                alt="Book icon"
              />
              <p>Lesson-${lessons[i].level_no}</p>
            </button>`;
      lessonsContainer.appendChild(lessonBox);
    }
  }


function getWords(lessonId) {
  let delet=document.getElementById("delet");
  delet.innerHTML='';
  let box= document.getElementById("cards-container");
      box.innerHTML = "";
      box.innerHTML=`<div class="col-span-full inline-flex items-center justify-center"><div id="loader" class="loader"></div></div>`;
      fetch(`https://openapi.programming-hero.com/api/level/${lessonId}`)
      .then(response => response.json())
      .then(data =>{
        box.innerHTML = "";
        const words=data.data;
              if(words===420){
                    box.innerHTML=`<div class="text-xl font-[700] col-span-full inline-flex items-center justify-center">This is under  Maintenance </div>`;
                    return
              }
       if(words.length===0){
          box.innerHTML=`
              <div class="col-span-full flex flex-col items-center justify-center gap-y-3">
                  <svg width="96.000000" height="96.000000" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>
                        Created with Pixso.
                    </desc>
                    <defs>
                      <pattern id="pattern_419_2400" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                        <use xlink:href="#image419_240_0" transform="matrix(0.010417,0,0,0.010417,0,0)"/>
                      </pattern>
                      <image id="image419_240_0" width="96.000000" height="96.000000" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAADGFJREFUeJztXd1vHLcRnxnenU5OJUuxE0Wyopyts046fzSp0CRFX4y0DfoH1H9mX/vQ16JvfShQJLBTF3ESFDKSSLXjT512Z/pwyzWXR3K5p/sysj/g4N3lcpY7Q85vOOTKADVq1KhRo0aNGjVq1Pi5AefdgHHQ6/W2EHGPmdcAABHxiYjc/+qrr/4777ZVxRtlgO3t7eV2u/25UqoDACgiCMN3QBFBIvpWKfWXL7/88tl8WxoPNe8GxKLb7S61Wq27ALAhIoCIgPi6/yAiiMiaiHTX19e/ODk5SefX2njQvBsQCyL6DAAult0nImtKqT/OoEkTwRthgP39/Q4AXAUAQUQBAGFmMc+NY2DmvW63uzu3BlfAwhvgzp07DRH5rauMmc3TgkGI6LM7d+40ZtDEc2HhOWBpaelXAHDV9vfmcXaO1m/5xYsX/OOPP3430wZXxEKPgG63uyoiH1o9vYCAK5IkST7pdDprM2ruWFhoAzQajd+ICIGlWOvYC0RsNJvNz2bQ1LGxsAbo9/s7zLyjzx2jIIaQBQB2F5mQF9IAd+/eVWmafgqWUiGy51tYaEJeVBL+UEQ6YBGriKBrAgYA4JucwYIT8sKNgF6vt5IkyS0wers5CkoIGQAA3iRCXjgDiMjHIjIyMgOuaMRNueQuKiEvlAG63e42AGyDm1hzBEbBG0fIi2QARUS/dlx3uiL7XKchytBoNH63SIS8MCTc6/VuAcAOwAix2jNck5D1OTjq+ci6/fz5czk+Pl4IQl6IEdDv93+BiDfMa77e7rk+Apeb0nXTNP14UQh5IQwwGAwORYQs5QJA0N8H0xCecwBYLEKeuwH29vauIOKVNB2un7iUaSvaJOZxw1JYEEKetwGUiHwE1We4MYQcDEsBFoOQ50rCBwcHN0RkGzIiLSFPb+rZImTzt/CEPDfr3759+63BYNCDYY+FbIG9DJKm6Z+UUsjMiIgEmQGYGbKF+T8D5GvEpTJF5ONOp/PFw4cPH5/zlcbC3FzQq1evPhIRZfv1ELEyMxCRpGkqiCgiwoiof6ariZYpInMl5LkY4ODgYBMR34MxfT4RCTMLIub/ZtdtQ+QIpbNhjoQ8DwOowWDwS90rwRHdhNIQUGIE8PR0x3kB8yLkmRvg+vXre0R0oey+LCwdUaaI6HMmIgYA1kYQkZhsqdNAaZpePDo6+uTcL1gRMzXA7du331JKde2eDo5R4HMliMiZEUwwIgoisi3PPg61T0RmnrKeqQFevnx5k5kLoa+egJkIkWfmblhEWEQYALTSObs/mIYoIWQ1a0KemQFu3ry5QUQbnp4e9M8mTN8PQ6XlbomIStMQJZg5Ic/KAGowGNz0FRqjoJSQEZGJiG3iFRFJ03QkhxST2jCOAWC2hDwTA+zv7++KyLKv91dJQ2QTLtFGIKKcjI0w1FS0V46BuRHy1A2wtbV1gZl3AQCSJPHdFiRks8dqos3gIuRcpi3PPgbwk/2sCHnqBlhdXT2AYV5GK9Ab7bgI2SorGELPikWEjZFQkDluOltEVLvdnjohT9UAu7u77zLzu+Y1cxTEELJtKK3kTIQYRvDK8skua7+IdKdNyNM0ALVarX2XIjOydCqgLCzNeq2ZA2IiYsMIIxh3Vx0zy7QJeWoG6Ha7V0Vk2VUWcEWlPdUMP3VaGRF1Hoh9snzyfJgVIU/FANvb28tE1EmSxOn3AYKEHAxLjQlYlnlgPQuOiXq8Pd0uM+tOk5CnYoDl5eVetqvZRkGhY4alAvC6hxIRa0PoSZpH1ti76qZJyBM3wN7e3mVEvATZC1ijoIBxwlKdigAAztYDcrk+Dogk5KB7mhYhT9oARETXHde9PV4TcmxYqo2Qpqk5I84nY+B2KTnG3VU3LUKeqAH29/d3RKRtKzvk703EELJ2OQCg13vt9QATVcLSUojIxAl5YgbodDrtNE13zGuWEUpHgUuuYxTkky6dDUXEPDdkEasToTRE2ZLopAl5YgZQSnWz3QmVehVAtbBUu3mzTlaWjwxfb49NQ4TmDZMm5IkY4MaNG28T0dsAQ2L1RTrnDEv1vXnP1+Go4wcAE91VV8AkCXkSBqAkSa5ZPTIWVcLSvI69MwIM4wCEXYrZxnGXLydJyOc2QL/f3xaRNsBrt6B7OjgUWzUstRXJzGdZ1JOTr2GEGMTmiYLyRGRtEoR8LgN0Op22iGxV7fkxhOySmaYpKKWeAQzXhnUYqmfHxrwgNAoKGHf5MjP+p7du3VqPfW8XzmWAVqvV0bua7R4fGgWR4n2u6IiHWhPEYQ4IACBiFMQQcqWOJCI0GAx+H3u/C2MbYGdnZ52Z15Ik8TbYdikVw1In0jQ9AoCfsswoayMQUe6KfCGkD2MuX2qZV89DyOMagJaWlj6wGxVBqDEoI+RURP4FAD8BDKMZY5Lmeoa3t5vXK8wbCjKZWZRSfzg8PGxGvl8BY+2O3tvb20LEdch2ITMzEpHzUyJmRqWGj0FrhzIzgy4zyktlImJCRI8Q8QwAGszcGObiCETkIRZ3Q0ftotbPt9voKbPb0x4MBjzOLuvKBuh2u0uNRuOq/mhag4i8jfcpEgByJePr3H7+LxGNXNPis426TxHxESJ+R0TfiMg38Np4UR90m0YPGKj0I3EiurK5uXnv+++/f1VFn5Vd0NLS0vvMPFLPF0LGhqWuZzlkBvNEVd1dDCFXCEvVOIRcaQRcu3btolJq07wWGgXg6On2L+CKcjdlyB1xb7ZcX0835eoyV3tco6CCzPX19fVHJycn/4vVaZURQER05ezszHuD7rFVwtKYBwcIuTRt4EGQkB3nUTLHIeToEdDv9zeY+SIAeHusLgsRsu3zdf2SUVDo6Yh4CRF30zS9JiLvK6XWETEBgJdm3UCPjfH3I20sk5m1rX16eirHx8ffxug1ygD9fr+VpukHYvydTpeSdaNChGwo2UvItjyTkEVkR0Supmm6pJSiTBltEXkHEUlEfrJkOKOdTJaLkM2yoIF8MpVS0YQc5YKYeSt7SD40PRMpAAhnNivkicSqB4i4joibAHlCTn8bwDjMCV0hojWjPcE0RAAxhOyVWYWQSw3Q6/VWAGAldI/Ht/smZ6VwGFYn3TayY4ahEThJEv1hhs4DbdryynI69nOMet42RsiMmiGXGQDPzs7e0woxf2CMAldFXwgZImRd5mtMmqbLaZrqdEOehjC+jmERueAg1ijEEHIVmTGEHDRAt9u9TEStwC0jRgmMggI8biqYJ4Ki6ykk5AwjiC0PHD3dVeZq0Hl21QHA6tOnT4Mpa68BDg8Pm0R0CQDk7OxsZARopUaEpVF5ohj3RETPEZGVUtr12FlRJqKnhuxYVAlLCyhLZxPRJ6GUtdcAT5482RDjQ+fBYFB4QBkhG2XetzbKSgk5I9tHWiHNZjNfC7C+mMnvsZUZ+jBj3NUxz3mOMkJ2hqGdTqfdbDbfMa8h4lghJEBUWBrME2U/QMRX2fGKbg8O5wmSlR8BwA/Zw30z73HDUrtulXnD+uXLl78+Pj5+auvaaYCtra3L2TKjPZEqTJZMOMqCKYNMGYV69gtYMvXLPhORFwDQFJEmDHvfc0T8DhF/MBVpyvQoucxAI0r1dSSfPC2TmdXJycm/bb05F5VFZMn2odl2EHTdb0LXM5VgbCUpKEEi/z6EXQ8AHovIExFBpRQiovmfOQBAvnzpFJj5Zt2GvG0iUsg92e+sy1xtdNSzZW64KjqlJUlS7MqGLw4QcjCE9H2YYfp785o+jtxVF5Un8hFprExbnnFcLsyzVd9pgGznQeXJExgK9BBy9LyhjJD1vyXLl/alKiGkE+PuqoNsBc+G0wBKqZenp6eFaKdsFOi6obDUbJSvx0OFXlVSf6ye6uvtnusj8M0bmNm5WuY0wMrKyhMi4tPTU29DdVjqc0UeJZfliZxpjcAogDKZ9sd95r+hDzMmuasOEdMkSf7pkuVkqaOjI15dXRUiutBouDd/4euwNDaEzOvOcvkyi1y8MnWE5mpPICyttHxJRH978ODB1y49etPRjx8/fnXp0qUkTdO3lFKuB7lCzxyuENJ+afOabmxkWOpVpEtmKCw1FBU1b7Db5OtIhkX/fv/+/X+4tVyyHnBycnK6ubn5rNlsAjMTZn8iTD8DANBjHF1WkBcaBWa9CS1fFmQGdllM9G/VEVHKzI+Z+UGr1frrvXv3/hPScY0aNWrUqFGjRo0aNWrUqFGjRo0aNWr8PPB/T3OLnORX3j8AAAAASUVORK5CYII="/>
                    </defs>
                    <rect id="image 1" width="96.000000" height="96.000000" fill="url(#pattern_419_2400)" fill-opacity="1.000000"/>
                  </svg>
                  <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p> 
                  <p class="text-xl font-[700]">নেক্সট Lesson এ যান</p>                 
            </div>
         `
         return;
       }
   words.forEach(element=>{
        const card=document.createElement("div");
        card.innerHTML=`
                  <div class="card px-7 py-2 bg-[#FFFFFF] w-full h-full rounded-md flex flex-col items-center justify-between gap-y-3">
                   <div class="flex flex-col items-center gap-y-3"> 
                      <h1 class="text-xl font-[700]">${element.word}</h1>
                      <span>Meaning /Pronounciation</span>
                      <span>"${element.meaning || "খুঁজে পাইনি"}/${element.pronunciation}"</span>
                  </div>
                  <div  class="icon mt-5 inline-flex justify-between items-center w-full ">
                      <div data-id=${element.id} class="details p-2 cursor-pointer bg-[#1A91FF1A] rounded-md">
                          <svg  width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs/>
                            <path id="Vector" d="M12 24C14.37 24 16.69 23.29 18.66 21.97C20.64 20.65 22.17 18.78 23.08 16.59C23.99 14.39 24.23 11.98 23.76 9.65C23.3 7.33 22.16 5.19 20.48 3.51C18.8 1.83 16.66 0.69 14.34 0.23C12.01 -0.24 9.6 0 7.4 0.91C5.21 1.82 3.34 3.35 2.02 5.33C0.7 7.3 0 9.62 0 12C0 15.18 1.26 18.23 3.51 20.48C5.76 22.73 8.81 23.99 12 24ZM12 5C12.29 5 12.58 5.08 12.83 5.25C13.08 5.41 13.27 5.65 13.38 5.92C13.49 6.2 13.52 6.5 13.47 6.79C13.41 7.08 13.27 7.35 13.06 7.56C12.85 7.77 12.58 7.91 12.29 7.97C12 8.02 11.7 7.99 11.42 7.88C11.15 7.77 10.91 7.58 10.75 7.33C10.58 7.08 10.5 6.79 10.5 6.5C10.5 6.1 10.65 5.72 10.93 5.43C11.22 5.15 11.6 5 12 5ZM11 10L12 10C12.53 10 13.03 10.21 13.41 10.58C13.78 10.96 14 11.46 14 12L14 18C14 18.26 13.89 18.51 13.7 18.7C13.51 18.89 13.26 19 13 19C12.73 19 12.48 18.89 12.29 18.7C12.1 18.51 12 18.26 12 18L12 12L11 12C10.73 12 10.48 11.89 10.29 11.7C10.1 11.51 10 11.26 10 11C10 10.73 10.1 10.48 10.29 10.29C10.48 10.1 10.73 10 11 10Z" fill="#374957" fill-opacity="1.000000" fill-rule="nonzero"/>
                          </svg>
                      </div>
                    
                      <div data-word="${element.word}" class="sound p-2 inline-flex items-center cursor-pointer bg-[#1A91FF1A] rounded-md">
                          <svg width="15.000000" height="23.619019" viewBox="0 0 15 23.619" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs/>
                            <path id="Vector" d="M13.81 0.01C10.78 0.58 8.07 2.3 6.26 4.8L5 4.8C3.67 4.81 2.4 5.33 1.46 6.27C0.52 7.21 0 8.48 0 9.8L0 13.8C0 15.13 0.52 16.4 1.46 17.34C2.4 18.28 3.67 18.8 5 18.8L6.26 18.8C8.07 21.31 10.78 23.03 13.81 23.6C13.96 23.62 14.11 23.62 14.25 23.58C14.39 23.54 14.52 23.48 14.63 23.38C14.75 23.29 14.84 23.17 14.9 23.04C14.96 22.91 15 22.76 15 22.61L15 0.99C15 0.85 14.96 0.7 14.9 0.57C14.84 0.44 14.75 0.32 14.63 0.23C14.52 0.13 14.39 0.06 14.25 0.03C14.11 -0.01 13.96 -0.02 13.81 0.01Z" fill="#374957" fill-opacity="1.000000" fill-rule="nonzero"/>
                          </svg>

                          <svg width="3.665527" height="10.024536" viewBox="0 0 3.66553 10.0245" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs/>
                            <path id="Vector" d="M1.71 0.3C1.62 0.2 1.51 0.13 1.39 0.08C1.27 0.02 1.14 0 1 0C0.87 -0.01 0.74 0.02 0.62 0.07C0.49 0.12 0.38 0.19 0.29 0.29C0.19 0.38 0.12 0.49 0.07 0.62C0.02 0.74 -0.01 0.87 0 1C0 1.14 0.02 1.27 0.08 1.39C0.13 1.51 0.2 1.62 0.3 1.71C1.17 2.59 1.66 3.77 1.66 5.01C1.66 6.24 1.17 7.43 0.3 8.3C0.2 8.39 0.13 8.5 0.08 8.62C0.02 8.75 0 8.88 0 9.01C-0.01 9.14 0.02 9.28 0.07 9.4C0.12 9.52 0.19 9.63 0.29 9.73C0.38 9.82 0.49 9.89 0.62 9.95C0.74 10 0.87 10.02 1 10.02C1.14 10.02 1.27 9.99 1.39 9.94C1.51 9.89 1.62 9.81 1.71 9.71C2.96 8.46 3.66 6.77 3.66 5.01C3.66 3.24 2.96 1.55 1.71 0.3Z" fill="#374957" fill-opacity="1.000000" fill-rule="nonzero"/>
                          </svg>

                          <svg width="4.932129" height="16.000000" viewBox="0 0 4.93213 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs/>
                            <path id="Vector" d="M1.74 0.25C1.55 0.08 1.3 -0.01 1.04 0C0.79 0 0.55 0.11 0.37 0.29C0.19 0.47 0.08 0.71 0.07 0.97C0.07 1.22 0.16 1.47 0.33 1.66C2 3.33 2.93 5.6 2.93 7.96C2.93 10.31 2 12.58 0.33 14.25C0.23 14.34 0.15 14.45 0.09 14.57C0.03 14.7 0 14.83 0 14.97C-0.01 15.1 0.02 15.24 0.07 15.36C0.12 15.49 0.19 15.6 0.29 15.7C0.38 15.8 0.5 15.87 0.62 15.92C0.75 15.97 0.89 16 1.02 15.99C1.16 15.99 1.29 15.96 1.41 15.9C1.54 15.85 1.65 15.76 1.74 15.66C3.78 13.62 4.93 10.85 4.93 7.96C4.93 5.07 3.78 2.29 1.74 0.25Z" fill="#374957" fill-opacity="1.000000" fill-rule="nonzero"/>
                          </svg>                            
                          
                    </div>
                      
                  </div>
              </div>
                  
              `;
           box.appendChild(card) ;  
      });
      document.querySelectorAll(".sound").forEach(element=>{
        element.addEventListener("click",()=>{
              const utterance = new SpeechSynthesisUtterance(element.getAttribute("data-word"));
              utterance.lang = 'en-EN'; // English
              window.speechSynthesis.speak(utterance);
        })
     });
       word_info();
    })
}


// fetch("https://openapi.programming-hero.com/api/levels/all", {
//   method: "GET",
//   headers: {
//       "Authorization": "Bearer YOUR_API_KEY",
//       "Content-Type": "application/json"
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("Error:", error));

