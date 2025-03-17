async function data_fetch(url) {
    try{
        const res=await fetch(url);
        const data=await res.json();
        const arr=data.data;
        return arr;
    }catch(err){
       console.log(err);
       return 420;
    }
      
  }