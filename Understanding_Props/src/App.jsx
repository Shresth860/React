import Card from "./components/Card"

const App = () => {
  return (
      <div className="parent">
     <Card user="Shresth Saxena" age={25} img="https://images.unsplash.com/photo-1773332589460-5a5d43c80f5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" />
     <Card user="John Doe" age={30} img="https://plus.unsplash.com/premium_photo-1764601209621-d0ef949ba462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
     <Card user="Jane Smith" age={28} img="https://plus.unsplash.com/premium_photo-1764601209621-d0ef949ba462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
      </div>
  )
}

export default App