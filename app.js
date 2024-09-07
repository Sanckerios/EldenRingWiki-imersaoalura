function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Obtém o termo de pesquisa inserido pelo usuário
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // Verifica se o usuário inseriu um termo de pesquisa
    if (!campoPesquisa) {

        // Exibe uma mensagem informando que nenhum termo foi encontrado
        section.innerHTML = "<p>Nada foi encontrado. Pesquise entre os atributos: Inteligência, Fé, Força, Destreza ou Arcano.</p>"
        return
    }
    // Converte o termo de pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada categoria (atributo) e busca por ocorrências do termo de pesquisa
    // nos campos nome, descrição e tags de cada elemento
    for (let dado of intelligence) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">Atributo Principal: Inteligência</a>
                </h2>
                <a href="#" target="_blank">${dado.nome}</a>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Vídeo Completo sobre a build</a>
            </div>
        `;
        }
    }

    for (let dado of faith) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">Atributo Principal: Fé</a>
                </h2>
                <a href="#" target="_blank">${dado.nome}</a>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Vídeo Completo sobre a build</a>
            </div>
        `;
        }
    }

    for (let dado of strength) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">Atributo Principal: Força</a>
                </h2>
                <a href="#" target="_blank">${dado.nome}</a>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Vídeo Completo sobre a build</a>
            </div>
        `;
        }
    }

    for (let dado of dexterity) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">Atributo Principal: Destreza</a>
                </h2>
                <a href="#" target="_blank">${dado.nome}</a>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Vídeo Completo sobre a build</a>
            </div>
        `;
        }
    }

    for (let dado of arcane) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">Atributo Principal: Arcano</a>
                </h2>
                <a href="#" target="_blank">${dado.nome}</a>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Vídeo Completo sobre a build</a>
            </div>
        `;
        }
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem informativa
    if (!resultados) {
        resultados = "<p> Nada foi encontrado.</p>"
    }

    // Insere os resultados da pesquisa na seção HTML
    section.innerHTML = resultados;

}

