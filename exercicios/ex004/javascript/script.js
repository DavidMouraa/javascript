function tab()
{
    let num = Number(document.getElementById('num').value);
    let tab = document.getElementById('tabuada');

    tab.innerHTML = '';

    for (let i = 1; i <= 10; i++)
    {
        let opt = document.createElement('option');
        opt.text = `${i} x ${num} = ${i * num}`;
        tab.appendChild(opt);
    }
}
