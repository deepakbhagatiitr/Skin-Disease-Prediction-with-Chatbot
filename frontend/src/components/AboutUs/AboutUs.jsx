// AboutUs.js
import React from 'react';
import Navbar from '../HomePage/Navbar';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <section className=" dark:bg-gray-900 text-white mt-16 pt-4">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 my-3">
                <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
                <p className="text-lg text-center mb-8">
                    We are a dedicated team of four individuals passionate about leveraging technology to enhance skin health.
                    Our mission is to provide accurate predictions of skin diseases through the analysis of skin photos, empowering users to take proactive steps in their skincare.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
                <ul className="space-y-4 mb-8">
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Md Danish </strong>:
                        <br />
                        <p>Md Danish is  second-year Mechanical Engineering student at IIT Roorkee who is passionate about software development and data science. With experience in leading teams and working on software projects, He bring a strong blend of leadership and technical skills to our skin disease prediction initiative.
                        </p>
                    </li>
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Deepak Bhagat </strong>:
                        <p>I'm Deepak Bhagat, a Software Developer from Delhi, India, studying at IIT Roorkee. I specialize in ReactJS, React Native, Flutter, and Node.js, focusing on creating dynamic web and mobile applications. My recent internship at Absolute Dimension Pvt Ltd has enhanced my skills in software development, while I also contribute to projects in AI and ML, including a mental health support chatbot and optimized irrigation scheduling.I'm passionate about learning new technologies and delivering high-quality solutions. Let's connect!</p>
                    </li>
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Rayyan Khan</strong>:
                        <p>Rayyan is a mechanical engineering undergraduate with a strong passion for web development, data science, and algorithms. He contributed to the front-end development of this project.</p>
                    </li>
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Aakash Raj</strong>:
                        <p>Aakash Raj is a Mechanical Engineering sophomore at Indian Institute of Technology, Roorkee. Deeply interested and curious about technology and AI revolution going around the world. He has contibuted in training the model using CNN.</p>
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Our Inspiration</h3>
                <p className="text-lg mb-8">
                    Our journey began when we realized the increasing number of skin-related health issues in our community.
                    After witnessing friends and family struggle with skin conditions, we wanted to create a solution that offers quick and accessible insights into skin health.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Vision and Goals</h3>
                <p className="text-lg mb-8">
                    Our vision is to develop a user-friendly platform that not only predicts skin diseases but also educates users about skin care practices.
                    We aim to collaborate with healthcare professionals to ensure the accuracy of our predictions and provide users with reliable information.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Join Us!</h3>
                <p className="text-lg">
                    We invite you to explore our platform, share your thoughts, and join us on our mission to promote skin health.
                    Your feedback is invaluable as we continue to enhance our technology and services.
                </p>
            </div>
            <Footer />
        </section>
    );
};

export default AboutUs;
