function Teamsection() {

  const teamMembers = [

    {
      name: "Alex",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },

    {
      name: "Michael",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
    },

    {
      name: "Emily",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    },

    {
      name: "David",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
    },

    {
      name: "Sarah",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80"
    },

    {
      name: "James",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
    }

  ];


  return (

    <section className="team-section">

      <div className="team-cards">

        {teamMembers.map((member, index) => (

          <div className="team-card" key={index}>

            <img
              src={member.image}
              alt={member.name}
            />

          </div>

        ))}

      </div>


      <div className="team-features">

        <div>

          <h3>
            Real-Time Collaboration
          </h3>

          <p>
            Communicate instantly and keep everyone
            up to date with real-time collaboration.
          </p>

        </div>


        <div>

          <h3>
            Task & Project Tracking
          </h3>

          <p>
            Assign tasks, set deadlines, and track
            project progress with ease.
          </p>

        </div>


        <div>

          <h3>
            Performance Insights
          </h3>

          <p>
            Make smarter decisions with powerful
            performance insights and analytics.
          </p>

        </div>

      </div>

    </section>

  );
}

export default Teamsection;