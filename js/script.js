const btnContrateNos = document.getElementById('bntContrateNos')
const bntFecharModal = document.getElementById('btnFecharModal')
const modal = document.getElementById('modalContato')
const btnenviar = document.getElementById('btn-enviar')
const formContato = document.getElementById('formContato')

// Abrir modal
btnContrateNos.addEventListener('click', () => {
    modal.style.display = "flex"
})

// Fechar modal
bntFecharModal.addEventListener('click', () => {
    modal.style.display = "none"
})
// Fechar modal no X
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"
    }
})

// Submissão do Formulário
btnenviar.addEventListener('click', (e) => {
    e.preventDefault()

    // Validação básica
    if (formContato.checkValidity()) {
        alert('Formulário enviado com sucesso!')
        formContato.reset()
        modal.style.display = "none"
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.")
    }
})

// Galeria de Filtros
const botoesFiltro = document.querySelectorAll('.btn-filtro')
const cardsGaleria = document.querySelectorAll('.card-item')

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // 1. Marca o botão clicado como ativo
        botoesFiltro.forEach(b => b.classList.remove('ativo'))
        botao.classList.add('ativo')

        // 2. Obtém a categoria do botão
        const categoriaSelecionada = botao.getAttribute('data-categoria').trim().toLowerCase()

        // 3. exibe ou oculta os cards baseando-se no data-categoria
        cardsGaleria.forEach(card => {
            const categoriaCard = card.getAttribute('data-categoria').trim().toLowerCase()

            if (categoriaSelecionada === 'todos' || categoriaSelecionada === categoriaCard) {
                card.classList.remove('esconder')
            } else {
                card.classList.add('esconder')
            }
        })

    })
})
// FAQ ACCORDION
const perguntasFaq = document.querySelectorAll('.faq-pergunta')

perguntasFaq.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const itemFaq = pergunta.parentElement
        // Alterna a classe 'ativo' para abrir/fechar a resposta atual
        itemFaq.classList.toggle('ativo')
    })
})