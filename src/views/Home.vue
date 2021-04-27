<template>
  <div>
    <Nav/>
    <Header/>
    <router-view></router-view>
    <Foot/>
  </div>
</template>

<script>
    import Nav from "components/content/Nav";
    import Header from "components/content/Header";
    import Container from "components/content/Container";
    import Foot from "components/content/Foot";
    import Page from "components/content/Page";
    import Page2 from "components/content/Page2";
    export default {
        name: "Home",
        data(){
          return{

          }
        },
        components:{
            Nav,
            Header,
            Container,
            Foot,
            Page,
            Page2
        }
    }
</script>

<style scoped>

</style>
