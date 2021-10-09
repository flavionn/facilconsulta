<template lang="pug">

div(class="h-screen w-full flex flex-col space-y-12 items-center justify-center text-center")
	img(
		src="https://facilconsulta.com.br/site/assets/img/parceiros-logo.png"
		class="w-30 opacity-50"
		)

	ui-app-titulo Desafio Fácil Consulta

	p(class="text-lg") Projeto de um cadastro multi-step desenvolvido para participar do desafio da Fácil Consulta para uma vaga de front-end.

	div(class="flex space-x-4")
		ui-botao-link(
			class="bg-hex-483698 text-white hover:(bg-opacity-90) cursive"
			to="cadastro-profissional"
			) Ver demo cadastro

		ui-botao-link(
			class="border-gray-300 hover:(border-gray-400) cursive"
			to="https://www.github.com/flavionn/facilconsulta"
			) Ver código fonte

</template>