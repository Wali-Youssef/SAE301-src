<template>
  <div>
    <!-- Votre container existant -->
    <div class="image-container">
      <img src="@/assets/PAGE1.svg" alt="Description de l'image" />
      <button class="overlay-button">PERSONNALISER</button>
    </div>

    <!-- Conteneur avec la couleur spécifiée -->
    <div class="color">
      <!-- Le bloc à partir duquel vous souhaitez la couleur -->
      <div class="couleurblanc">
        <div class="flex-container">
          <h2> Grace a </h2>
          <img src="@/assets/Tavue.svg" alt="Description de l'image" />
          <h2>vous pouvez modifier </h2>
        </div>
      </div>

      <!-- Les trois images que vous avez demandé -->
      <div class="lunette-wrapper">
        <div class="lunette-container">
          <img src="@/assets/lunette1.svg" alt="Lunette 1" />
          <div class="line"></div>
          <p>Les branches</p>
        </div>
        <div class="lunette-container">
          <img src="@/assets/lunette2.svg" alt="Lunette 2" />
          <div class="line"></div>
          <p>Le cadran</p>
        </div>
        <div class="lunette-container">
          <img src="@/assets/lunette3.svg" alt="Lunette 3" />
          <div class="line"></div>
          <p>Les verres</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ImageView"
};
</script>

<style scoped>
/* Vos styles existants */
.color {
  background-color: #FFFBF5;
}

.couleurblanc {
  background-color: #FFFBF5;
}

.image-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container {
  position: relative;
}

.overlay-button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 15px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.overlay-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.8);
}

.flex-container {
  display: flex;
  align-items: center;
}

.flex-container>* {
  margin: 0 10px;
  margin-top: 60px;
  margin-left: 40px;
}

/* Styles pour les éléments ajoutés */
.lunette-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.lunette-container {
  display: inline-block;
  text-align: center;
  width: 33.33%;
  vertical-align: top;
}

.lunette-container img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  background-color: #FFFBF5;
}

.lunette-container .line {
  height: 2px;
  background-color: black;
  width: 70%;
  margin: 10px auto;
}

.lunette-container p {
  margin-top: 10px;
  background-color: #FFFBF5;
}
</style>
