import React, { Component } from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        possimus molestiae delectus cumque molestias est accusantium! Sint
        dolorem ex blanditiis amet rem velit, debitis ab deleniti suscipit
        doloribus inventore neque!
      </p>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Mochammad Mahardika</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

export default App;
