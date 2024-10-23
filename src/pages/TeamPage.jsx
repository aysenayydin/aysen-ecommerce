import React from 'react';
import { Link } from 'react-router-dom';

// Takım üyelerinin verileri
const teamMembers = [
    {
        id: 1,
        name: 'Erhan Fırat',
        profession: "Product Owner",
        image: '/prOwner.jpeg',
        github: 'https://github.com/Workintech',
    },
    {
        id: 2,
        name: 'Gökhan Özdemir',
        profession: "Scrum Master",
        image: '/scrMstr.jpeg',
        github: 'https://github.com/gokhanozdemir'
    },
    {
        id: 3,
        name: 'Ayşen Aydın',
        profession: "Front End Developer",
        image: '/f1.jpeg',
        github: 'https://github.com/aysenayydin'
    },
    {
        id: 4,
        name: 'Çetin Erdem',
        profession: "Full Stack Developer",
        image: '/f2.jpg',
        github: 'https://github.com/ecetinerdem'
    },
    {
        id: 5,
        name: 'Nida Türkay',
        profession: "Full Stack Developer",
        image: '/f3.jpeg',
        github: 'https://github.com/NdaTrky'
    }
];


const TeamMemberCard = ({ member }) => (
    <Link
        to={`/team/${member.name.replace(/ /g, '-').toLowerCase()}`}
        key={member.id}
        className="flex flex-col items-center text-center mx-2 my-4 w-full md:w-48 p-4 bg-white rounded-md shadow-lg hover:shadow-2xl"
    >
        <img
            src={member.image}
            alt={`${member.name}'s profile`}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-bold text-[#252B42] mb-1">{member.name}</h3>
        <p className="text-sm text-[#737373]">{member.profession}</p>
    </Link>
);

function TeamPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-12 md:mt-24">
           
            <div className="flex flex-col items-center justify-center text-center mb-12">
                <h2 className="text-3xl font-bold text-[#252B42] mb-2">Meet Our Team</h2>
                <p className="text-[#737373] w-64 md:w-1/2">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>

           
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:my-16">
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
