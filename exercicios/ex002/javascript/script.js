function idade()
{
    var nasc = Number(document.querySelector('#nasc').value);
    var year = new Date().getFullYear();
    var idade = year - nasc;

    var sex = document.getElementsByName('sex');

    var res = document.querySelector('#res');
    var img = document.getElementById('img');

    if (nasc > year)
    {
        res.innerHTML = 'Ano de nascimento invalido!';
    }
    else
    {
        for (i = 0; i < sex.length; i++)
        {
            if (sex[i].checked)
            {
                res.innerHTML = `Detectamos ${sex[i].value}`;
                if (sex[i].value === 'mulher')
                {
                    if (idade < 12)
                    {
                        img.style.backgroundImage = 'url("imagens/femi-kid.jpg")';
                    }
                    else if (idade >= 12 && idade < 30)
                    {
                        img.style.backgroundImage = 'url("imagens/femi-young.jpg")';
                    }
                    else if (idade >= 30)
                    {
                        img.style.backgroundImage = 'url("imagens/femi-old.jpg")';
                    }
                }
                else
                {
                    if (idade <= 12)
                    {
                        img.style.backgroundImage = 'url("imagens/masc-kid.jpg")';
                    }
                    else if (idade > 12 && idade < 30)
                    {
                        img.style.backgroundImage = 'url("imagens/masc-young.jpg")';
                    }
                    else if (idade >= 30)
                    {
                        img.style.backgroundImage = 'url("imagens/masc-old.jpg")';
                    }
                }
            }
        }
        res.innerHTML += ` com ${idade} anos.`;
    }
}
