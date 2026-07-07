import neofiLogo from '../../assets/icons/neofi-logo.svg'
import './index.css'

export default function Header() {
    return (
        <header>
            <div class="logo-wrapper">
                <img src={neofiLogo} alt="" />
                    <p>NeoFi</p>
            </div>
            <div class="nav-header">
                <ul>
                    <li><a class="is-active" href="">Home</a></li>
                </ul>
                <ul>
                    <li><a href="">Features</a></li>
                </ul>
                <ul>
                    <li><a href="">Testimonial</a></li>
                </ul>
                <ul>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div class="btn-wrapper-alt-1">
                <button>Log in</button>
                <button class="btn-wrapper-green">Try For Free</button>
            </div>
        </header>
    )
}