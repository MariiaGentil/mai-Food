
const conteudoPrincipal = document.querySelector(".conteudoPrincipal");
const donuts = document.querySelectorAll(".donuts");
const bubbleTea = document.querySelectorAll(".bubbleTea");
const sorvete = document.querySelectorAll(".sorvete");
const buttomVoltarDonuts = document.querySelectorAll(".buttonVoltarDonuts");
const buttomConfirmarDonuts = document.querySelectorAll(".buttonConfirmarDonuts");
const buttonVoltarBubbleTea = document.querySelectorAll(".buttonVoltarBubbleTea");
const buttonConfirmarBubbleTea = document.querySelectorAll(".buttonConfirmarBubbleTea");
const buttonVoltarSorvete = document.querySelectorAll(".buttonVoltarSorvete");
const buttonConfirmarSorvete = document.querySelectorAll(".buttonConfirmarSorvete");
const telaInicialInput = document.querySelector(".telaInicialInput");
let donutsChocolate = 0;
let donutsMorango = 0;
let donutsCoconut = 0;
let bubbleTeaLimao = 0;
let bubbleTeaChocolate = 0;
let bubbleTeaFramboesa = 0;
let sorveteBaunilha = 0;
let sorveteMisto = 0;
let sorveteFrutasVermelhas = 0;
let itensNoCarrinho = 0;



function iniciarApp() {
    const telaInicial = document.querySelector(".telaInicial");
    const telaInicialMensagemErro = document.querySelector(".telaInicialMensagemErro")

    if (telaInicialInput.value === "") {
        telaInicialMensagemErro.classList.remove("esconder")
    } else {
        conteudoPrincipal.classList.remove("esconder")
        telaInicial.classList.add("esconder")
    }
}

