import { ContactForm } from "../components/ContactForm";
import { MovieSlider } from "../components/MovieSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MovieSlider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-500">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
