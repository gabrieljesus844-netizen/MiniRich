const calculadoras = {

"credito-habitacao":{
titulo:"Crédito Habitação",
descricao:"Simule a prestação do crédito habitação.",
campos:["Valor do imóvel","Entrada inicial","Taxa de juro (%)","Prazo (anos)"]
},

"credito-automovel":{
titulo:"Crédito Automóvel",
descricao:"Simule o financiamento de um carro.",
campos:["Valor do carro","Entrada inicial","Taxa de juro (%)","Prazo (anos)"]
},

"credito-pessoal":{
titulo:"Crédito Pessoal",
descricao:"Calcule a prestação de um crédito pessoal.",
campos:["Valor do empréstimo","Taxa de juro (%)","Prazo (anos)"]
},

"amortizacao-emprestimo":{
titulo:"Amortização de Empréstimo",
descricao:"Veja como reduzir o tempo do empréstimo.",
campos:["Valor do empréstimo","Prestação mensal","Amortização extra"]
},

"custo-total-credito":{
titulo:"Custo Total do Crédito",
descricao:"Descubra quanto vai pagar no total.",
campos:["Valor do empréstimo","Taxa de juro (%)","Prazo (anos)"]
},

"pagamento-antecipado":{
titulo:"Pagamento Antecipado",
descricao:"Simule pagar o empréstimo mais cedo.",
campos:["Valor do empréstimo","Prestação mensal","Pagamento extra"]
},

"comparador-credito":{
titulo:"Comparador de Crédito",
descricao:"Compare dois créditos diferentes.",
campos:["Valor crédito A","Taxa A (%)","Valor crédito B","Taxa B (%)"]
},

"simulador-hipoteca":{
titulo:"Simulador Hipoteca",
descricao:"Simule financiamento com garantia imobiliária.",
campos:["Valor do imóvel","Entrada inicial","Taxa de juro (%)","Prazo (anos)"]
},

"juros-compostos":{
titulo:"Juros Compostos",
descricao:"Veja como o dinheiro cresce ao longo do tempo.",
campos:["Capital inicial","Aporte mensal","Taxa (%)","Anos"]
},

"crescimento-investimento":{
titulo:"Crescimento de Investimento",
descricao:"Simule crescimento de um investimento.",
campos:["Investimento inicial","Taxa (%)","Anos"]
},

"dividendos":{
titulo:"Dividendos",
descricao:"Calcule rendimento anual de dividendos.",
campos:["Valor investido","Dividend yield (%)"]
},

"valor-futuro":{
titulo:"Valor Futuro",
descricao:"Descubra quanto valerá um investimento.",
campos:["Capital inicial","Taxa (%)","Anos"]
},

"rentabilidade-anual":{
titulo:"Rentabilidade Anual",
descricao:"Calcule retorno anual do investimento.",
campos:["Valor inicial","Valor final","Anos"]
},

"regra-4":{
titulo:"Regra dos 4%",
descricao:"Descubra quanto pode retirar na reforma.",
campos:["Património total"]
},

"tempo-duplicar-investimento":{
titulo:"Tempo para Duplicar Investimento",
descricao:"Use a regra dos 72.",
campos:["Taxa de retorno (%)"]
},

"simulador-acoes-etf":{
titulo:"Simulador Ações e ETF",
descricao:"Simule ganhos com ações ou ETF.",
campos:["Valor investido","Taxa média (%)","Anos"]
},

"poupanca-mensal":{
titulo:"Poupança Mensal",
descricao:"Calcule quanto poupa por mês.",
campos:["Valor mensal","Anos"]
},

"poupanca-anual":{
titulo:"Poupança Anual",
descricao:"Veja quanto acumula por ano.",
campos:["Valor mensal"]
},

"poupanca-casa":{
titulo:"Poupança para Casa",
descricao:"Simule poupança para comprar casa.",
campos:["Valor mensal","Anos"]
},

"fundo-emergencia":{
titulo:"Fundo de Emergência",
descricao:"Calcule fundo de segurança financeira.",
campos:["Despesas mensais","Meses de segurança"]
},

"poupanca-carro":{
titulo:"Poupança para Carro",
descricao:"Descubra quanto precisa poupar.",
campos:["Preço do carro","Anos"]
},

"poupanca-viagem":{
titulo:"Poupança para Viagem",
descricao:"Planeie uma viagem.",
campos:["Custo da viagem","Meses"]
},

"poupanca-filhos":{
titulo:"Poupança para Filhos",
descricao:"Planeie poupança para educação.",
campos:["Valor mensal","Anos"]
},

"simulador-irs":{
titulo:"Simulador IRS",
descricao:"Estimativa do imposto anual.",
campos:["Rendimento anual","Despesas dedutíveis"]
},

"estimativa-imposto-anual":{
titulo:"Estimativa de Imposto Anual",
descricao:"Calcule imposto aproximado.",
campos:["Rendimento anual"]
},

"imposto-investimentos":{
titulo:"Imposto sobre Investimentos",
descricao:"Calcule imposto sobre ganhos.",
campos:["Lucro obtido"]
},

"mais-valias":{
titulo:"Mais-valias",
descricao:"Calcule imposto sobre venda de ativos.",
campos:["Valor compra","Valor venda"]
},

"imposto-imoveis":{
titulo:"Imposto sobre Imóveis",
descricao:"Estimativa de impostos imobiliários.",
campos:["Valor do imóvel"]
},

"deducao-fiscal":{
titulo:"Dedução Fiscal",
descricao:"Descubra deduções possíveis.",
campos:["Despesas dedutíveis"]
},

"orcamento-mensal":{
titulo:"Orçamento Mensal",
descricao:"Organize receitas e despesas.",
campos:["Rendimento mensal","Despesas mensais"]
},

"reducao-divida":{
titulo:"Redução de Dívida",
descricao:"Planeie pagar dívidas.",
campos:["Dívida total","Pagamento mensal"]
},

"metodo-snowball":{
titulo:"Método Snowball",
descricao:"Simule método bola de neve.",
campos:["Dívida total","Pagamento mensal"]
},

"metodo-avalanche":{
titulo:"Método Avalanche",
descricao:"Simule método avalanche.",
campos:["Dívida total","Pagamento mensal"]
},

"divida-total":{
titulo:"Dívida Total",
descricao:"Calcule dívida acumulada.",
campos:["Dívida cartão","Dívida crédito"]
},

"gestao-despesas":{
titulo:"Gestão de Despesas",
descricao:"Controle despesas mensais.",
campos:["Rendimento mensal","Despesas"]
},

"salario-liquido":{
titulo:"Salário Líquido",
descricao:"Calcule salário após impostos.",
campos:["Salário bruto"]
},

"salario-anual":{
titulo:"Salário Anual",
descricao:"Calcule rendimento anual.",
campos:["Salário mensal"]
},

"taxa-esforco":{
titulo:"Taxa de Esforço",
descricao:"Veja percentagem de rendimento usada em créditos.",
campos:["Prestação mensal","Rendimento mensal"]
},

"rendimento-disponivel":{
titulo:"Rendimento Disponível",
descricao:"Quanto sobra após despesas.",
campos:["Rendimento mensal","Despesas"]
},

"comparacao-salarial":{
titulo:"Comparação Salarial",
descricao:"Compare dois salários.",
campos:["Salário A","Salário B"]
}

};
