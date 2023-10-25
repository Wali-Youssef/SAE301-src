<script setup>
// Import éléments de vue
import { ref, onMounted } from 'vue';
// Import éléments de routage
import { useRouter } from 'vue-router';
const router = useRouter();

/*
// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase('http://127.0.0.1:8090');
*/

import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');

// user connecté ? au départ faux
let isConnected = ref(false)

// Element de connexion
let user = ref('')
let psw = ref('')

// User connecté
let currentUser = ref(null)
let avatar = ref(null)

// Au montage du composant
onMounted(async () => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = () => {
  if (pb.authStore.isValid) {
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      + currentUser.value.collectionId     // Id ou name de la collection concernée
      + "/"
      + currentUser.value.id               // Id de l'utilisateur connecté
      + "/"
      + currentUser.value.avatar           // Nom fichier image pocketbase
      + "?thumb=100x100"                   // Taille par défaut     

    //      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(user.value, psw.value)
    //    console.log("connecté : ",authData)
    refresh()
  } catch (error) {
    //    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = () => {
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value = false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({ name: "HomeView" })
}
</script>
<template>
  <header class="header">
    <RouterLink to="/accueil" class="logo">
      <img src="@/assets/TaVue.svg" alt="Logo" />
    </RouterLink>
    <nav>
      <RouterLink to="/accueil" class="nav">Accueil</RouterLink>
      <RouterLink to="/Personnalisation" class="nav">Personnaliser vos lunettes</RouterLink>
    </nav>
    <RouterLink to="/connexion" class="signup-btn">CONNECTION</RouterLink>

    <div class="ml-auto">
      <span v-if="isConnected">
        <img :src="avatar" class="img-fluid" style="max-width:60px;" />
        <button class="btn btn-light mr-2">
          {{ currentUser.name }}
        </button>
        <button class="btn btn-dark ml-auto" type="button" @click="deconnect">
          <i class="fa fa-sign-out"></i>
        </button>
      </span>

      <form v-else class="form-inline  input-group-sm ml-auto">
        <input class="form-control mr-2" placeholder="Login" v-model="user">
        <input class="form-control mr-2" placeholder="Password" v-model="psw">
        <button class="btn btn-dark ml-auto" type="button" @click.prevent="connect">
          <i class="fa fa-power-off"></i>
        </button>
      </form>
    </div>
  </header>
</template>



<style scoped>
.header {
  background-color: #FFFBF5;
  height: 85px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo img {
  width: 120px;

}

nav {
  display: flex;
  gap: 180px;


}

.nav-btn,
.signup-btn {
  background-color: #220059;
  color: white;
  border: none;
  border-radius: 18px;
  padding: 10px 20px;
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-btn:hover,
.signup-btn:hover {
  background-color: #2c0b7a;
}


nav .nav,
.signup-btn {
  text-decoration: none;
  /* This will remove the underline */

}
</style>
  