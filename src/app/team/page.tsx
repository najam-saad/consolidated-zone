export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Our Team</h1>
        <div className="max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-lg shadow-xl backdrop-blur-md">
          {/* You can add a TeamMembers component here if you create one */}
          {/* For example: <TeamMembers /> */}
          <p className="text-lg text-gray-300">
            Information about our dedicated team members will be featured here soon.
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </main>
  );
} 