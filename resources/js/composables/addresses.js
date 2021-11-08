import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

export default function useAddresses() {
    const address = ref([])
    const addresses = ref([])

    const errors = ref('')
    const router = useRouter()

    const getAddresses = async (id) => {
        let response = await axios.get(`/api/clients/${id}/addresses`)
        addresses.value = response.data.data
    }

    const getAddress = async (id) => {
        let response = await axios.get(`/api/addresses/${id}`)
        address.value = response.data.data
    }

    const storeAddress = async (id, data) => {
        errors.value = ''
        try {
            await axios.post(`/api/addresses/${id}`, data)
            await router.push({name: 'addresses.index'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    const updateAddress = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/addresses/${id}`, address.value)
            await router.push({name: 'addresses.index'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }
    const destroyAddress = async (id) => {
        await axios.delete(`/api/addresses/${id}`)
    }

    return {
        errors,
        address,
        addresses,
        getAddress,
        getAddresses,
        storeAddress,
        updateAddress,
        destroyAddress
    }
}
