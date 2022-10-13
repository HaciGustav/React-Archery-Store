import FooterStyle from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <p>
                <a href="https://github.com/HaciGustav">
                    <i class="fa-brands fa-linkedin fa-2x"></i>{' '}
                </a>
                <a href="https://www.linkedin.com/in/mehmet-f-k/">
                    <i class="fa-brands fa-github fa-2x"></i>{' '}
                </a>
            </p>
            <p>
                Developed by<span>Mehmet-F-K</span>
            </p>
        </footer>
    );
};

export default Footer;
