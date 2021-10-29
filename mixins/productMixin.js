import axios from 'axios'
import { userProfile, editProfile,  } from '../services/ProductServices;


export default{
    created() {
        this.fetchAuthenticatedUser()

    },
    methods: {
        fetchAuthenticatedUser() {
            let token = localStorage.getItem('token');
            if(!token) {
                this.$router.push('/login');
            }else {
                const result = productItem()
                result.then(response=>{
                    if(response.statusCode==400 && this.$route.path != 'secured/products/${id}'){
                        this.$router.push({path:'secured/products/${id}'});
                    }
                    if(response.statusCode==200) {
                        this.user.product_name=response.message[0].product_info.product_name.id
                        this.product_description=response.message[0].product_info.product_description.id
                        this.product_category=response.message[0].product_info.product_category.id
                        this.cost_price=response.message[0].product_info.cost_price.id
                        this.selling_price=response.message[0].product_info.selling_price.id
                        this.status=response.message[0].product_info.status.id
                        this.availability=response[0].product_info.availability.id
                    }.catch(error=>{

                    })
                })
            }
        }
    },
    data: () => ({
        user: {
            id: null,
            product_name: '',
            product_description: '',
            product_category: '',
            cost_price: '',
            selling_price: '',
            status: '',
            availability: 
        }
    }),
    
};
</script>