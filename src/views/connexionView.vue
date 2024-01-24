<script>
import PocketBase from 'pocketbase'
/*var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
    pocketbase_ip = "http://tavue.youssefwali.fr";
else pocketbase_ip = "http://127.0.0.1:8090";*/

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

var connected = false;
var currentUser;
export default {
    methods: {
        //this method allows a new user to sign up the system. Once done, the user receives an email
        //asking for account validation. Once the validation made the user is added to the system
        async login() {
            await pb
                .collection("users")
                .authWithPassword(
                    document.getElementById("email").value,
                    document.getElementById("passwd").value
                );

            if (pb.authStore.isValid) {
                document.getElementById("status").innerHTML = "Vous etes maintenant connecté(e)";
                connected = true;
                currentUser = pb.authStore.model;
                this.$router.push('/');


            }
        },
        //this method allows the already registred user to log in the system.
        async register() {
            currentUser = await pb.collection("users").create({
                email: document.getElementById("email").value,
                password: document.getElementById("passwd").value,
                passwordConfirm: document.getElementById("passwd").value,
                name: "John Di",
            });
            if (currentUser) {
                document.getElementById("status").innerHTML =
                    "Nous vous avons envoyer un mail de vérifictaion ...";
                await pb
                    .collection("users")
                    .requestVerification(document.getElementById("email").value);
            }
        },
        async googlelogin() {
            await pb.collection("users").authWithOAuth2({ provider: "google" });
            if (pb.authStore.isValid) {
                document.getElementById("status").innerHTML = "Vous êtes maintenant connecté avec Google";
                connected = true;
                currentUser = pb.authStore.model;
                document.getElementById("signOut").style.visibility = "hidden";
                document.getElementById("addPoem").style.visibility = "visible";
            }
        },
        async loginGithub() {
            await pb.collection("users").authWithOAuth2({ provider: "github" });
            if (pb.authStore.isValid) {
                document.getElementById("status").innerHTML = "Vous êtes maintenant connecté(e) avec Github";
                connected = true;
                currentUser = pb.authStore.model;
            }
        },
        async createPoem() {
            const record = await pb.collection("poems").create({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
                private: document.getElementById("notpublic").value,
                email: currentUser.email,
                illustration: document.getElementById("file").files[0],
            });
        },
    },
};
</script>
<template>
    <div class="login-container">
        <div class="card">
            <h1>Connectez-vous !</h1>
            <div class="input-group">
                <label for="email">Adresse mail</label>
                <input class="input-field" type="email" required id="email" placeholder="username@domain.tld" />
            </div>
            <div class="input-group">
                <label for="passwd">Mot de passe</label>
                <input class="input-field" type="password" required id="passwd" />
            </div>
            <button class="btn register-btn" v-on:click="register()">S'inscrire</button>
            <button class="btn login-btn" v-on:click="login()">Se connecter</button>
            <div class="social-login">
                <button class="btn google-btn" v-on:click="googlelogin()">Google</button>
                <button class="btn github-btn" v-on:click="loginGithub()">Github</button>
            </div>
            <p class="status"><label id="status"> Vous n'êtes pas connecté </label></p>
        </div>
    </div>
</template>

<style>
.login-container {
    background-color: #11485F;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.card {
    background-color: #FFFBF5;
    padding: 20px;
    border-radius: 12px;
    width: 320px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

.input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
}

.btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.register-btn {
    background-color: #007BFF;
    color: #FFF;
    margin-bottom: 10px;
}

.login-btn {
    background-color: #28a745;
    color: #FFF;
}

.social-login {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.google-btn {
    background-color: #DB4437;
    color: #FFF;
    width: 48%;
}

.github-btn {
    background-color: #333;
    color: #FFF;
    width: 48%;
}

.status {
    color: #666;
    text-align: center;
    margin-top: 15px;
}
</style>