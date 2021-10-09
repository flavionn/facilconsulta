<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'
import useFormasPagamento from '@/modules/FormasPagamento'

let input = ref(props.valor)
let formasPagamento = ref([])

const props = defineProps({ valor: Array })
const emit = defineEmits(['forma', 'update:modelValue'])

const { validarFormaPagamento, erros } = useValidacaoForm()
const { listaFormasPagamento } = useFormasPagamento()

const emitir = () => {
	emit('forma', input.value)
	emit('update:modelValue', input.value)
}

const validarInput = () => {
	emitir()
	validarFormaPagamento('forma', input.value)
}

formasPagamento.value = listaFormasPagamento

</script>

<template lang="pug">

p
	label Formas de pagamento da consulta *
	template(v-for="item in formasPagamento")
		span
			input(
				type="checkbox"
				:id="item.id"
				v-model="input"
				:value="item.id"
				@change="validarInput"
				)
			label(:for="item.id") {{ item.label }}

	mensagem-erro(v-if="erros.forma") {{ erros.forma }}

</template>