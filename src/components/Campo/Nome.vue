<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref('')

const emit = defineEmits(['update:modelValue'])

const store = useStore()
const { validarNome, erros } = useValidacaoForm()

const validarInput = () => validarNome('nome', input.value)

store.state.form.profissional.nome ? input.value = store.state.form.profissional.nome : ''
emit('update:modelValue', input.value)

</script>

<template lang="pug">

p
	label(for="nome") Nome completo *
	input(
		type="text"
		id="nome"
		v-model="input"
		placeholder="Digite o nome completo"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.value)"
		:class="{ '!border-red-400' : erros.nome }"
		)
	mensagem-erro(v-if="erros.nome") {{ erros.nome }}

</template>