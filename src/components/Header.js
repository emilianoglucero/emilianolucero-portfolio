import React from 'react';

import MainAnimation from '../components/MainAnimation';

export const Header = () => {
    return (
        <div>
            <p className="my-5 leading-normal">Hello, my name is <span className="font-semibold">Emiliano</span>.<br />
            I'm a Front End Developer working remotely from Ciudad de Córdoba, Argentina.</p> 
            <div className="my-11">
                <MainAnimation style={{height: "70%", width: "70%", margin: "auto"}} />
            </div>
            <p className="my-11 leading-normal">
                I enjoy building everything from small business sites to rich interactive web apps.
            </p>
            <p className="leading-normal my-16">
            Interested in hiring me or doing a project together?
            </p>

            <a href="mailto:emilianoglucero@gmail.com" 
                rel="noreferrer" 
                target="_blank" 
                className="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-md"
                >EMAIL ME</a>


            <p className="leading-normal mt-24 mb-14">
            Personal experiments and some client projects:
            </p>
        </div>
    )
}
