import Header from "./compoenets/Header/Header";
import CoreConcept from "./compoenets/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
