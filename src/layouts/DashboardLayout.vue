<template>
    <div class="app">
        <div class="layout">          
           <header-component/>
           <sidebar-component />
            <div class="page-container">
                
                <!-- Content Wrapper START -->
                <div class="main-content">
                  <router-view></router-view>
                </div>
                <!-- Content Wrapper END -->
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import SidebarComponent from "../components/SidebarComponent.vue"


export default 
 {
  components: { SidebarComponent, HeaderComponent },   
};
</script>