function exibirProdutos(tipo, sabor) {

    switch (tipo) {
        case 'donuts':
            switch (sabor) {
                case 'chocolate':
                    donuts[0].style.cssText =
                        'background-image: url(Img/donut-chocolate-desfoc.jpg);';
                    donuts[0].innerHTML = `<h3>Descrição</h3>
                    <p>
                    ◦ Massa: chocolate<br />
                    ◦ Cobertura: chocolate<br />
                    ◦ Recheio: creme belga<br />
                    </p>
                    </p>
                    <h2>R$ 5,99</h2>`;

                    buttomVoltarDonuts[0].classList.remove("esconder");
                    buttomConfirmarDonuts[0].classList.remove("esconder");
                    break

                case 'morango':
                    donuts[1].style.cssText =
                        'background-image: url(Img/donut-morango-desfoc.jpg);';
                    donuts[1].innerHTML = `<h3>Descrição</h3>
                    <p>
                    ◦ Massa: baunilha<br />
                    ◦ Cobertura: morango<br />
                    ◦ Recheio: creme branco<br />
                    ◦ Confeitos: morango picado<br />
                    </p>
                    <h2>R$ 7,99</h2>`;

                    buttomVoltarDonuts[1].classList.remove("esconder");
                    buttomConfirmarDonuts[1].classList.remove("esconder");
                    break
                case 'coconut':
                    donuts[2].style.cssText =
                        'background-image: url(Img/donut-coconut-desfoc.png);';
                    donuts[2].innerHTML = `<h3>Descrição</h3>
                    <p>
                    ◦ Massa: baunilha<br />
                    ◦ Cobertura: creme branco<br />
                    ◦ Recheio: beijinho<br />
                    ◦ Confeitos: lascas de coco<br />
                    </p>
                    <h2>R$ 8,99</h2>`;

                    buttomVoltarDonuts[2].classList.remove("esconder");
                    buttomConfirmarDonuts[2].classList.remove("esconder");
                    break

            }
            break
        case 'bubbleTea':
            switch (sabor) {
                case 'limao':
                    bubbleTea[0].style.cssText =
                        'background-image: url(Img/bubble-tea-limao-desfoc.png);';
                    bubbleTea[0].innerHTML = `<h3>Descrição</h3>
                    <p>
                    ◦ Sabor: Limão<br />
                    ◦ Bubbles: Limão e Hortelã<br />
                    ◦ Cobertura: Rodelas de limão ou folhas de hortelã<br />
                    </p>
                    </p>
                    <h2>R$ 4,99</h2>`
                    buttonVoltarBubbleTea[0].classList.remove("esconder");
                    buttonConfirmarBubbleTea[0].classList.remove("esconder");
                    break

                case 'chocolate':
                    bubbleTea[1].style.cssText =
                        'background-image: url(Img/bubble-tea-chocolate-desfoc.png);';
                    bubbleTea[1].innerHTML = `<h3>Descrição</h3>
                    <p>
                    ◦ Sabor: Chocolate<br />
                    ◦ Bubbles: Chocolate e Doce de Leite<br />
                    ◦ Cobertura: Pedaços de Chocolate<br />
                    </p>
                    </p>
                    <h2>R$ 5,99</h2>`
                    buttonVoltarBubbleTea[1].classList.remove("esconder");
                    buttonConfirmarBubbleTea[1].classList.remove("esconder");
                    break

                case 'framboesa':
                    bubbleTea[2].style.cssText =
                        'background-image: url(Img/bubble-tea-framboesa-desfoc.png);';
                    bubbleTea[2].innerHTML = `<h3>Descrição</h3>
                    <p>
                    ◦ Sabor: Framboesa<br />
                    ◦ Bubbles: Framboesa e Maracujá<br />
                    ◦ Cobertura: Framboesas com Creme<br />
                    </p>
                    </p>
                    <h2>R$ 6,99</h2>`
                    buttonVoltarBubbleTea[2].classList.remove("esconder");
                    buttonConfirmarBubbleTea[2].classList.remove("esconder");
                    break
            }
            break
        case 'sorvete':
            switch (sabor) {
                case 'baunilha':
                    sorvete[0].style.cssText =
                        'background-image: url(Img/sorvete-baunilha-desfoc.png);';
                    sorvete[0].innerHTML = `<h3>Descrição</h3>
                        <p>
                        ◦ Sabor: Baunilha<br />
                        ◦ Massa: Artesanal<br />
                        </p>
                        </p>
                        <h2>R$ 9,99</h2>`
                    buttonVoltarSorvete[0].classList.remove("esconder");
                    buttonConfirmarSorvete[0].classList.remove("esconder");
                    break

                case 'misto':
                    sorvete[1].style.cssText =
                        'background-image: url(Img/sorvete-misto-desfoc.png);';
                    sorvete[1].innerHTML = `<h3>Descrição</h3>
                        <p>
                        ◦ Sabor: Chocolate, Flocos e Doce de leite<br />
                        ◦ Massa: Artesanal<br />
                        ◦ Cobertura: Calda e pedaços de chocolate<br />
                        </p>
                        </p>
                        <h2>R$ 10,99</h2>`
                    buttonVoltarSorvete[1].classList.remove("esconder");
                    buttonConfirmarSorvete[1].classList.remove("esconder");
                    break

                case 'frutasvermelhas':
                    sorvete[2].style.cssText =
                        'background-image: url(Img/sorvete-frutas-vermelhas-desfoc.png);';
                    sorvete[2].innerHTML = `<h3>Descrição</h3>
                        <p>
                        ◦ Sabor: Creme, Morango e Framboesa<br />
                        ◦ Massa: Artesanal<br />
                        ◦ Cobertura: Pedaços de morango e framboesa<br />
                        </p>
                        </p>
                        <h2>R$ 11,99</h2>`
                    buttonVoltarSorvete[2].classList.remove("esconder");
                    buttonConfirmarSorvete[2].classList.remove("esconder");
                    break
            }
            break
    }
}

