const data = [
    {
        "id": 1,
        "image": "img/slider/slide-01.png"
    },
    {
        "id": 2,
        "image": "img/slider/slide-02.png"
    }
];

const avancar = (idImagem) => {
    for(var i=0; i<data.length; i++)
    {
        if(data[i].id === parseInt(idImagem))
        {
            if(i+1 >= data.length)
            {
                document.getElementById("slideImage").src = data[0].image;
                document.getElementById("voltar").value = data[0].id;
                document.getElementById("avancar").value = data[0].id;
            }
            else
            {
                document.getElementById("slideImage").src = data[i+1].image;
                document.getElementById("voltar").value = data[i+1].id;
                document.getElementById("avancar").value = data[i+1].id;
                break;
            }
        }
    }
};

const voltar = (idImagem) => {
    for(var i = 0; i < data.length; i++)
    {
        if(data[i].id === parseInt(idImagem))
        {
            if(i-1 < 0)
            {
                document.getElementById("slideImage").src = data[data.length-1].image;
                document.getElementById("voltar").value = data[data.length-1].id;
                document.getElementById("avancar").value = data[data.length-1].id;

                break;
            }
            else
            {
                document.getElementById("slideImage").src = data[i-1].image;
                document.getElementById("voltar").value = data[i-1].id;
                document.getElementById("avancar").value = data[i-1].id;
                break;
            }
        }
    }
};