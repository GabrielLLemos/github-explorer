import './styles.css'

const Profile = () => (
    <div class="profile">
        <div class="profile-info">
                <img src="images/Profile.jpeg" alt='Imagem do Perfil'/>
                <h1>Gabriel Lemos</h1>
                <p class="external-profile">
                    @Teste
                </p>
                <p>
                    Em desenvolvimento
                </p>
        </div>

        <div class="social">
            <div class="local">
                <img alt='Local Icon'/> <p>Brasil, Rio de Janeiro - Maracanã</p>
            </div>

            <div class="social-media">
                    <img src="images/LinkedIn.png" alt='LinkedIn Icon'/> <a href="https://www.linkedin.com/in/gabriel-de-lemos-lemos">Meu linkedIn</a>
            </div>
        </div>
    </div>
)

export default Profile;