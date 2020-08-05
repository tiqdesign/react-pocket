import React, { Component } from 'react'
import styles from './discoverContent.module.css'

export default class DiscoverContent extends Component {
    render() {
        return (
            <div className={styles.contentContainer}>
                    <h2>Fast And Safe</h2>
                    <span>Lorem ipsum dolor sit amet, con   sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</span>
            </div>
        )
    }
}