function voltarButton(tipo, sabor) {
    switch (tipo) {
        case 'donuts':
            switch (sabor) {
                case 'chocolate':
                    donuts[0].innerHTML = `<h1>Chocolate</h1>`
                    donuts[0].style.cssText =
                        'background-image: url(Img/donut-chocolate.jpg)';
                    buttomVoltarDonuts[0].classList.add("esconder");
                    buttomConfirmarDonuts[0].classList.add("esconder");
                    break
                case 'morango':
                    donuts[1].innerHTML = `<h1>Morango</h1>`
                    donuts[1].style.cssText =
                        'background-image: url(Img/donut-morango.jpg)';
                    buttomVoltarDonuts[1].classList.add("esconder");
                    buttomConfirmarDonuts[1].classList.add("esconder");
                    break
                case 'coconut':
                    donuts[2].innerHTML = `<h1>Coco</h1>`
                    donuts[2].style.cssText =
                        'background-image: url(Img/donut-coconut.png)';
                    buttomVoltarDonuts[2].classList.add("esconder");
                    buttomConfirmarDonuts[2].classList.add("esconder");
                    break
            }
            break
        case 'bubbleTea':
            switch (sabor) {
                case 'limao':
                    bubbleTea[0].innerHTML = `<h1>Limão</h1>`
                    bubbleTea[0].style.cssText =
                        'background-image: url(Img/bubble-tea-limao.png)';
                    buttonVoltarBubbleTea[0].classList.add("esconder");
                    buttonConfirmarBubbleTea[0].classList.add("esconder");
                    break

                case 'chocolate':
                    bubbleTea[1].innerHTML = `<h1>Chocolate</h1>`
                    bubbleTea[1].style.cssText =
                        'background-image: url(Img/bubble-tea-chocolate.png)';
                    buttonVoltarBubbleTea[1].classList.add("esconder");
                    buttonConfirmarBubbleTea[1].classList.add("esconder");
                    break

                case 'framboesa':
                    bubbleTea[2].innerHTML = `<h1>Framboesa</h1>`
                    bubbleTea[2].style.cssText =
                        'background-image: url(Img/bubble-tea-framboesa.png)';
                    buttonVoltarBubbleTea[2].classList.add("esconder");
                    buttonConfirmarBubbleTea[2].classList.add("esconder");
                    break
            }
            break
        case 'sorvete':
            switch (sabor) {
                case 'baunilha':
                    sorvete[0].innerHTML = `<h1>Baunilha</h1>`
                    sorvete[0].style.cssText =
                        'background-image: url(Img/sorvete-baunilha.png)';
                    buttonVoltarSorvete[0].classList.add("esconder");
                    buttonConfirmarSorvete[0].classList.add("esconder");
                    break

                case 'misto':
                    sorvete[1].innerHTML = `<h1>Misto</h1>`
                    sorvete[1].style.cssText =
                        'background-image: url(Img/sorvete-misto.png)';
                    buttonVoltarSorvete[1].classList.add("esconder");
                    buttonConfirmarSorvete[1].classList.add("esconder");
                    break

                case 'frutasvermelhas':
                    sorvete[2].innerHTML = `<h1>Frutas Vermelhas</h1>`
                    sorvete[2].style.cssText =
                        'background-image: url(Img/sorvete-frutas-vermelhas.png)';
                    buttonVoltarSorvete[2].classList.add("esconder");
                    buttonConfirmarSorvete[2].classList.add("esconder");
                    break
            }
            break
    }
}

