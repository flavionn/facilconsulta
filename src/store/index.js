import { createStore } from 'vuex'

const state = {
	form: {
		profissional: {
			tudoOk: false,
			nome: '',
			cpf: '',
			celular: '',
			estado: '',
			cidade: '',
		},
		atendimento: {
			tudoOk: false,
			especialidade: '',
			preco: '',
			forma: [],
			parcelamento: '',
		}
	}
}

const mutations = {
	setarDadosProfissional(state, dados) {
		state.form.profissional = dados
		state.form.profissional.tudoOk = true
	},
	setarDadosAtendimento(state, dados) {
		state.form.atendimento = dados
		state.form.atendimento.tudoOk = true
	}
}

const actions = {
	salvarDadosProfissional({ commit }, dados) {
		commit('setarDadosProfissional', dados)
	},
	salvarDadosAtendimento({ commit }, dados) {
		commit('setarDadosAtendimento', dados)
	}
}

export default createStore({
	state,
	mutations,
	actions
})