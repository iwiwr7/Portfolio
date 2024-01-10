import React from 'react';
import HeroImg2 from '../components/HeroImg2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GithubCard from '../components/GithubCard';

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
            <GithubCard />
            <Footer />
        </div>
    )
}

export default Project;