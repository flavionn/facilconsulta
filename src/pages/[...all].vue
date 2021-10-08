<template lang="pug">

div(class="bg-red-500 h-screen w-full flex flex-col space-y-2 items-center justify-center text-3xl text-white")
	div Página não encontrada
	router-link(to="/") Voltar para o início

</template>

<route lang="yaml">

meta:
  layout: 404

</route>