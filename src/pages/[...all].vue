<template lang="pug">

div(class="h-screen w-full flex flex-col space-y-8 items-center justify-center text-center text-3xl")
	ui-app-titulo Página não encontrada

	router-link(
		to="/"
		class="border-b border-gray-300 hover:(border-gray-500) text-xl"
		) Voltar para o início

</template>

<route lang="yaml">

meta:
  layout: 404

</route>