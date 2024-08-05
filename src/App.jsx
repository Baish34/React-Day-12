import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to Our Blog</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const BlogDetails = ({ blog }) => {
  return (
    <div>
      <h2>The Importance of Learning React</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      <p>{blog.blog}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Our Blog. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  const blog = {
    id: 1,
    author: "Jane Doe",
    date: "March 1, 2024",
    blog: "Lorem ipsum dolor sir rgrg, condgwqu adipisin  emf..",
  };
  return (
    <>
      <Header />
      <main>
        <BlogDetails blog={blog} />
      </main>
      <Footer />
    </>
  );
}
