function contador()
{
    let ini = Number(document.querySelector('#ini').value);
    let fim = Number(document.querySelector('#fim').value);
    let passo = Number(document.querySelector('#passo').value);
    let res = document.querySelector('#res');

    res.innerHTML = '';

    if (passo === 0)
    {
        passo = 1;
    }
    if (ini < fim)
    {
        for (let i = ini; i <= fim; i += passo)
        {
            res.innerHTML += i;
            res.innerHTML += ' > ';
        }
    }
    else if (ini > fim)
    {
        for (let i = ini; i >= fim; i -= passo)
        {
            res.innerHTML += i;
            res.innerHTML += ' > ';
        }
    }
    res.innerHTML += 'FIM';
}
