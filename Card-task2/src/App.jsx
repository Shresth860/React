import Card from "./components/Card"

const App = () => {
  const ProfileDescription = [
    {
      name: "Sara Swift",
      description: "Product Designer who focuses on simplicity & usability.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Alex Morgan",
      description: "Frontend developer creating clean digital experiences.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Mia Carter",
      description: "Visual designer turning ideas into meaningful products.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    },
  ];
  return (
    <div className="Parent">
      {ProfileDescription.map((profile,index)=>
        (
        <Card key={index} name={profile.name} description={profile.description} image={profile.image} />
        ))}
    </div>
  )
}

export default App