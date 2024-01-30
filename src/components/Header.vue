

<template>
  <header class="header">
    <RouterLink to="/" class="logo">
      <img src="@/assets/TaVue.svg" alt="Logo" />
    </RouterLink>
    <nav>
      <RouterLink to="/map" class="nav">Ou nous trouver ?</RouterLink>
      <RouterLink to="/Personnalisation" class="nav">Personnaliser vos lunettes</RouterLink>
    </nav>
    <RouterLink to="/connexion" class="signup-btn">CONNECTION</RouterLink>



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
  font-family: 'Montserrat';

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
  background-color: #11485F;
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

.nav {
  color: #11485F;


}
</style>
  