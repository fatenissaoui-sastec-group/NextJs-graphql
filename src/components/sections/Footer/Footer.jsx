import S from "./Footer.module.scss"
import useTranslation from 'next-translate/useTranslation'


function Footer(props) {
    const { t, lang } = useTranslation('common')
    
    return (
        <footer className={S.footer}>
            <div className="container">
                <div className="col-lg-8 offset-lg-2">
                    <div className="d-md-flex text-center justify-content-md-between">
                        <div>© 2021 <b>EMPREINTE</b></div>
                        <div>
                            <a href="#">{t('footer.link1')}</a>|
                                <a href="#">{t('footer.link2')}</a>|
                                <a href="#">{t('footer.link3')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer