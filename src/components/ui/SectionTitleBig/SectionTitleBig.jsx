import React from 'react'
import s from './SectionTitleBig.module.scss'

const SectionTitleBig = ({ children }) => {
    return (
        <>
            <h1 className={s.title}>{children}</h1>
        </>
    )
}

export default SectionTitleBig