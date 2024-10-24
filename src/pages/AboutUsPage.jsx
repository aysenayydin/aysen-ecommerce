import React from "react";
import Brands from "../components/shared/Brands";
import { teamMembers, TeamMemberCard } from "./TeamPage";
import { Button } from "@/components/ui/button";

function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-sm font-bold text-gray-500 mb-4">ABOUT COMPANY</h2>
          <h1 className="text-5xl font-bold mb-4">ABOUT US</h1>
          <p className="text-lg mb-8 text-gray-600">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Get Quote Now
          </button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-pink-100 rounded-full w-[500px] h-[500px] relative overflow-hidden">
            <img
              src="/aboutpic.png"
              alt="About Us"
              className="absolute bottom-0 right-0 w-[80%] h-auto"
            />
          </div>
          <div className="absolute top-0 left-0 w-8 h-8 bg-purple-500 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-purple-500 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-pink-200 rounded-full"></div>
        </div>
      </div>

      <section className="mb-16">
        <h3 className="text-red-500 text-sm mb-2">Problems trying</h3>
        <div className="flex flex-col lg:flex-row justify-between">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:w-1/2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
          <p className="text-gray-600 lg:w-1/3">
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-wrap justify-between">
          <div className="text-center w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-5xl font-bold mb-2">15K</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-5xl font-bold mb-2">150K</h3>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-5xl font-bold mb-2">15</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div className="text-center w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-5xl font-bold mb-2">100+</h3>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Ekibimizle Tanışın</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.slice(0, 3).map((member) => (
            <TeamMemberCard key={member.id} member={member} showSocial={true} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">Çalıştığımız Markalar</h2>
        <Brands />
      </section>

      <section className="mt-16 bg-blue-500 text-white p-12 rounded-lg text-center">
        <h3 className="text-sm font-bold mb-4">WORK WITH US</h3>
        <h2 className="text-4xl font-bold mb-4">Now Let's grow Yours</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          The gradual accumulation of information about atomic and small-scale behavior during the
          first quarter of the 20th
        </p>
        <Button variant="secondary" size="lg">
          Button
        </Button>
      </section>
    </div>
  );
}

export default AboutUsPage;
