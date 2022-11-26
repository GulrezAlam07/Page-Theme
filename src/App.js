import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
      Jamia Millia Islamia, an institution originally established at Aligarh in United Provinces, India in 1920 became a Central University by an act of the Indian Parliament in 1988.
       In Urdu language, Jamia means ‘University’, and Millia means ‘National’.
    The story of its growth from a small institution in the pre-independence
   India to a central university located in New Delhi—offering integrated
     education from nursery to research in specialized areas—is a saga of 
    dedication, conviction and vision of a people who worked against all 
   odds and saw it growing step by step. They “built up the Jamia Millia
   stone by stone and sacrifice by sacrifice,” said Sarojini Naidu, 
   the nightingale of India.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>👩‍🎓  Hello Jamian 🧑‍🎓</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>Jamia Millia Islamia, New Delhi</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
