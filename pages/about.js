import Layout from "@/components/Layout";
import { useEffect } from "react";

const About = () => {
    if(typeof window !== 'undefined' && 'localStorage' in window){
        const color = JSON.parse(localStorage.getItem('color'));
    }

    return (
        <>
        <Layout>
            <hr className={color}></hr>
        <h1>It's my birthdayyyyy</h1>

        </Layout>
        </>
    )
}

export default About;
