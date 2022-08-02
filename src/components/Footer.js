import '../stylesheets/Footer.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer(){
    return (
        <div className = 'container-footer'>
            <div class="container-links">
                <section className='section-company'>
                    <h3>Chenille Enterprise</h3>
                        <ul>
                            <ol>
                                <p>
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga, doloribus, exercitation
                                </p>
                            </ol>
                        </ul>
                </section>
                <section className='section-contact'>
                    <h3>Contact</h3>
                        <ul>
                            <ol>1</ol>
                            <ol>2</ol>
                            <ol>3</ol>
                            <ol>4</ol>
                        </ul>
                </section>
                <section className='section-products'>
                    <h3>Products</h3>
                        <ul>
                            <ol>1</ol>
                            <ol>2</ol>
                            <ol>3</ol>
                            <ol>4</ol>
                        </ul>
                </section>
                <section className='section-links'>
                    <h3>Useful Links</h3>
                        <ul>
                            <ol>1</ol>
                            <ol>2</ol>
                            <ol>3</ol>
                            <ol>4</ol>
                        </ul>
                </section>
            </div>
            <div class="container-social">
                <section className='section-social'>
                    <a href='https://github.com/CapitanCrauZ'><AiOutlineGithub className='git-icon'/></a>
                    <a href='https://www.youtube.com/channel/UCu1ryQ8Xakb9YNBIJ0QBySA/about'><AiFillYoutube className='yt-icon'/></a>
                    <a href='capitancrauz@gmail.com'><AiOutlineGoogle className='gmail-icon'/></a>
                    <a href='#'><AiFillFacebook className='fb-icon'/></a>
                    <a href='#'><AiFillLinkedin className='li-icon'/></a>
                </section>
            </div>
        </div>
    );
}

export default Footer;