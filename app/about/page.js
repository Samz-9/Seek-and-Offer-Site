import React from "react";
import Link from "next/link";

const About = () => {
    return (
        <div className="max-h-screen overflow-y-scroll bg-[#09090d]">
            <div className="relative bg-white h-[55vh]">
                <img className="absolute top-0 w-full h-full object-fill opacity-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VWGFVLB0h3PSQFDhLI2gxw8wOJUMto8qZA&s" alt="" />

                <div className=" absolute top-[15vh] px-10">
                    <h2 className="text-3xl font-serif mb-6 text-center text-orange-600">
                        Empowering Communities through Collaboration
                    </h2>

                    <p className="text-lg font-semibold mb-6 text-black">
                        Seek & Offer is a unique platform designed to help Self-Help Groups (SHGs)
                        and NGOs collaborate, share resources, and provide assistance to those in need.
                        We aim to build a stronger community by connecting organizations, volunteers, and
                        donors to facilitate the distribution of help, as well as the sharing of expertise
                        and resources.
                    </p>
                </div>
            </div>

            <section className="py-12 px-10 mx-auto">
                <h3 className="text-2xl font-serif mb-4 text-orange-600">
                    How We Help NGOs and SHGs
                </h3>
                <p className="text-lg font-bold mb-6 text-green-700">
                    Seek & Offer serves as a bridge for NGOs and SHGs, enabling them to:
                </p>
                <ul className="list-disc pl-8 mb-6 font-bold t-lg text-green-700">
                    <li>Request help from other organizations and volunteers.</li>
                    <li>Offer resources or services to other NGOs and SHGs.</li>
                    <li>Build a network of like-minded organizations to collaborate on projects.</li>
                    <li>Share valuable information, knowledge, and insights on best practices.</li>
                </ul>

                <h3 className="text-2xl font-serif mb-4 text-orange-600">
                    Features of Seek & Offer
                </h3>
                <ul className="list-disc pl-8 mb-6 font-bold t-lg text-green-700">
                    <li>Resource exchange: NGOs and SHGs can share physical resources, expertise, and manpower.</li>
                    <li>Easy-to-use platform: A user-friendly interface for easy navigation and quick access to services.</li>
                    <li>Volunteer matching: Connect with individuals who want to contribute to your cause.</li>
                    <li>Project collaboration: Work together on community-driven initiatives that drive meaningful change.</li>
                </ul>

                <h3 className="text-2xl font-serif mb-4 text-orange-600">
                    Join Us and Make a Difference
                </h3>
                <p className="text-lg font-bold mb-6 text-green-700">
                    By joining Seek & Offer, NGOs and SHGs gain access to a wide network of
                    organizations, volunteers, and donors, allowing them to expand their impact
                    and fulfill their mission more effectively. Together, we can create positive
                    change, one collaboration at a time.
                </p>

                <div className="text-center">
                    <Link href="/login">
                        <span className="bg-gradient-to-br from-purple-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-gradient-to-bl">
                            Join Us Now
                        </span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
