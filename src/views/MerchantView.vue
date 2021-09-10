<<template>
    <div class="d-flex align-items-center justify-content-between m-b-30">
        <form method="post">
            <div>
            
            </div>
            <div class="col-md-4">
            
            </div>
            <div>
               
            </div>
        </form> 
    </div>
</template>
<script>
export default {
   props:['user'],
    created(){
        console.log(this.user)
        this.business_name = this.user.business_name
        this.full_address = this.user.full_address
        this.date_of_birth = this.user.date_of_birth
        this.state = this.user.state_id
        this.city = this.user.city
        this.language = this.user.language
        this.bvn_number = this.user.bvn_number
        this.nin_number = this.user.nin_number
        this.account_name = this.user.account_name
        this.bank = this.user.bank_id
        this.account_type = this.user.account_type
        this.branch = this.user.branch
        //  this.getBaseData();
        //this.fetchAuthenticatedUser();
    },
    data(){
        return {
            errorMessage:'',
            business_name:'',
            full_address:'',
            state:'',
            bvn_number:'',
            nin_number:'',
            city:'',
            language:'',
            date_of_birth:'',
            account_name:'',
            bank:'',
            account_type:'',
            branch:''
        }
    },
}