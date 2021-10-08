<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref('')
let quantidadeMaximaParcelas = ref(3)

const emit = defineEmits(['update:modelValue'])

const store = useStore()
const { validarParcelamento, erros } = useValidacaoForm()

const validarInput = () => {
	emit('update:modelValue', input.value)
	validarParcelamento('parcelamento', input.value)
}

store.state.form.atendimento.parcelamento ? input.value = store.state.form.atendimento.parcelamento : ''
emit('update:modelValue', input.value)

</script>

<template lang="pug">

p
	label Parcelamento em

	template(v-for="index in quantidadeMaximaParcelas")
		span
			input(
				type="radio"
				:id="index"
				v-model="input"
				:value="index"
				@change="validarInput"
				)
			label(:for="index") {{ index }}x, sem juros

	mensagem-erro(v-if="erros.parcelamento") {{ erros.parcelamento }}

</template>