import { createStore } from 'vuex'

const state = {
	form: {
		profissional: {
			nome: 'Flávio',
			cpf: '89089089089',
			celular: '89089089089',
			estado: 'sc',
			cidade: 'Florianópolis'
		},
		atendimento: {
			especialidade: 'Cardiologia',
			preco: '100',
			forma: [ 'dinheiro', 'credito' ],
			parcelamento: 2
		}
	}
}

const mutations = {
	setarDadosProfissional(state, dados) {
		state.form.profissional = dados
	},
	setarDadosAtendimento(state, dados) {
		state.form.atendimento = dados
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