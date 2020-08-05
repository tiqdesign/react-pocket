import styles from "./header.module.css";
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className={styles.headerContainer}>
                <span className={styles.header}>{this.props.text}</span>
            </div>
        )
    }
}
