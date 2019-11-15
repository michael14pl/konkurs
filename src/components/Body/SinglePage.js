import React from 'react';
import './SinglePage.scss';
import { Icon } from '@iconify/react';



const SinglePage = ({ page }) => {
    return (
        <div className="body-portfolio-item" >
            <div>
                <a href={page.address} target="_blank" rel="noopener noreferrer"><img src={page.image} alt="page-figure" /></a>

            </div>
            <div className="body-skills-item">
                <div className="font-style-title">{page.title}</div>
                <div className="text-style">{page.description}</div>
                <div className="font-style-tech">Technologie</div>
                <div className="font-style-icons">
                    {page.technologies && page.technologies.map(technology => <Icon icon={technology.icon} key={technology.name} />)}
                </div>
            </div>
        </div>
    )
}

export default SinglePage;