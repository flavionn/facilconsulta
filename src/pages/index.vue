<template lang="pug">

pagina-container
	img(
		src="https://facilconsulta.com.br/site/assets/img/parceiros-logo.png"
		class="w-30 opacity-50"
		)

	ui-app-titulo Desafio Fácil Consulta

	p Projeto de um cadastro multi-step desenvolvido para participar do desafio da Fácil Consulta para uma vaga de front-end.

	div(class="flex space-x-4")
		ui-botao-link(
			class="bg-facilConsulta-primary text-facilConsulta-secondary0 hover:(bg-opacity-90) cursive"
			to="cadastro-profissional"
			) Ver demo cadastro

		ui-botao-link(
			class="border-facilConsulta-secondary3 hover:(border-facilConsulta-secondary7) cursive"
			to="https://www.github.com/flavionn/facilconsulta"
			) Ver código fonte

</template>