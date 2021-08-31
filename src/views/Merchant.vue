<<template>
    <div class="d-flex align-items-center justify-content-between m-b-30">
        <form method="post">
            <div>
                <MerchantHeader
                :user="user"
                />
            </div>
            <div class="col-md-4">
            
            </div>
            <div>
                <MerchantBody :user="user"/>
            </div>
        </form> 
    </div>
</template>
<script>
import MerchantHeader from '../views/MerchantHeader';
import MerchantBody from '../views/MerchantBody';
import { userProfile, editProfile,  } from '../services/MerchantProfile';
import { createAccount } from '../services/AccountServices';

export default {
    name: 'Merchant',
    components: {
        MerchantHeader,
        MerchantBody
    },
    data() {
        return {
            user: '',
            authUser: ''
        }
    },
    computed: {
        isLoggedIn() {
            return !!authUser
        }
    },
    created() {
        this.fetchUser(this.$router.params.firstName)

        const token = localStorage.getItem('user-token')

        if(token) {
            this.fetchAuthenticatedUser(token)
        }
    },
    methods: {
        fetchUser(firstName) {
            let username = createAccount()
            if(firstName) {
                username.then(response=>{
                    this.user = response.data.data
                })
            }
        },
        fetchAuthenticatedUser(token) {
            userProfile(),{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }.then(response=>{
                this.authUser = response.data.data
            })
        }
    },
}
</script>