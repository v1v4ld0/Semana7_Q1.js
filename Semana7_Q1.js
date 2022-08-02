function listas() {
    let nomelista = document.querySelector('input#nomelista')
    let numlista = document.querySelector('input#numlista')
    let res = document.querySelector('div#res')
    let ul = document.querySelector('ul#addlistas')
    if (numlista.value.length == 0 || numlista.value < 0) {
        window.alert('INVÁLIDO!')
    }
    else {
        for (let lista = 1; lista <= numlista.value; lista++) {
            let li = document.createElement('li')
            ul.append(li)
            li.innerHTML += `${nomelista.value}`
        }
    }
}