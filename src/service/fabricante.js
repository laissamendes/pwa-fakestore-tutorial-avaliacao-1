import axios from 'axios'

export default class FabricanteService {
  async getFabricantes() {
    const response = await axios.get('/fabricantes/')
    return response.data.results
  }

  async createFabricante(fabricante) {
    const response = await axios.post('/fabricantes/', fabricante)
    return response.data
  }

  async deleteFabricante(fabricante_id) {
    await axios.delete(`/fabricantes/${fabricante_id}`)
  }
}