function confirmarButton(tipo, sabor) {
    switch (tipo) {
        case 'donuts':
            switch (sabor) {
                case 'chocolate':
                    donuts[0].innerHTML = `<h1>Chocolate</h1>`
                    donuts[0].style.cssText =
                        'background-image: url(Img/donut-chocolate.jpg)';
                    buttomVoltarDonuts[0].classList.add("esconder")
                    buttomConfirmarDonuts[0].classList.add("esconder")
                    donutsChocolate++;
                    itensNoCarrinho++;
                    colorButton()
                    break
                case 'morango':
                    donuts[1].innerHTML = `<h1>Morango</h1>`
                    donuts[1].style.cssText =
                        'background-image: url(Img/donut-morango.jpg)';
                    buttomVoltarDonuts[1].classList.add("esconder")
                    buttomConfirmarDonuts[1].classList.add("esconder")
                    donutsMorango++;
                    itensNoCarrinho++;
                    colorButton()
                    break
                case 'coconut':
                    donuts[2].innerHTML = `<h1>Coco</h1>`
                    donuts[2].style.cssText =
                        'background-image: url(Img/donut-coconut.png)';
                    buttomVoltarDonuts[2].classList.add("esconder")
                    buttomConfirmarDonuts[2].classList.add("esconder")
                    donutsCoconut++;
                    itensNoCarrinho++;
                    colorButton()
                    break
            }
            break

        case 'bubbleTea':
            switch (sabor) {
                case 'limao':
                    bubbleTea[0].innerHTML = `<h1>Limão</h1>`
                    bubbleTea[0].style.cssText =
                        'background-image: url(Img/bubble-tea-limao.png)';
                    buttonVoltarBubbleTea[0].classList.add("esconder");
                    buttonConfirmarBubbleTea[0].classList.add("esconder");
                    bubbleTeaLimao++;
                    itensNoCarrinho++;
                    colorButton();
                    break

                case 'chocolate':
                    bubbleTea[1].innerHTML = `<h1>Chocolate</h1>`
                    bubbleTea[1].style.cssText =
                        'background-image: url(Img/bubble-tea-chocolate.png)';
                    buttonVoltarBubbleTea[1].classList.add("esconder");
                    buttonConfirmarBubbleTea[1].classList.add("esconder");
                    bubbleTeaChocolate++;
                    itensNoCarrinho++;
                    colorButton();
                    break

                case 'framboesa':
                    bubbleTea[2].innerHTML = `<h1>Framboesa</h1>`
                    bubbleTea[2].style.cssText =
                        'background-image: url(Img/bubble-tea-framboesa.png)';
                    buttonVoltarBubbleTea[2].classList.add("esconder");
                    buttonConfirmarBubbleTea[2].classList.add("esconder");
                    bubbleTeaFramboesa++;
                    itensNoCarrinho++;
                    colorButton();
                    break
            }
            break
        case 'sorvete':
            switch (sabor) {
                case 'baunilha':
                    sorvete[0].innerHTML = `<h1>Baunilha</h1>`
                    sorvete[0].style.cssText =
                        'background-image: url(Img/sorvete-baunilha.png)';
                    buttonVoltarSorvete[0].classList.add("esconder");
                    buttonConfirmarSorvete[0].classList.add("esconder");
                    sorveteBaunilha++;
                    itensNoCarrinho++;
                    colorButton();
                    break

                case 'misto':
                    sorvete[1].innerHTML = `<h1>Misto</h1>`
                    sorvete[1].style.cssText =
                        'background-image: url(Img/sorvete-misto.png)';
                    buttonVoltarSorvete[1].classList.add("esconder");
                    buttonConfirmarSorvete[1].classList.add("esconder");
                    sorveteMisto++;
                    itensNoCarrinho++;
                    colorButton();
                    break

                case 'frutasvermelhas':
                    sorvete[2].innerHTML = `<h1>Frutas Vermelhas</h1>`
                    sorvete[2].style.cssText =
                        'background-image: url(Img/sorvete-frutas-vermelhas.png)';
                    buttonVoltarSorvete[2].classList.add("esconder");
                    buttonConfirmarSorvete[2].classList.add("esconder");
                    sorveteFrutasVermelhas++;
                    itensNoCarrinho++;
                    colorButton();
                    break
            }
            break
    }
}

const telaFinalDonutChocolate = document.querySelector(".telaFinalDChocolate");
const telaFinalDonutMorango = document.querySelector(".telaFinalDMorango");
const telaFinalDonutCoco = document.querySelector(".telaFinalDCoco");
const telaFinalBubbleTeaLimao = document.querySelector(".telaFinalBTLimao");
const telaFinalBubbleTeaChocolate = document.querySelector(".telaFinalBTChocolate");
const telaFinalBubbleTeaFramboesa = document.querySelector(".telaFinalBTFramboesa");
const telaFinalSorveteBaunilha = document.querySelector(".telaFinalSBaunilha");
const telaFinalSorveteMisto = document.querySelector(".telaFinalSMisto");
const telaFinalSorveteFrutasVermelhas = document.querySelector(".telaFinalSFrutasVermelhas");
const telaFinal = document.querySelector(".telaFinal");

