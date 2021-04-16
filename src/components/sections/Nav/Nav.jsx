import S from "./Nav.module.scss"
import Logo from "../../../../public/svg/logo-black.svg";
import { useTheme } from "@/theme/useTheme"
import themes from '@/theme/schema.json'
import Switch from "react-switch";
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap'
import Avatar from "@c/parts/avatar/Avatar"; 
import useTranslation from 'next-translate/useTranslation';

function Nav(props) {
    const { t, lang } = useTranslation('common')

    const { setMode, theme } = useTheme();
    const [isDark, setIsDark] = useState(theme.name == 'Dark')


    const themeToggler = () => {
        setIsDark(prev => !prev)
        const targetTheme = theme.name == 'Dark' ? 'light' : 'dark'
        console.log(themes.data[targetTheme]);
        setMode(themes.data[targetTheme]);
        props.setter(themes.data[targetTheme]);
    };
    return (
        <>
            <nav>
                <div className="d-flex py-4 align-items-center justify-content-between">
                    <Logo />
                    <div className="d-flex align-items-center">
                        <Switch
                            className="mr-3"
                            uncheckedIcon={false} checkedIcon={false} height={24} width={45} handleDiameter={22}
                            uncheckedHandleIcon={<div className="icon-sun centred-icon"></div>}
                            checkedHandleIcon={<div className="icon-moon text-white centred-icon"></div>}
                            checked={isDark} onChange={({ theme }) => themeToggler()}
                            onColor="#7b7d82" onHandleColor="#403e3e"
                        />
                        <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-link d-flex align-items-center">
                                <Avatar FirstName="Ach" LastName="A"></Avatar>
                         </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><i className="mr-2 icon-user"/><span>{t('nav.userDropdown.profile')}</span></Dropdown.Item>
                                <Dropdown.Item href="#/action-1"><i className="mr-2 icon-calendar"/><span>{t('nav.userDropdown.events')}</span></Dropdown.Item>
                                <Dropdown.Divider className="w-75 mx-auto"/>
                                <Dropdown.Item href="#/action-1"><i className="mr-2 icon-logout"/><span>{t('nav.userDropdown.disconnect')}</span></Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>
            </nav>

        </>

    )
}

export default Nav