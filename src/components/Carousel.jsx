import { useEffect, useState } from "react";
import img1 from "../images/1.webp";
import img2 from "../images/2.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";
import img5 from "../images/5.webp";
import img6 from "../images/6.webp";
import img7 from "../images/7.webp";
import {  socialLinks } from "../data";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex == images.length - 1 ? 0 : prevIndex + 1);
        }, 5000);
        setIntervalId(interval);

        return () => clearInterval(interval);

    }, []);

    const prevSlide = () => {
        clearInterval(intervalId);
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        clearInterval(intervalId);
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleTabClick = (index) => {
        clearInterval(intervalId);
        setCurrentImageIndex(index);
    };

    return (

        <div className="carousel" id="home">
        <ul className="nav-icons">
            {socialLinks.map((link) => {
                const { id, href, icon } = link;
                return (
                  <li key={id}>
                    <a
                      href={href}
                      className="nav-icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className={icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className='hero-banner' style={{ background: `linear-gradient(hsla(157, 74%, 67%, 0.171), rgba(0, 8, 8, 0.7)), url(${images[currentImageIndex]}) no-repeat center/cover`, width: '100%', height: '100vh', position: 'relative' }}>
                <p>
                    A world where biodiversity thrives, ecosystems are protected, and communities live in harmony with nature, fostering a sustainable future for all
                </p>
                <a href="#tours" className="btn hero-btn">
                    explore CTBC
                </a> </div>

            <button className="btn-prev-slide" onClick={nextSlide} aria-label="Previous Slide"><FontAwesomeIcon className="prev-icon" icon={faChevronRight} /></button>
            <button className="btn-next-slide" onClick={prevSlide} aria-label="Next Slide"><FontAwesomeIcon className="next-icon" icon={faChevronLeft} /></button>

            <div className="tabs-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={currentImageIndex == index ? 'tab tab-active' : 'tab'}
                        onClick={() => handleTabClick(index)}
                    />
                ))}
            </div>

        </div>
    );
}


export default Carousel;