
const imagens = document.querySelectorAll(".poke");
const svg = document.getElementsByClassName("svg");

console.log(svg);

function ranarr()
    {
        var b = Math.floor(Math.random() * imagens.length);
        for(let i=0; i < imagens.length; i++)
        {
            if(imagens[i] != imagens[b])
            {
                imagens[i].style.opacity = "0";
            }
            else
            {
                imagens[i].style.opacity = "1";
            }
        }
    }
btn.addEventListener("click", ranarr);