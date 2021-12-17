import axios from 'axios';
import { productItem } from '../../services/ProductServices';
import { productList } from '../src/services/ProductServices';

export default{
    created() {
        this.fetchAuthenticatedUser()

    },
    methods: {
        fetchAuthenticatedUser() {
            let token = localStorage.getItem('token');
            if(!token) {
                this.$router.push({path:'/auth/login'});
            }else {
                const result = productItem(id)
                result.then(response=>{
                    if(response.statusCode==400 && this.$route.path != '/merchant-profile'){
                        this.$router.push({path:'/merchant-profile'});
                    }
                    if(response.statusCode==200) {
                        this.user.product_name=response.message[0].product_info.product_name.id
                        this.user.product_description=response.message[0].product_info.product_description.id
                        this.user.product_category=response.message[0].product_info.product_category.id
                        this.user.cost_price=response.message[0].product_info.cost_price.id
                        this.user.selling_price=response.message[0].product_info.selling_price.id
                        this.user.status=response.message[0].product_info.status.id
                        this.user.availability=response[0].product_info.availability.id
                    }
                }).catch(err=>{
                })
            }
        },
        fetchUser() {
            let token = localStorage.getItem('token');
            if(!token){
                this.$router.push({path:'/auth/login'});
            }else {
                const result = productList()
                result.then(response)
            }
        }
    },
    data: () => ({
        users: {
            id: null,
            product_name: '',
            product_description: '',
            product_category: '',
            cost_price: '',
            selling_price: '',
            status: '',
            availability: ''
        }
    }),
    
};