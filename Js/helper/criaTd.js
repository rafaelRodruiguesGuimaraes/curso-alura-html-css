class CriaLi{

    static _addImg(li, img){

        let imagem = document.createElement('img');
        imagem.classList.add('imagemLi');
        imagem.src=`img/${img}.png`;
        li.appendChild(imagem);

        return li
    }

    static _addTxt(li, txt){

        let p = document.createElement('p');
        p.classList.add('link');
        p.innerHTML = txt;
        li.appendChild(p);
        
        return li
    }
}