const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");

let exp="";
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const value=e.target.textContent;

        if(value === "C" || value === "AC"){
            exp="";
            input.value="";
        }
        else if(value === "="){
            try{
                const result= eval(exp.replace("x","*"));
                input.value=result;
                exp=result.toString();
            }
            catch{
                input.value="Error";
                exp="";
            }
        }
        else{
            exp+=value;
            input.value=exp;
        }
    });
});

document.addEventListener("keydown",(e)=>{
    const key= e.key;

    if((key >= "0" && key <="9") || ["+","-","*","/",".","%"].includes(key)){
        exp+=key;
        input.value=exp;
    }
    else if(key === "Enter"){
        try{
            const result=eval(exp);
            input.value=result;
            exp=result.toString();
        }
        catch{
            input.value="Error";
            exp="";
        }
    }
    else if(key === "Backspace"){
        exp=exp.slice(0,-1);
        input.value=exp;
    }
    else if(key === "Escape"){
        exp="";
        input.value="";
    }
});
