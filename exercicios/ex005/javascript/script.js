let list = [];

function adicionar()
{
    let num = Number(document.getElementById('num').value);
    let nlist = document.getElementById('nlist');

    if (num <= 0 || num > 100 || list.indexOf(num) !== -1)
    {
        alert('Valor invalido! Tente novamente.');
    }
    else
    {
        let opt = document.createElement('option');

        list.push(num);
        opt.text = `Valor ${num} foi adicionado`;
        nlist.appendChild(opt);
    }

    document.getElementById('num').value = '';
}

function finalizar()
{
    if (list.length === 0)
    {
        alert('Preença a lista antes de finalizar!')
    }
    else
    {
        let res = document.getElementById('res');
        let soma = 0;
        let maior = list[0];
        let menor = list[0];
        
        for (let i in list)
        {
            soma += list[i];

            if (list[i] > maior){maior = list[i];}
            if (list[i] < menor){menor = list[i];}
        }

        res.innerHTML = `<p>Ao todo, temos ${list.length} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitamos é ${soma / list.length}.</p>`;
    }
}
