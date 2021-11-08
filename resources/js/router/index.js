import {createRouter, createWebHistory} from 'vue-router'

import ClientsIndex from '../components/clients/ClientsIndex.vue'
import ClientsCreate from '../components/clients/ClientsCreate.vue'
import ClientsEdit from '../components/clients/ClientsEdit.vue'
import AddressIndex from '../components/addresses/AdressesIndex.vue'
import AddressCreate from '../components/addresses/AddressesCreate.vue'
import AddressEdit from '../components/addresses/AddressesEdit.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'clients.index',
        component: ClientsIndex
    },
    {
        path: '/clients/create',
        name: 'clients.create',
        component: ClientsCreate
    },
    {
        path: '/clients/:id/edit',
        name: 'clients.edit',
        component: ClientsEdit,
        props: true
    },
    {
        path: '/clients/:id/addresses',
        name: 'addresses.index',
        component: AddressIndex,
        props: true
    },
    {
        path: '/clients/:id/addresses/create',
        name: 'addresses.create',
        component: AddressCreate,
        props: true
    },
    {
        path: '/addresses/:id/edit',
        name: 'addresses.edit',
        component: AddressEdit,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})
