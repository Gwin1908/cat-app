import Breeds from "@/Components/Breeds/Breeds";
import BreedsHeader from "@/Components/Breeds/Breeds";
import NavigationBar from "@/Components/NavigationBar/NavigationBar";
import Link from "../../../node_modules/next/link";
import "./Breeds.scss";

const API_Key =
  "live_pemFGIQMgYrPNaSO7selYgEmwecDWrK4llFFlmh4dV3Ft5O25ElE0doOYzMeDW65";

async function fetchBreeds() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  return response.json();
}

export default async function Voting() {
  const breeds = await fetchBreeds();

  return (
    <section className="breeds-section">
      <NavigationBar />
      <div className="breeds-content">
        {breeds && <Breeds breedsArr={breeds} />}
      </div>
    </section>
  );
}
