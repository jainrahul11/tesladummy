import React from "react"
import Header from "./header"
import Footer from "./footer"
import Content from "./content"

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Content></Content>
                <Footer></Footer>
            </>


        )


    }

}

