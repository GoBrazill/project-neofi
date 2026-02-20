import imageMain from '../../assets/images/image-main.svg'
import iconPlay from '../../assets/images/icon-play.svg'
import './index.css'

export default function () {
    return (
        <main>
            <div class="main-content">
                <button class="live">
                    <div class="live-circle"> </div>
                    Decentralised
                </button>

                <h1>Revolutionizing Web3 Finance</h1>
                <p class="subtitle">Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.</p>
                <div class="btn-wrapper-alt-2">
                    <button class="btn-wrapper-green">Get Started</button>
                    <button class="live"><img src={iconPlay} alt="" /> Watch video</button>
                </div>
            </div>
            <img src={imageMain} alt="" />
        </main>
    )
}