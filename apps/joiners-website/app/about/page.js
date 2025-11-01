import { pgInfo } from '@shared/constants/pg-info.js';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">About {pgInfo.name}</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          Welcome to {pgInfo.name}, your home away from home. We provide comfortable, safe, and affordable accommodation for students and working professionals.
        </p>
        <p className="text-lg mb-8">
          Our mission is to provide a clean, hygienic, and friendly environment where you can focus on your studies or work without any worries.
        </p>
        <p className="text-lg">
          We are located in the heart of the city, with easy access to public transportation, shopping malls, and restaurants.
        </p>
      </div>
    </div>
  );
}
