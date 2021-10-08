<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref('')

const emit = defineEmits(['update:modelValue'])

const store = useStore()
const { validarCpf, erros } = useValidacaoForm()

const validarInput = () => validarCpf('cpf', input.value)

store.state.form.profissional.cpf ? input.value = store.state.form.profissional.cpf : ''
emit('update:modelValue', input.value)

</script>

<template lang="pug">

p
	label(for="cpf") CPF
	input(
		type="text"
		id="cpf"
		v-model="input"
		placeholder="Digite um CPF"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.value)"
		:class="{ '!border-red-400' : erros.cpf }"
		v-maska="'###.###.###-##'"
		)
	mensagem-erro(v-if="erros.cpf") {{ erros.cpf }}

</template>