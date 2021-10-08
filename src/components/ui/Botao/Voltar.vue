<script setup>

import IconeVoltar from '~icons/iconoir/nav-arrow-left'

</script>

<template lang="pug">

a(
	@click="$router.go(-1)"
	class="cursor-pointer inline-block leading-none"
	)
	icone-voltar(class="text-3xl")


</template>