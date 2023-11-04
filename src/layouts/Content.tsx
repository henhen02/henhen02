import { useEffect, useState } from "react";

interface Repo {
  name: string;
  html_url: string;
  thumbnail_url: string;
}

const Content = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.github.com/users/henhen02/repos")
      .then((response) => response.json())
      .then((data) => {
        const repos = data.map((repo: any) => ({
          name: repo.name,
          html_url: repo.html_url,
          thumbnail_url: `https://github-readme-stats.vercel.app/api/pin/?username=henhen02&repo=${repo.name}`,
        }));
        setRepos(repos);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container mx-auto px-4">
      <div>
        <section id="about_me" className="my-8">
          <h1 className="text-2xl font-bold mb-2">About me</h1>
          <div>
            <p className="text-gray-700">
              Hello there! I'm Hendri, a student from the class of 2020,
              currently pursuing my degree in Informatics Engineering at the
              Institute of Technology Sumatera. I have a keen interest in
              frontend development and am always eager to learn more about it.
              Being a part of the vibrant community at the Institute of
              Technology Sumatera has been an enriching experience. It has
              provided me with numerous opportunities to learn, grow, and
              collaborate with fellow students who share the same passion for
              technology. I enjoy exploring new technologies and tools related
              to frontend development. I believe that staying updated with the
              latest trends and technologies is crucial in this ever-evolving
              field. I'm excited about the journey ahead and look forward to
              making a positive impact through my skills and knowledge in
              frontend development. Thank you for taking the time to learn more
              about me!
            </p>
          </div>
        </section>
        <section id="projects" className="my-8">
          <h1 className="text-2xl font-bold mb-2">Projects</h1>
          {loading ? (
            <div className="flex flex-wrap justify-center">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 animate-pulse"
                >
                  <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <div className="w-full h-48 bg-gray-300"></div>
                    <div className="p-4">
                      <div className="w-3/4 h-4 bg-gray-300 mb-2"></div>
                      <div className="w-1/2 h-4 bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center">
              {repos.map((repo) => (
                <div
                  key={repo.name}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transition duration-300 transform hover:scale-105"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <img
                        className="w-full max-h-48 object-cover"
                        src={repo.thumbnail_url}
                        alt={`${repo.name} thumbnail`}
                      />
                    </a>
                    <div className="p-4">
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <h2 className="text-lg font-bold mb-2">{repo.name}</h2>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section id="favorite" className="my-8">
          <h1 className="text-2xl font-bold mb-2">My Favorite Tech</h1>
          <div className="flex flex-wrap justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                alt="JavaScript logo"
                className="w-24 h-24 object-contain"
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
                alt="React logo"
                className="w-24 h-24 object-contain"
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/react-native-555397.png"
                alt="React Native logo"
                className="w-24 h-24 object-contain"
              />
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png"
                alt="Python logo"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Content;