function confirmarPedido() {
    const pedidoUsuario = document.querySelector(".telaFinalNameUsuario")
    if (itensNoCarrinho !== 0) {
        telaFinal.classList.remove("esconder")
        conteudoPrincipal.classList.add("esconder")
        pedidoUsuario.innerText = `Pedido de ${telaInicialInput.value}:`
        if (donutsChocolate > 0) {
            telaFinalDonutChocolate.classList.add("flex")
            telaFinalDonutChocolate.innerHTML = `<p class="telaFinalDChoc" >🍩 (${donutsChocolate}) Donuts sabor Chocolate <h3 class="telaFinalDChoc">R$${(parseFloat('5.99') * donutsChocolate).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('donuts', 'chocolate')" class="telaFinalDChoc remover pointer"></button><button onclick="botaoAdicionar('donuts', 'chocolate')" class="telaFinalDChoc adicionar pointer"></button>`
        }
        if (donutsMorango > 0) {
            telaFinalDonutMorango.classList.add("flex")
            telaFinalDonutMorango.innerHTML = `<p class="telaFinalDMor">🍩 (${donutsMorango}) Donuts sabor Morango <h3 class="telaFinalDMor">R$${(parseFloat('7.99') * donutsMorango).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('donuts', 'morango')" class="telaFinalDMor remover pointer"></button><button onclick="botaoAdicionar('donuts', 'morango')" class="telaFinalDMor adicionar pointer"></button>`
        }

        if (donutsCoconut > 0) {
            telaFinalDonutCoco.classList.add("flex")
            telaFinalDonutCoco.innerHTML = `<p class="telaFinalDCoc">🍩 (${donutsCoconut}) Donuts sabor Coco <h3 class="telaFinalDCoc">R$${(parseFloat('8.99') * donutsCoconut).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('donuts', 'coconut')" class="telaFinalDCoc remover pointer"></button><button onclick="botaoAdicionar('donuts', 'coconut')" class="telaFinalDCoc adicionar pointer"></button>`
        }

        if (bubbleTeaLimao > 0) {
            telaFinalBubbleTeaLimao.classList.add("flex")
            telaFinalBubbleTeaLimao.innerHTML = `<p class="telaFinalBTLim">🧋​ (${bubbleTeaLimao}) Bubble Tea sabor Limão <h3 class="telaFinalBTLim">R$${(parseFloat('4.99') * bubbleTeaLimao).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('bubbletea', 'limao')" class="telaFinalBTLim remover pointer"></button><button onclick="botaoAdicionar('bubbletea', 'limao')" class="telaFinalBTLim adicionar pointer"></button>`
        }
        if (bubbleTeaChocolate > 0) {
            telaFinalBubbleTeaChocolate.classList.add("flex")
            telaFinalBubbleTeaChocolate.innerHTML = `<p class="telaFinalBTChoc">🧋​ (${bubbleTeaChocolate}) Bubble Tea sabor Chocolate <h3  class="telaFinalBTChoc">R$${(parseFloat('5.99') * bubbleTeaChocolate).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('bubbletea', 'chocolate')" class="telaFinalBTChoc remover pointer"></button><button onclick="botaoAdicionar('bubbletea', 'chocolate')" class="telaFinalBTChoc adicionar pointer"></button>`
        }
        if (bubbleTeaFramboesa > 0) {
            telaFinalBubbleTeaFramboesa.classList.add("flex")
            telaFinalBubbleTeaFramboesa.innerHTML = `<p class="telaFinalBTFram">🧋​ (${bubbleTeaFramboesa}) Bubble Tea sabor Framboesa <h3 class="telaFinalBTFram">R$${(parseFloat('6.99') * bubbleTeaFramboesa).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('bubbletea', 'framboesa')" class="telaFinalBTFram remover pointer"></button><button onclick="botaoAdicionar('bubbletea', 'framboesa')" class="telaFinalBTFram adicionar pointer"></button>`
        }
        if (sorveteBaunilha > 0) {
            telaFinalSorveteBaunilha.classList.add("flex")
            telaFinalSorveteBaunilha.innerHTML = `<p class="telaFinalSBaun">🍨​ (${sorveteBaunilha}) Sorvete sabor Baunilha <h3 class="telaFinalSBaun">R$${(parseFloat('9.99') * sorveteBaunilha).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('sorvete', 'baunilha')" class="telaFinalSBaun remover pointer"></button><button onclick="botaoAdicionar('sorvete', 'baunilha')" class="telaFinalSBaun adicionar pointer"></button>`
        }
        if (sorveteMisto > 0) {
            telaFinalSorveteMisto.classList.add("flex")
            telaFinalSorveteMisto.innerHTML = `<p class="telaFinalSMis">🍨​ (${sorveteMisto}) Sorvete sabor Misto <h3 class="telaFinalSMis">R$${(parseFloat('10.99') * sorveteMisto).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('sorvete', 'misto')" class="telaFinalSMis remover pointer"></button><button onclick="botaoAdicionar('sorvete', 'misto')" class="telaFinalSMis adicionar pointer"></button>`
        }
        if (sorveteFrutasVermelhas > 0) {
            telaFinalSorveteFrutasVermelhas.classList.add("flex")
            telaFinalSorveteFrutasVermelhas.innerHTML = `<p class="telaFinalSFruVer">🍨​ (${sorveteFrutasVermelhas}) Sorvete sabor Frutas Verm. <h3 class="telaFinalSFruVer">R$${(parseFloat('11.99') * sorveteFrutasVermelhas).toFixed(2).toString().replace(".", ",")}</h3></p><button onclick="botaoRemover('sorvete', 'frutasvermelhas')" class="telaFinalSFruVer remover pointer"></button><button onclick="botaoAdicionar('sorvete', 'frutasvermelhas')" class="telaFinalSFruVer adicionar pointer"></button>`
        }
    } else {
        telaFinal.classList.add("esconder");
        conteudoPrincipal.classList.remove("esconder");
        colorButton();
    }
}


