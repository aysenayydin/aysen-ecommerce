import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// Takım üyelerinin verileri
export const teamMembers = [
    {
        id: 1,
        name: 'Erhan Fırat',
        profession: "Product Owner",
        image: '/prOwner.jpeg',
        facebook: 'https://facebook.com/erhanfirat',
        instagram: 'https://instagram.com/erhanfirat',
        twitter: 'https://twitter.com/erhanfirat'
    },
    {
        id: 2,
        name: 'Gökhan Özdemir',
        profession: "Scrum Master",
        image: '/scrMstr.jpeg',
        github: 'https://github.com/gokhanozdemir',
        linkedln: 'https://www.linkedin.com/in/gokhanozdemir/',
        twitter: 'https://twitter.com/gokhanozdemir',
        facebook: 'https://facebook.com/gokhanozdemir'
    },
    {
        id: 3,
        name: 'Ayşen Aydın',
        profession: "Front End Developer",
        image: '/f1.jpeg',
        github: 'https://github.com/aysenayydin',
        linkedln: 'https://www.linkedin.com/in/aysenayydin/',
        twitter: 'https://twitter.com/aysenayydin',
        facebook: 'https://facebook.com/aysenayydin'
    },
    {
        id: 4,
        name: 'Çetin Erdem',
        profession: "Full Stack Developer",
        image: '/f2.jpg',
        github: 'https://github.com/ecetinerdem',
        linkedln: 'https://www.linkedin.com/in/ecetinerdem/',
        twitter: 'https://twitter.com/ecetinerdem',
        facebook: 'https://facebook.com/ecetinerdem'
    },
    {
        id: 5,
        name: 'Nida Türkay',
        profession: "Full Stack Developer",
        image: '/f3.jpeg',
        github: 'https://github.com/NdaTrky',
        linkedln: 'https://www.linkedin.com/in/nida-trky/',
        twitter: 'https://twitter.com/NdaTrky',
        facebook: 'https://facebook.com/NdaTrky'
    }
];


export const TeamMemberCard = ({ member, showSocial = false }) => (
    <div className="flex flex-col items-center text-center mx-2 my-4 w-full md:w-48 p-4 bg-white rounded-md shadow-lg hover:shadow-2xl">
        <img
            src={member.image}
            alt={`${member.name}'s profile`}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-bold text-[#252B42] mb-1">{member.name}</h3>
        <p className="text-sm text-[#737373]">{member.profession}</p>
        {showSocial && (
            <div className="flex justify-center space-x-4 mt-2">
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <FaFacebookF />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <FaInstagram />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                </a>
            </div>
        )}
    </div>
);

function TeamPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-12 md:mt-24">
            <div className="flex flex-col items-center justify-center text-center mb-12">
                <h2 className="text-3xl font-bold text-[#252B42] mb-2">Ekibimizle Tanışın</h2>
                <p className="text-gray w-64 md:w-1/2">
                    Klasik fiziğin iki ana alanı arasındaki çatışmayı çözmeye çalışıyoruz: Newton mekaniği
                </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:my-16">
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} showSocial={false} />
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
