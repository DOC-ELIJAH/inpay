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
   props:['user'],
    components: {
        MerchantHeader,
        MerchantBody
    },
    data() {
        return {
            user: '',
            //authUser: ''
        }
    },
    created() {
        return this.user
}