function botaoRemover(tipo, sabor) {

    switch (tipo) {
        case 'donuts':
            switch (sabor) {
                case 'chocolate':
                    let telaFinalChoc = document.querySelectorAll(".telaFinalDChoc");
                    if (donutsChocolate === 1) {
                        donutsChocolate--;
                        itensNoCarrinho--;
                        telaFinalChoc[0].classList.add("esconder");
                        telaFinalChoc[1].classList.add("esconder");
                        telaFinalChoc[2].classList.add("esconder");
                        telaFinalChoc[3].classList.add("esconder");
                        telaFinalDonutChocolate.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        donutsChocolate--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;
                case 'morango':
                    let telaFinalMor = document.querySelectorAll(".telaFinalDMor");
                    if (donutsMorango === 1) {
                        donutsMorango--;
                        itensNoCarrinho--;
                        telaFinalMor[0].classList.add("esconder");
                        telaFinalMor[1].classList.add("esconder");
                        telaFinalMor[2].classList.add("esconder");
                        telaFinalMor[3].classList.add("esconder");
                        telaFinalDonutMorango.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        donutsMorango--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;
                case 'coconut':
                    let telaFinalCoc = document.querySelectorAll(".telaFinalDCoc")
                    if (donutsCoconut === 1) {
                        donutsCoconut--;
                        itensNoCarrinho--;
                        telaFinalCoc[0].classList.add("esconder");
                        telaFinalCoc[1].classList.add("esconder");
                        telaFinalCoc[2].classList.add("esconder");
                        telaFinalCoc[3].classList.add("esconder");
                        telaFinalDonutCoco.classList.remove("flex");
                        confirmarPedido()
                    } else {
                        donutsCoconut--;
                        itensNoCarrinho--;
                        confirmarPedido()
                    }
                    break;
            }
            break;
        case 'bubbletea':
            switch (sabor) {
                case 'limao':
                    let telaFinalBTLim = document.querySelectorAll(".telaFinalBTLim");
                    if (bubbleTeaLimao === 1) {
                        bubbleTeaLimao--;
                        itensNoCarrinho--;
                        telaFinalBTLim[0].classList.add("esconder");
                        telaFinalBTLim[1].classList.add("esconder");
                        telaFinalBTLim[2].classList.add("esconder");
                        telaFinalBTLim[3].classList.add("esconder");
                        telaFinalBubbleTeaLimao.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        bubbleTeaLimao--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;

                case 'chocolate':
                    let telaFinalBTChoc = document.querySelectorAll(".telaFinalBTChoc");
                    if (bubbleTeaChocolate === 1) {
                        bubbleTeaChocolate--;
                        itensNoCarrinho--;
                        telaFinalBTChoc[0].classList.add("esconder");
                        telaFinalBTChoc[1].classList.add("esconder");
                        telaFinalBTChoc[2].classList.add("esconder");
                        telaFinalBTChoc[3].classList.add("esconder");
                        telaFinalBubbleTeaChocolate.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        bubbleTeaChocolate--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;

                case 'framboesa':
                    let telaFinalBTFram = document.querySelectorAll(".telaFinalBTFram");
                    if (bubbleTeaFramboesa === 1) {
                        bubbleTeaFramboesa--;
                        itensNoCarrinho--;
                        telaFinalBTFram[0].classList.add("esconder");
                        telaFinalBTFram[1].classList.add("esconder");
                        telaFinalBTFram[2].classList.add("esconder");
                        telaFinalBTFram[3].classList.add("esconder");
                        telaFinalBubbleTeaFramboesa.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        bubbleTeaFramboesa--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;
            }
            break;
        case 'sorvete':
            switch (sabor) {
                case 'baunilha':
                    let telaFinalSBaun = document.querySelectorAll(".telaFinalSBaun");
                    if (sorveteBaunilha === 1) {
                        sorveteBaunilha--;
                        itensNoCarrinho--;
                        telaFinalSBaun[0].classList.add("esconder");
                        telaFinalSBaun[1].classList.add("esconder");
                        telaFinalSBaun[2].classList.add("esconder");
                        telaFinalSBaun[3].classList.add("esconder");
                        telaFinalSorveteBaunilha.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        sorveteBaunilha--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;

                case 'misto':
                    let telaFinalSMis = document.querySelectorAll(".telaFinalSMis");
                    if (sorveteMisto === 1) {
                        sorveteMisto--;
                        itensNoCarrinho--;
                        telaFinalSMis[0].classList.add("esconder");
                        telaFinalSMis[1].classList.add("esconder");
                        telaFinalSMis[2].classList.add("esconder");
                        telaFinalSMis[3].classList.add("esconder");
                        telaFinalSorveteMisto.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        sorveteMisto--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;

                case 'frutasvermelhas':
                    let telaFinalSFruVer = document.querySelectorAll(".telaFinalSFruVer");
                    if (sorveteFrutasVermelhas === 1) {
                        sorveteFrutasVermelhas--;
                        itensNoCarrinho--;
                        telaFinalSFruVer[0].classList.add("esconder");
                        telaFinalSFruVer[1].classList.add("esconder");
                        telaFinalSFruVer[2].classList.add("esconder");
                        telaFinalSFruVer[3].classList.add("esconder");
                        telaFinalSorveteFrutasVermelhas.classList.remove("flex");
                        confirmarPedido();
                    } else {
                        sorveteFrutasVermelhas--;
                        itensNoCarrinho--;
                        confirmarPedido();
                    }
                    break;
            }
            break
    }
}

function botaoAdicionar(tipo, sabor) {

    switch (tipo) {
        case 'donuts':
            switch (sabor) {
                case 'chocolate':
                    donutsChocolate++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;
                case 'morango':
                    donutsMorango++;
                    itensNoCarrinho++;
                    confirmarPedido();

                    break;
                case 'coconut':
                    donutsCoconut++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;
            }
            break;

        case 'bubbletea':
            switch (sabor) {
                case 'limao':
                    bubbleTeaLimao++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;

                case 'chocolate':
                    bubbleTeaChocolate++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;

                case 'framboesa':
                    bubbleTeaFramboesa++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;
            }
            break;
        case 'sorvete':
            switch (sabor) {
                case 'baunilha':
                    sorveteBaunilha++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;

                case 'misto':
                    sorveteMisto++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;

                case 'frutasvermelhas':
                    sorveteFrutasVermelhas++;
                    itensNoCarrinho++;
                    confirmarPedido();
                    break;
            }
            break;
    }
}

function voltarTelaPedidos() {
    telaFinal.classList.add("esconder");
    conteudoPrincipal.classList.remove("esconder")
}


function mostrarPedidoUsuario() {
    const pedidoFinalizado = document.querySelector(".pedidoFinalizado");
    const pedido = document.querySelector(".pedido");
    const total = document.querySelector(".total");
    telaFinal.classList.add("esconder");
    pedidoFinalizado.classList.remove("esconder");
    let donutsChoc = (parseFloat('5.99') * donutsChocolate);
    let donutsMor = (parseFloat('6.99') * donutsMorango);
    let donutsCoc = (parseFloat('8.99') * donutsCoconut);

    let bubbleteaLim = (parseFloat('4.99') * bubbleTeaLimao);
    let bubbleteaChoc = (parseFloat('5.99') * bubbleTeaChocolate);
    let bubbleteaFram = (parseFloat('5.99') * bubbleTeaFramboesa);

    let sorveteBaun = (parseFloat('9.99') * sorveteBaunilha);
    let sorveteMis = (parseFloat('9.99') * sorveteMisto);
    let sorveteFruVer = (parseFloat('9.99') * sorveteFrutasVermelhas);

    let valorFinal = (donutsChoc + donutsMor + donutsCoc + bubbleteaLim + bubbleteaChoc + bubbleteaFram + sorveteBaun + sorveteMis + sorveteFruVer).toFixed(2).toString().replace(".", ",")

    if (donutsChocolate > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${donutsChocolate}) Donuts sabor Chocolate <h5>R$${donutsChoc.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }
    if (donutsMorango > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${donutsMorango}) Donuts sabor Morango <h5>R$${donutsMor.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }
    if (donutsMorango > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${donutsCoconut}) Donuts sabor Coco <h5>R$${donutsCoc.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }


    if (bubbleTeaLimao > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${bubbleTeaLimao}) Bubble Tea sabor Limão <h5>R$${bubbleteaLim.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }
    if (bubbleTeaChocolate > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${bubbleTeaChocolate}) Bubble Tea sabor Chocolate <h5>R$${bubbleteaChoc.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }
    if (bubbleTeaFramboesa > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${bubbleTeaFramboesa}) Bubble Tea sabor Framboesa <h5>R$${bubbleteaFram.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }


    if (sorveteBaunilha > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${sorveteBaunilha}) Sorvete sabor Baunilha <h5>R$${sorveteBaun.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }
    if (sorveteMisto > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${sorveteMisto}) Sorvete sabor Misto <h5>R$${sorveteMis.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }
    if (sorveteFrutasVermelhas > 0) {
        pedido.innerHTML += `<div class="flex"><h4>(${sorveteFrutasVermelhas}) Sorvete sabor Frutas Vermelhas <h5>R$${sorveteFruVer.toFixed(2).toString().replace(".", ",")}</h5></h4></div>`
    }

    total.innerHTML = `<h3>Total: R$${valorFinal}</h3>`

}

function colorButton() {
    const carrinhoButton = document.querySelector(".carrinhoButton");
    if (itensNoCarrinho > 0) {
        carrinhoButton.classList.add("colorButton");
        carrinhoButton.classList.add("pointer")
        carrinhoButton.innerText = `Confirmar Pedido (${itensNoCarrinho})`;
    } else {
        carrinhoButton.classList.remove("colorButton");
        carrinhoButton.innerText = `Confirmar Pedido`;
    }
}
